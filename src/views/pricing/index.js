import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { useStyles } from './pricing.styles'
import { useOnScreen } from '../../utils/dom'
import { AnimatedText, SideMenu, XRayText } from '../../components'
import { contentfulArrayToObject } from '../../utils/cms'

const PricingPage = ({ t, data = {} }) => {
  const pricingEntries = contentfulArrayToObject(data.feature || [])
  const { feature } = data
  const {
    sectionHeadings: basicAccountHeading,
  } = pricingEntries.ContentfulSectionHeading
  const miniSlash = pricingEntries?.ContentfulImageAnimation.image.file.url
  const priceListItems = pricingEntries?.ContentfulPriceListBlock
  const [activeSideMenuIndex, setActiveSideMenuIndex] = useState(0)
  const styles = useStyles()
  const slashRef = useRef(null)

  const referencesForPricingSection = {}
  feature.forEach((featureItem, index) => {
    referencesForPricingSection[`pricing-${index}`] = useRef(null)
  })

  const pricingBlockOnScreen = {}
  Object.entries(referencesForPricingSection).forEach(
    (pricingSection, index) => {
      pricingBlockOnScreen[`onscreen-${index}`] = useOnScreen(pricingSection[1])
    },
  )

  useEffect(() => {
    const visiblePricingBlock = Object.entries(pricingBlockOnScreen).filter(
      (pricingBlock) => pricingBlock[1] === true,
    )
    if (visiblePricingBlock.length > 0) {
      const [visiblePricingBlockName] = visiblePricingBlock[0]
      const visiblePricingBlockIndex = visiblePricingBlockName.split('-')[1]
      setActiveSideMenuIndex(Number(visiblePricingBlockIndex))
    }
  }, [pricingBlockOnScreen])

  return (
    <main>
      <Box className={styles.bannerContainer}>
        <Container maxWidth="lg">
          <Box className={styles.bannerText}>
            <AnimatedText
              animationType="wavy"
              variant="h2"
              content={basicAccountHeading}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container className={styles.mainContainer}>
          <Grid item lg={4} md={4} xs={12} className={styles.pricingSidebar}>
            {/* Side menu */}
            <SideMenu
              headingPrefix={'pricing'}
              miniSlashPath={miniSlash}
              sideMenuItem={priceListItems}
              slashRef={slashRef}
              activeSideMenuIndex={activeSideMenuIndex}
            />
          </Grid>
          {/* Price Sections */}
          <Grid item lg={8} md={8} xs={12}>
            {priceListItems.map((priceListItem, priceListItemIndex) => (
              <div
                className={styles.priceListContainer}
                ref={
                  referencesForPricingSection[`pricing-${priceListItemIndex}`]
                }
                key={`pricing-${priceListItemIndex}`}
              >
                <Box
                  className={styles.fullWidthSpacer}
                  id={`pricing-heading-${priceListItemIndex}`}
                />
                <XRayText
                  variant="h3"
                  wrapperClass={styles.primaryHeading}
                  content={priceListItem.priceHeading}
                />
                {priceListItem.priceLists.map(
                  (priceListSubItem, priceListSubItemIndex) => (
                    <Grid
                      key={priceListSubItemIndex}
                      container
                      className={styles.priceListItemContainer}
                    >
                      <Grid item lg={9} sm={9} xs={9}>
                        <Typography
                          variant="body1"
                          className={styles.subHeading}
                        >
                          {priceListSubItem.details}
                        </Typography>
                      </Grid>
                      <Grid item lg={3} sm={3} xs={3}>
                        <Typography
                          variant="h3"
                          className={styles.subItemPrice}
                        >
                          {priceListSubItem.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  ),
                )}
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default PricingPage
