import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import { Box } from '@material-ui/core'
import { useOnScreen } from '../utils/dom'

const AnimatedPhoneSet = ({ style, animationPath, animationDelay }) => {
  const lottieBoxRef = useRef()
  const isVisible = useOnScreen(lottieBoxRef) // false
  const [isPaused, setIsPaused] = useState(!!animationDelay) // false
  const [resetTimeout, setResetTimeout] = useState()
  const [isStopped, setIsStopped] = useState(false)

  useEffect(() => {
    if (isVisible) {
      if (isPaused) {
        const timeout = setTimeout(() => {
          setIsPaused(false)
          setIsStopped(false)
        }, animationDelay)
        setResetTimeout(timeout)
      }
    } else {
      setIsPaused(true)
      if (resetTimeout) {
        clearTimeout(resetTimeout)
        if (animationDelay) {
          setIsStopped(true)
        }
      }
    }
  }, [isVisible])

  return (
    <Box ref={lottieBoxRef} className={style}>
      <Lottie
        options={{
          autoplay: !animationDelay,
          loop: !animationDelay,
          path: animationPath,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width="100%"
        isPaused={isPaused}
        isStopped={isStopped}
      />
    </Box>
  )
}

export default AnimatedPhoneSet
