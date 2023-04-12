import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useIntl } from 'gatsby-plugin-intl'
import {
  AnimatedText,
  ArrowIcon,
  JoinUsSocials,
  Link,
  RichText,
  SideMenu,
  XRayText,
} from '../../components'
import { useStyles } from './faqs.style'
import { useOnScreen } from '../../utils/dom'
import { contentfulArrayToObject } from '../../utils/cms'

const FAQPage = ({ data = {} }) => {
  const featureEntries = contentfulArrayToObject(data.feature || [])

  const [
    { sectionHeadings: faqsSectionHeading },
    { sectionHeadings: goToContactPageHeading },
  ] = featureEntries?.ContentfulSectionHeading
  const socials = featureEntries?.ContentfulJoinUsOnSocials
  const miniSlash = featureEntries?.ContentfulImageAnimation.image.file.url
  const { faqs: faqItems } = featureEntries?.ContentfulPageFaqs
  const {
    link: contactUsLink,
    text: contactUsLinkText,
  } = featureEntries?.ContentfulButton
  const [activeSideMenuIndex, setActiveSideMenuIndex] = useState(0)
  const slashRef = useRef(null)
  const styles = useStyles()
  const { locale } = useIntl()

  const referencesForFAQsSection = {}
  faqItems.forEach((faqItem, index) => {
    referencesForFAQsSection[`faq-heading-${index}`] = useRef(null)
  })

  const faqOnScreen = {}
  Object.entries(referencesForFAQsSection).forEach((faqSection, index) => {
    faqOnScreen[`onscreen-${index}`] = useOnScreen(faqSection[1])
  })

  useEffect(() => {
    const visibleFaqBlock = Object.entries(faqOnScreen).filter(
      (faqBlock) => faqBlock[1] === true,
    )
    if (visibleFaqBlock.length > 0) {
      const [visibleFaqBlockName] = visibleFaqBlock[0]
      const visibleFaqBlockIndex = visibleFaqBlockName.split('-')[1]

      setActiveSideMenuIndex(Number(visibleFaqBlockIndex))
    }
  }, [faqOnScreen])

  return (
    <main>
      {/* First Heading with Blue Background */}
      <Box className={styles.bannerContainer}>
        <Container maxWidth="lg">
          <Box className={styles.bannerText}>
            <AnimatedText
              animationType="wavy"
              variant="h2"
              content={faqsSectionHeading}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container className={styles.mainFaqContainer}>
          <Box className={styles.fullWidthSpacer} />
          <Grid item lg={4} md={4} xs={12} className={styles.faqSidebar}>
            {/* Side menu */}
            <SideMenu
              headingPrefix={'faqs'}
              miniSlashPath={miniSlash}
              sideMenuItem={faqItems}
              slashRef={slashRef}
              activeSideMenuIndex={activeSideMenuIndex}
            />
          </Grid>

          {/* FAQ sections with accordions */}
          <Grid item lg={8} md={8} xs={12}>
            {faqItems.map((faqItem, faqItemIndex) => {
              return (
                <div
                  ref={referencesForFAQsSection[`faq-heading-${faqItemIndex}`]}
                  key={`faqHeadingKey-${faqItemIndex}`}
                  className={styles.faqContainer}
                >
                  <Box
                    className={styles.fullWidthSpacer}
                    id={`faqs-heading-${faqItemIndex}`}
                  />
                  <XRayText
                    variant="h3"
                    wrapperClass={styles.primaryHeading}
                    content={faqItem.faqHeading}
                  />
                  {faqItem.faQs.map((faqSubItem, faqSubItemIndex) => (
                    <Accordion
                      className={styles.accordion}
                      key={`faqSubItemKey-${faqSubItemIndex}`}
                    >
                      <AccordionSummary
                        className={styles.accordionSummary}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography
                          variant="body1"
                          className={styles.accordionSummaryTitle}
                        >
                          {faqSubItem.heading}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={styles.accordionDetails}>
                        {faqSubItem?.content?.raw && (
                          <RichText
                            variant="body1"
                            document={JSON.parse(faqSubItem?.content?.raw)}
                          />
                        )}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              )
            })}
          </Grid>
          <Grid item className={styles.goToContactHeadingSection}>
            <XRayText
              variant="h3"
              wrapperClass={styles.goToContactHeading}
              content={goToContactPageHeading}
            />
            <Box className={styles.contactLinkSection}>
              <Link className={styles.contactLink} to={contactUsLink}>
                {contactUsLinkText}
              </Link>
              <ArrowIcon locale={locale} direction="forward" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <JoinUsSocials data={socials} />
    </main>
  )
}

export default FAQPage
