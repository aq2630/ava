import { useEffect, useState } from 'react'

/* eslint-disable no-undef */
const getScrollHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  )
}

export const useScrollHeight = () => {
  const [height, setHeight] = useState()
  useEffect(() => {
    setHeight(getScrollHeight())
    const resizeListener = () => {
      setHeight(getScrollHeight())
    }
    window.addEventListener('scroll', resizeListener)
    return () => {
      window.removeEventListener('scroll', resizeListener)
    }
  }, [])
  return height
}

/* 
  reusable hook to use IntersectionObserver API. 
  https://stackoverflow.com/a/65008608
  const DummyComponent = () => {
  
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  
  return <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>
}
*/
export const useOnScreen = (
  ref,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  },
) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    // for using Browser API specific utils https://stackoverflow.com/a/59426367
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
