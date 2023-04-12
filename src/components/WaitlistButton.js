import React, { useEffect, useRef, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useOnScreen } from '../utils/dom'
import LoadingSpinner from './LoadingSpinner'

const useStyles = makeStyles((theme) => ({
  buttonAnimation: {
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      background: theme.palette.background.default,
      top: 0,
      width: '150%',
      height: '100%',
      opacity: 0.2,
      left: '200%',
      transition: 'all 0.4s ease',
      transform: 'skewX(-33.75deg) translateX(-50%)',
      animation: '$buttonAnimation 1s linear 500ms',
    },
  },
  button: {
    transition: 'all 0.4s ease',
  },
  squareButton: {
    borderRadius: 2,
    fontSize: '1.125rem',
    fontWeight: 500,
    overflow: 'hidden',
    padding: theme.spacing(1.25, 2.75),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(1, 1.5),
    },
    '& span': {
      zIndex: theme.zIndex.xRayWrapper,
    },
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      background: theme.palette.background.default,
      top: 0,
      width: '150%',
      height: '100%',
      opacity: 0.2,
      left: '-100%',
      transition: 'all 0.4s ease',
      transform: 'skewX(-33.75deg) translateX(-50%)',
    },
    '&:hover:after': {
      left: '50%',
      top: '0',
    },
  },
  buttonLoading: {
    pointerEvents: 'none',
  },
  '@keyframes buttonAnimation': {
    '0%': {
      left: '-200%',
    },
    '100%': {
      left: '200%',
    },
  },
}))
const WaitingListButton = ({
  t,
  color,
  className,
  isButtonBackgroundAnimated,
  title,
  loading = false,
  ...props
}) => {
  const styles = useStyles()
  const [isAnimate, setIsAnimate] = useState(false)
  const buttonRef = useRef(null)
  const isVisible = useOnScreen(buttonRef)

  useEffect(() => {
    if (isVisible) {
      setIsAnimate(true)
    }
  }, [isVisible])

  return (
    <Button
      ref={buttonRef}
      onClick={() => {
        scrollTo('#footer-main')
      }}
      variant="contained"
      className={[
        styles.squareButton,
        isAnimate && isButtonBackgroundAnimated ? styles.buttonAnimation : ' ',
        className,
        styles.button,
        loading ? styles.buttonLoading : ' ',
      ].join(' ')}
      color={color || 'secondary'}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {title}
    </Button>
  )
}
export default WaitingListButton
