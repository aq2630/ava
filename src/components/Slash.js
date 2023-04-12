import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { useWindowSize } from '@react-hook/window-size'
import { scaleValue } from '../utils/numbers'
import { useScrollHeight } from '../utils/dom'
import SLASH_HEIGHT from '../constants'

// Slash default values, can be overridden via props
const SLASH_INITIAL_GROWTH_SCALE = 1 // unit
const SLASH_TARGET_GROWTH_SCALE = 5 // unit
const SLASH_INITIAL_GROWTH_ROTATION_DEGREES = -35 // deg
const SLASH_TARGET_GROWTH_ROTATION_DEGREES = 0 // deg
const CONTAINER_MAX_WIDTH = 1100 // px

const useStyles = makeStyles((theme) => ({
  slash: {
    width: '100%',
    height: (props) => props.height,
    background: theme.palette.primary.main,
    position: 'fixed',
    transition: 'transform 0.1s ease-in-out',
    left: ({ windowWidth }) =>
      // to center the slash horizontally in the viewPort
      windowWidth > CONTAINER_MAX_WIDTH
        ? (windowWidth - CONTAINER_MAX_WIDTH) / 2
        : 0,

    zIndex: theme.zIndex.slash,
    [theme.breakpoints.down('xs')]: {
      top: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      top: ({ windowHeight, height, growthScale }) =>
        // to center the slash vertically in the viewPort
        slashTranslateYToCenter(windowHeight, height, growthScale.initial),
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: CONTAINER_MAX_WIDTH,
    },
    transform: ({
      height,
      scrollY,
      windowHeight,
      scrollHeight,
      startGrowingPositionYOffset,
      stopGrowingPositionYOffset,
      growthScale,
      rotationDegrees,
    }) =>
      getSlashTransform(
        height,
        scrollY,
        windowHeight,
        scrollHeight,
        startGrowingPositionYOffset,
        stopGrowingPositionYOffset,
        growthScale,
        rotationDegrees,
      ),
  },
}))
const slashTranslateYToCenter = (
  parentHeight, // height of the parent wrt which centering has to happen
  slashHeight = SLASH_HEIGHT,
  scale = SLASH_INITIAL_GROWTH_SCALE, // the current scale factor applied
) => (parentHeight - slashHeight * scale) / 2

const getSlashTransform = (
  height,
  scrollY,
  windowHeight,
  scrollHeight,
  startGrowingPositionYOffset,
  stopGrowingPositionYOffset,
  growthScale,
  rotationDegrees,
) => {
  const PAGE_HEIGHT = scrollHeight - windowHeight
  // Actual position from the top, calculated using the offsets
  const START_GROWING_POS_Y = PAGE_HEIGHT - startGrowingPositionYOffset
  const STOP_GROWING_POS_Y = PAGE_HEIGHT - stopGrowingPositionYOffset

  let degrees = rotationDegrees.initial
  let scale = growthScale.initial
  let translateY = 0
  // animation takes place when scrollY reaches the animation start position
  if (scrollY > START_GROWING_POS_Y) {
    degrees = scaleValue(
      scrollY,
      [START_GROWING_POS_Y, STOP_GROWING_POS_Y],
      [rotationDegrees.initial, rotationDegrees.target],
    )
    scale = scaleValue(
      scrollY,
      [START_GROWING_POS_Y, STOP_GROWING_POS_Y],
      [growthScale.initial, growthScale.target],
    )
    // Note: translateY works w.r.t. `top` which is the center of the viewport
    translateY = scaleValue(
      scrollY,
      [START_GROWING_POS_Y, STOP_GROWING_POS_Y],
      [0, -slashTranslateYToCenter(windowHeight, height, scale)],
    )
  }

  return `translate3d(0px, ${translateY}px, 0px) rotate(${degrees}deg) scale(${scale}) `
}

const Slash = ({
  // offsets wrt to the bottom of the viewPort
  startGrowingPositionYOffset = 0, // animation starts here
  stopGrowingPositionYOffset = 0, // animation stops here
  growthScale = {
    initial: SLASH_INITIAL_GROWTH_SCALE, // initial scale factor
    target: SLASH_TARGET_GROWTH_SCALE, // scale factor once the animation is complete
  },
  rotationDegrees = {
    initial: SLASH_INITIAL_GROWTH_ROTATION_DEGREES, // initial rotation degree
    target: SLASH_TARGET_GROWTH_ROTATION_DEGREES, // rotation once the animation is complete
  },
  height = SLASH_HEIGHT,
  ...props
}) => {
  const scrollY = useScrollPosition(60)
  const [visibleSlash, setVisibleSlash] = useState(false)
  const [windowWidth, windowHeight] = useWindowSize()

  const scrollHeight = useScrollHeight()
  const styles = useStyles({
    height,
    scrollY,
    windowWidth,
    windowHeight,
    scrollHeight,
    startGrowingPositionYOffset,
    stopGrowingPositionYOffset,
    growthScale,
    rotationDegrees,
  })

  useEffect(() => {
    setTimeout(() => {
      setVisibleSlash(true)
    }, 0)
  }, [visibleSlash])

  return <div id={`slash-body`} className={visibleSlash ? styles.slash : ''} />
}

export default Slash
