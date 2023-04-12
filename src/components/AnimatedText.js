/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { useOnScreen } from '../utils/dom'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    '-webkit-text-stroke': `1px ${theme.palette.secondary.main}`,
    textStroke: `1px ${theme.palette.secondary.main}`,
    color: 'transparent',
    backgroundColor: 'transparent',
    zIndex: theme.zIndex.xRayWrapper,
    display: ({ animationType }) => (animationType ? 'inline-block' : 'block'),
    overflow: ({ animationType }) =>
      animationType === 'slideUp' ? 'hidden' : 'visible',
    '[lang=ar] &': {
      height: ({ animationType }) =>
        animationType === 'slideUp' ? '96px' : 'auto',
      zIndex: ({ isSafari }) => !isSafari && theme.zIndex.slash,
    },
  },
  text: {
    position: 'relative',
    '[lang=ar] &': {
      color: ({ isXray, isSafari }) =>
        isXray && !isSafari && theme.palette.secondary.main,
      mixBlendMode: ({ isXray, isSafari }) =>
        isXray && !isSafari && 'difference',
      zIndex: ({ isXray, isSafari }) =>
        isXray && !isSafari && theme.zIndex.slash,
      lineHeight: ({ animationType }) =>
        animationType === 'slideUp' ? '1' : '1.5',
    },
    '&:before': {
      content: ({ content }) => `"${content} "`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      color: ({ color }) => color || theme.palette.secondary.main,
      zIndex: theme.zIndex.xRayText,
      textAlign: 'inherit',
      '[lang=ar] &': {
        color: ({ isXray, isSafari }) =>
          isXray && !isSafari && theme.palette.stroke.arabicXray,
        textStroke: ({ isXray, isSafari }) =>
          isXray && !isSafari && `3px ${theme.palette.stroke.arabicXray}`,
        '-webkit-text-stroke': ({ isXray, isSafari }) =>
          isXray && !isSafari && `3px ${theme.palette.stroke.arabicXray}`,
        zIndex: ({ isXray, isSafari }) =>
          isXray && !isSafari && theme.zIndex.slash,
      },
    },
  },
  slideUpAnimation: {
    animation: '$slideUp 700ms ease-in-out',
    transform: 'translateY(70px)',
    animationFillMode: 'forwards',
    '[lang=ar] &': {
      transform: 'translateY(100px)',
    },
  },
  wavyAnimation: {
    animation: '$wavy 1000ms linear',
  },
  '@keyframes wavy': {
    '0%, 40%, 100%': {
      transform: 'translateY(0)',
    },
    '20%': {
      transform: 'translateY(-20px)',
    },
  },
  '@keyframes slideUp': {
    '0%': {
      transform: 'translateY(70px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
}))

const AnimatedText = React.forwardRef(
  (
    {
      color,
      content,
      wrapperClass,
      textClass,
      isXray,
      animationType,
      ...props
    },
    ref,
  ) => {
    const [isAnimate, setIsAnimate] = useState(false)
    const headingTextRef = useRef(null)
    const isVisible = useOnScreen(headingTextRef)
    const [isSafari, setIsSafari] = useState(false)

    useEffect(() => {
      const userAgent =
        typeof window !== 'undefined' && navigator.userAgent.toLowerCase()
      if (userAgent.indexOf('safari') !== -1) {
        if (userAgent.indexOf('chrome') > -1) {
          setIsSafari(false)
        } else {
          setIsSafari(true)
        }
      }
    }, [])

    useEffect(() => {
      if (isVisible && animationType) {
        setIsAnimate(true)
      }
    }, [isVisible])

    const customTypography = (text, key = '') => {
      const styles = useStyles({
        color,
        content: text,
        isXray,
        animationType,
        isSafari,
      })

      return (
        <Box
          key={`word-${key}`}
          className={[wrapperClass, styles.wrapper].join(' ')}
        >
          <Typography
            {...props}
            ref={headingTextRef}
            style={{
              animationDelay: animationType ? `${key * 200}ms` : 'unset',
            }}
            className={[
              textClass,
              styles.text,
              styles.headingText,
              isAnimate ? styles[`${animationType}Animation`] : ' ',
            ].join(' ')}
          >
            {text}
          </Typography>
        </Box>
      )
    }

    return animationType
      ? content
          .split(' ')
          .map((eachWord, wordIndex) =>
            customTypography(`${eachWord}\u00A0`, wordIndex),
          )
      : customTypography(content)
  },
)
export default AnimatedText
