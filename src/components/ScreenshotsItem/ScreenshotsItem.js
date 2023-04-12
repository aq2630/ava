import React from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { Container, useMediaQuery } from '@material-ui/core'
import { useWindowSize } from '@react-hook/window-size'
import AnimatedPhoneSet from '../AnimatedPhoneSet'
import { scaleValue } from '../../utils/numbers'
import { useScrollHeight } from '../../utils/dom'
import { useStyles } from './ScreenshotsItem.style'

const SLASH_INITIAL_TRANSLATE_Y_PX = (height) => 0
const SLASH_TARGET_TRANSLATE_Y_PX = (height) => 200
const STARTING_SCREENSHOT_DELAY = 100
const DELAY_BETWEEN_SCREENSHOTS = 2750

const getPhoneTransform = (
  index,
  scrollY,
  windowWidth,
  windowHeight,
  scrollHeight,
) => {
  const PAGE_HEIGHT = scrollHeight - windowHeight
  const START_GROWING_Y_POS = PAGE_HEIGHT - 2800

  let translateY = SLASH_INITIAL_TRANSLATE_Y_PX(windowHeight)

  if (scrollY > START_GROWING_Y_POS) {
    translateY = scaleValue(
      scrollY,
      [START_GROWING_Y_POS, PAGE_HEIGHT],
      [
        SLASH_INITIAL_TRANSLATE_Y_PX(windowHeight),
        SLASH_TARGET_TRANSLATE_Y_PX(windowHeight),
      ],
    )
  }
  return `translate3d(0px, ${-translateY * index}px, 0px)`
}

const ScreenshotsItem = ({ allScreenShots }) => {
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const styles = useStyles()
  const scrollY = useScrollPosition(60)
  const [width, height] = useWindowSize()
  const scrollHeight = useScrollHeight()
  return (
    <>
      {smDown ? (
        <div className={styles.mobileScreenShotsContainer}>
          {allScreenShots.map((screenShotItem, screenshotIndex) => (
            <div key={screenshotIndex} className={styles.screenShotContainer}>
              <AnimatedPhoneSet
                animationDelay={
                  screenshotIndex === 0
                    ? STARTING_SCREENSHOT_DELAY
                    : screenshotIndex * DELAY_BETWEEN_SCREENSHOTS
                }
                animationPath={screenShotItem.image.file.url}
                style={styles.mobileScreenShotLottie}
              />
            </div>
          ))}
        </div>
      ) : (
        <Container maxWidth="lg">
          <div className={styles.root}>
            {allScreenShots.map((screenShotItem, screenshotIndex) => (
              <div
                style={{
                  transform: getPhoneTransform(
                    screenshotIndex,
                    scrollY,
                    width,
                    height,
                    scrollHeight,
                  ),
                }}
                className={styles.screenShotContainer}
                key={screenshotIndex}
              >
                <AnimatedPhoneSet
                  animationDelay={
                    screenshotIndex === 0
                      ? STARTING_SCREENSHOT_DELAY
                      : screenshotIndex * DELAY_BETWEEN_SCREENSHOTS
                  }
                  animationPath={screenShotItem.image.file.url}
                  style={styles.screenShotLottie}
                />
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  )
}

export default ScreenshotsItem
