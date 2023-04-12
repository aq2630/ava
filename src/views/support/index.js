import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { RichText, SideMenu } from '../../components'
import { useStyles } from './support.style'
import { useOnScreen } from '../../utils/dom'
import { contentfulArrayToObject } from '../../utils/cms'

const DEFAULT_FORM_STATE = { fName: '', lName: '', mobile: '', message: '' }
const NAV_HEIGHT = 6.4

const SupportPageForm = ({ data = {}, styles }) => {
  const { formFields } = data
  const successMessageText = formFields && formFields[5].ctaHeading
  const submitButtonText = formFields && formFields[4].ctaHeading
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(DEFAULT_FORM_STATE)

  // For clearing the form once submitted and starting the button animation
  const handleSubmit = () => {
    setSubmitted(true)
    setForm(DEFAULT_FORM_STATE)
  }

  const isFormDisabled =
    (form.fName === '' || form.lName === '' || form.message === '') &&
    !submitted

  return (
    <div className={styles.supportPageForm}>
      <TextField
        onChange={(e) => {
          setForm({ ...form, fName: e.target.value })
        }}
        value={form.fName}
        placeholder={formFields[0].placeholderText}
        color="secondary"
        fullWidth
        className={styles.textField}
      />
      <TextField
        onChange={(e) => {
          setForm({ ...form, lName: e.target.value })
        }}
        value={form.lName}
        placeholder={formFields[1].placeholderText}
        color="secondary"
        fullWidth
        className={styles.textField}
      />
      <TextField
        type="tel"
        onChange={(e) => {
          setForm({ ...form, mobile: e.target.value })
        }}
        value={form.mobile}
        placeholder={formFields[2].placeholderText}
        color="secondary"
        fullWidth
        className={styles.textField}
      />
      <Input
        onChange={(e) => {
          setForm({ ...form, message: e.target.value })
        }}
        value={form.message}
        placeholder={formFields[3].placeholderText}
        color="secondary"
        fullWidth
        multiline={true}
        rows={7}
        className={styles.textField}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isFormDisabled}
        color="secondary"
        className={submitted ? styles.successButton : styles.submitButton}
        endIcon={submitted ? <></> : <ArrowForwardIcon fontSize="default" />}
      >
        {submitted ? successMessageText : submitButtonText}
      </Button>
    </div>
  )
}

const FAQPage = ({ data = {} }) => {
  const featureEntries = contentfulArrayToObject(data.feature || [])

  const [
    { sectionHeadings: askAnythingHeading },
    { sectionHeadings: notACustomerHeading },
    { sectionHeadings: writeUsAMessageHeading },
    { sectionHeadings: faqsSectionHeading },
  ] = featureEntries?.ContentfulSectionHeading
  const fillFormText = JSON.parse(
    featureEntries?.ContentfulSectionText[1].sectionText.raw,
  )
  const commercialInquiryText = JSON.parse(
    featureEntries?.ContentfulSectionText[0].sectionText.raw,
  )
  const miniSlash = featureEntries?.ContentfulImageAnimation.image.file.url
  const { faqs: faqItems } = featureEntries?.ContentfulPageFaqs
  const [activeSideMenuIndex, setActiveSideMenuIndex] = useState(0)
  const slashRef = useRef(null)
  const styles = useStyles()

  const referencesForFAQsSection = {}
  faqItems.forEach((faqItem, index) => {
    referencesForFAQsSection[`faq-heading-${index}`] = useRef(null)
  })

  const faqOnScreen = {}
  Object.entries(referencesForFAQsSection).forEach((faqContainer, index) => {
    faqOnScreen[`onscreen-${index}`] = useOnScreen(faqContainer[1])
  })

  useEffect(() => {
    const filteredFaqBlock = Object.entries(faqOnScreen).filter(
      (e) => e[1] === true,
    )
    if (filteredFaqBlock.length > 0) {
      const [faqBlockKey] = filteredFaqBlock[0]
      const index = faqBlockKey.split('-')[1]

      setActiveSideMenuIndex(Number(index))
    }
  }, [faqOnScreen])

  return (
    <main>
      {/* First Heading with Blue Background */}
      <Grid container>
        <Grid item lg={2} md={1} />
        <Grid item lg={10} md={11} container className={styles.bannerContainer}>
          <Typography variant="h1" className={styles.bannerText}>
            {askAnythingHeading}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={styles.mainFormContainer}>
        <Grid item lg={2} md={1} xs={1} />
        {/* left section */}
        <Grid item lg={2} md={3} xs={11}>
          <Typography variant="h3" className={styles.notACustomerHeading}>
            {notACustomerHeading}
          </Typography>
          <div className={styles.sectionText}>
            <RichText variant="body1" document={commercialInquiryText} />
          </div>
        </Grid>
        <Grid item lg={1} md={1} xs={1} />
        {/* right section: includes form */}
        <Grid item lg={4} md={6} xs={10}>
          <Typography variant="h3" className={styles.writeUsHeading}>
            {writeUsAMessageHeading}
          </Typography>
          <div className={styles.sectionText}>
            <RichText variant="body1" document={fillFormText} />
          </div>
          <SupportPageForm
            data={featureEntries?.ContentfulContactForm}
            styles={styles}
          />
        </Grid>
      </Grid>

      {/* second heading FAQ section */}
      <Grid container className={styles.bannerFaqContainer}>
        <Grid item lg={2} sm={1} />
        <Grid item lg={10} sm={11} container>
          <Typography variant="h2" className={styles.faqBannerText}>
            {faqsSectionHeading}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className={styles.mainFaqContainer}>
        <Grid item lg={2} md={1} />

        {/* Side menu */}
        <SideMenu
          miniSlashPath={miniSlash}
          sideMenuItem={faqItems}
          slashRef={slashRef}
          navHeight={NAV_HEIGHT}
          activeSideMenuIndex={activeSideMenuIndex}
        />

        <Grid item lg={1} md={1} xs={1} />

        {/* FAQ sections with accordions */}
        <Grid item lg={5} md={6} xs={10}>
          {faqItems.map((item, index) => {
            return (
              <div
                ref={referencesForFAQsSection[`faq-heading-${index}`]}
                key={index}
                className={styles.faqContainer}
              >
                <Typography
                  variant="h2"
                  id={item.faqHeading}
                  className={styles.primaryHeading}
                >
                  {item.faqHeading}
                </Typography>
                {item.faQs.map((subItem, subIndex) => (
                  <Accordion className={styles.accordion} key={subIndex}>
                    <AccordionSummary
                      className={styles.accordionSummary}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography variant="h6">{subItem.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      {subItem?.content?.raw && (
                        <RichText
                          variant="body1"
                          document={JSON.parse(subItem?.content?.raw)}
                        />
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            )
          })}
        </Grid>
      </Grid>
    </main>
  )
}

export default FAQPage
