import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { contentfulArrayToObject } from '../../utils/cms'
import { AnimatedText, RichText } from '../../components'
import { useStyles } from './staticPage.styles'

// markup
const TermsAndConditionsPage = ({ data = {} }) => {
  const styles = useStyles()
  const featureObject = contentfulArrayToObject(data.feature || [])
  const { ContentfulSectionHeading, ContentfulSectionText } = featureObject
  const sectionHeadings = ContentfulSectionHeading?.sectionHeadings
  const sectionText = ContentfulSectionText?.sectionText
  const termsPrivacyText = sectionText && JSON.parse(sectionText.raw)

  return (
    <Grid container justify="center" className={styles.root}>
      <Grid item xs={11} sm={8} md={7} xl={6}>
        <AnimatedText
          variant="h3"
          content={sectionHeadings}
          wrapperClass={styles.mainHeading}
        />
        {termsPrivacyText && (
          <Box>
            <RichText document={termsPrivacyText} />
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default TermsAndConditionsPage
