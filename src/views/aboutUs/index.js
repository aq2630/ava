import React, { useEffect, useRef } from 'react'
import { Container, Grid } from '@material-ui/core'
import useScrollPosition from '@react-hook/window-scroll'
import {
  AnimatedText,
  HeroSection,
  JoinUsSocials,
  RichText,
  XRayText,
} from '../../components'
import { useHeroStyles, useStyles } from './aboutUs.styles'
import { contentfulArrayToObject } from '../../utils/cms'

// markup
const AboutPage = ({ t, data = {}, intl }) => {
  const { hero, feature } = data
  const featureEntries = contentfulArrayToObject(data.feature || {})
  const styles = useStyles()
  const scrollY = useScrollPosition(60)
  const miniSlash = useRef()
  const aboutUsFeatureSection =
    featureEntries.ContentfulFeatureSectionAboutUs || []
  const joinUsSocials = featureEntries?.ContentfulJoinUsOnSocials

  useEffect(() => {
    if (miniSlash.current) {
      miniSlash.current.style.transform = `rotate(${scrollY / 10}deg)`
    }
  }, [scrollY])

  return (
    <main>
      {hero && (
        <HeroSection
          t={t}
          fullWidth={true}
          {...hero}
          useCustomStyles={useHeroStyles}
          isHeadingXRay
        />
      )}
      {/* Text Section & Sticky Heading and rotating Slash */}
      <Container maxWidth="lg">
        <Grid container className={styles.mainContainer}>
          <Grid item md={6} xs={12} className={styles.stickyHeadingContainer}>
            {/* Sticky Heading and rotating Slash */}
            <div className={styles.stickyDiv}>
              <div ref={miniSlash} className={styles.slash}></div>
              <AnimatedText
                isXray
                variant="h1"
                wrapperClass={styles.stickyHeading}
                textClass={styles.stickyText}
                content={feature[1].sectionHeadings}
              />
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={styles.mainTextContainer}>
            {aboutUsFeatureSection &&
              aboutUsFeatureSection.map((item, index) => {
                return (
                  <div key={index} className={styles.sectionSpace}>
                    <XRayText
                      variant="h3"
                      textClass={styles.subHeading}
                      content={item.heading}
                    />
                    <RichText
                      className={styles.subText}
                      variant="body1"
                      document={JSON.parse(item.description.raw)}
                    />
                  </div>
                )
              })}
          </Grid>
        </Grid>
      </Container>
      <JoinUsSocials data={joinUsSocials} />
    </main>
  )
}

export default AboutPage
