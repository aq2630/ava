import React from 'react'
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import {
  AnimatedText,
  HeroSection,
  HomeSlider,
  PromoItem,
  ScreenshotsItem,
  Slash,
  UserTestimonial,
} from '../../components'
import { contentfulArrayToObject, getDescription } from '../../utils/cms'
import { useHeroStyles, useStyles } from './Home.styles'
import { SLASH_HEIGHT } from '../../constants'

const IndexPage = ({ t, language, footerNode, data = {}, ...props }) => {
  const {
    hero,
    pageData: { pageSection },
    contentfulFeatureSection,
  } = data
  const {
    ContentfulHomepageServices: homepageServices,
    ContentfulSliderBlock: homeSliderBlock,
    ContentfulTestimonialSection: userTestimonials,
    ContentfulImageAnimation: {
      image: {
        file: { url: homePageVideoUrl, contentType },
      },
    },
  } = contentfulArrayToObject(pageSection)
  const { sliderHeading } = homeSliderBlock
  const {
    ContentfulSectionHeading: { sectionHeadings: beSmartHeading },
  } = contentfulArrayToObject(pageSection)
  const { featureHeading: screenShostHeading } = contentfulFeatureSection
  const { testimonialHeading } = userTestimonials
  const screenShostDescription = getDescription(
    contentfulFeatureSection.featureDescription.raw,
  )
  const slashHeight = SLASH_HEIGHT
  const theme = useTheme()
  const newHeight = useMediaQuery(theme.breakpoints.down('sm'))
    ? slashHeight * 0.5
    : slashHeight
  const slashMaxGrowth = (footerNode?.clientHeight * 1.25) / newHeight
  const styles = useStyles()
  const screenshotMockups = contentfulFeatureSection.featureImages

  return (
    <main className={styles.root}>
      <Slash
        stopGrowingPositionYOffset={footerNode?.clientHeight / 2}
        startGrowingPositionYOffset={footerNode?.clientHeight * 3}
        height={newHeight}
        growthScale={{ initial: 1, target: slashMaxGrowth }}
      />
      {hero && (
        <HeroSection homepage t={t} {...hero} useCustomStyles={useHeroStyles} />
      )}
      <Box className={styles.videoContainer}>
        <video
          className={styles.homeVideo}
          loop
          autoPlay={true}
          muted={true}
          playsInline={true}
        >
          <source src={homePageVideoUrl} type={contentType} />
        </video>
      </Box>
      <Box className={styles.servicesTitle}>
        <AnimatedText isXray variant="h1" content={beSmartHeading} />
      </Box>
      <Container maxWidth="lg">
        {homepageServices.map((homepageService, index) => (
          <PromoItem
            key={index}
            reverse={!homepageService.imageToRight}
            title={homepageService.serviceHeading}
            description={getDescription(homepageService.serviceDescription.raw)}
            animationPath={homepageService.serviceImages[0].image.file.url}
            placeholderPath={homepageService.serviceImages[1].image.file.url}
          />
        ))}
      </Container>
      <Box>
        <AnimatedText
          isXray
          variant="h1"
          content={sliderHeading}
          textClass={styles.homeSliderHeading}
        />
        <HomeSlider data={homeSliderBlock} />
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Box className={styles.anAccountSection}>
            <AnimatedText
              isXray
              variant="h2"
              textClass={styles.titleScreenShot}
              content={screenShostHeading}
            />
            <Typography
              className={styles.anAccountSectionDescription}
              variant="body1"
            >
              {screenShostDescription}
            </Typography>
          </Box>
        </Container>
        <ScreenshotsItem allScreenShots={screenshotMockups} />
      </Box>
      <Box className={styles.testimonialWrapper}>
        <Container maxWidth="lg">
          <Box className={styles.testimonialsSection}>
            <Box className={styles.testimonialHeadingBox}>
              <AnimatedText
                isXray
                variant="h1"
                textClass={styles.testimonialsHeading}
                content={testimonialHeading}
              />
            </Box>
            <UserTestimonial userTestimonials={userTestimonials} />
          </Box>
        </Container>
      </Box>
    </main>
  )
}

export default IndexPage
