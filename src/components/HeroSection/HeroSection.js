import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Grid, useMediaQuery } from '@material-ui/core'
import WaitingListButton from '../WaitlistButton'
import RichText from '../RichText'
import Image from '../Image'
import AnimatedText from '../AnimatedText'
import AnimatedPhoneSet from '../AnimatedPhoneSet'
import { useOnScreen } from '../../utils/dom'
import { useStyles } from './HeroSection.style'

const HeroSection = ({
  t,
  bannerCta,
  bannerImages,
  description,
  heading,
  isHeadingXRay,
  homepage = false,
  fullWidth = false,
  useCustomStyles,
}) => {
  const [isAnimate, setIsAnimate] = useState(false)
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'))
  const headingRef = useRef(null)
  const isVisible = useOnScreen(headingRef)
  const styles = useCustomStyles
    ? useCustomStyles({ placeholder: bannerImages[2]?.image.file.url })
    : useStyles()

  useEffect(() => {
    if (isVisible) {
      setIsAnimate(true)
    }
  }, [isVisible])
  return (
    <Box component={fullWidth ? 'div' : Container}>
      <Grid container className={styles.root} mx="auto" my={0}>
        <Grid
          ref={headingRef}
          item
          xs={12}
          md={6}
          className={styles.textWrapper}
        >
          <Box className={styles.title}>
            {heading && (
              <AnimatedText
                isXray
                animationType={homepage && !smUp ? 'none' : 'slideUp'}
                variant="h1"
                content={heading}
              />
            )}
          </Box>

          {description?.raw && (
            <Box
              className={isAnimate ? styles.slideUpElement : ' '}
              style={{ animationDelay: '1.5s' }}
            >
              <RichText
                className={styles.description}
                variant="body1"
                document={JSON.parse(description.raw)}
              />
            </Box>
          )}
          {bannerCta && (
            <Box>
              <WaitingListButton
                className={isAnimate ? styles.slideUpElement : ' '}
                style={{ animationDelay: '1.7s' }}
                t={t}
                title={bannerCta.text}
              />
            </Box>
          )}
        </Grid>
        {bannerImages && (
          <Grid item xs={12} sm={6} className={styles.imgWrapper}>
            {homepage ? (
              <div className={styles.mockContainer}>
                <AnimatedPhoneSet
                  animationPath={bannerImages[0].image.file.url}
                  style={styles.heroSectionlottie}
                />
                <Image
                  className={styles.heroSectionJBCard}
                  {...bannerImages[1].image}
                  key={bannerImages.title}
                />
              </div>
            ) : (
              <Box className={styles.bannerImage}>
                {bannerImages.map((bannerImageSet) => (
                  <Image {...bannerImageSet.image} key={bannerImageSet.title} />
                ))}
              </Box>
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default HeroSection
