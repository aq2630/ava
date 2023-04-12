import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'
import {
  AnimatedText,
  ArrowIcon,
  JoinUsSocials,
  Link,
  RichText,
  XRayText,
} from '../../components'
import { useStyles } from './contactUs.style'
import { checkValidation } from '../../utils/formValidation'
import { contentfulArrayToObject } from '../../utils/cms'
import { sendInformationToEmail } from '../../services/contactForm'

const DEFAULT_FORM_STATE = { name: '', email: '', mobile: '', message: '' }
const SAUDI_COUNTRY_CODE = '+966 5'

const SupportPageForm = ({ data = {}, hostName, styles }) => {
  const { formFields } = data
  const { locale } = useIntl()
  const successMessageText = formFields && formFields[5].ctaHeading
  const submitButtonText = formFields && formFields[4].ctaHeading
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(DEFAULT_FORM_STATE)
  const [fieldValidation, setFieldValidation] = useState({})

  const [
    { validationText: nameErrorMessage, placeholderText: namePlaceholder },
    { validationText: emailErrorMessage, placeholderText: emailPlaceholder },
    { validationText: numberErrorMessage, placeholderText: numberPlaceholder },
    { placeholderText: messagePlaceholder },
  ] = formFields

  const hasError = (fieldName) =>
    !fieldValidation[fieldName] && Object.keys(fieldValidation).length !== 0
  // For clearing the form once submitted and starting the button animation
  const handleSubmit = () => {
    const phone = SAUDI_COUNTRY_CODE.replace(/\s/g, '') + form.mobile
    const { name, email, mobile } = form
    const { validateEntries, status } = checkValidation(name, email, mobile)
    if (status) {
      setFieldValidation(validateEntries)

      sendInformationToEmail({ ...form, mobile: phone }, hostName).then(
        (response) => {
          if (response.status === 200) {
            setForm(DEFAULT_FORM_STATE)
            setSubmitted(true)
          }
        },
      )
    } else {
      setFieldValidation(validateEntries)
    }
  }

  const isFormDisabled =
    (form.name === '' || form.email === '' || form.message === '') && !submitted

  return (
    <Box
      component="form"
      className={styles.supportPageForm}
      onSubmit={handleSubmit}
    >
      <TextField
        error={hasError('name')}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value })
        }}
        value={form.name}
        placeholder={namePlaceholder}
        color="secondary"
        helperText={hasError('name') ? nameErrorMessage : ''}
        fullWidth
        className={styles.textField}
      />
      <TextField
        error={hasError('email')}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value })
        }}
        value={form.email}
        type={'email'}
        placeholder={emailPlaceholder}
        color="secondary"
        helperText={hasError('email') ? emailErrorMessage : ''}
        fullWidth
        className={styles.textField}
      />
      <TextField
        error={hasError('number')}
        type="tel"
        onChange={(e) => {
          setForm({ ...form, mobile: e.target.value })
        }}
        value={form.mobile}
        helperText={hasError('number') ? numberErrorMessage : ''}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {SAUDI_COUNTRY_CODE}
            </InputAdornment>
          ),
        }}
        inputProps={{ maxLength: 8 }}
        placeholder={numberPlaceholder}
        color="secondary"
        fullWidth
        className={[styles.textField, styles.phoneInput].join(' ')}
      />
      <Input
        onChange={(e) => {
          setForm({ ...form, message: e.target.value })
        }}
        value={form.message}
        placeholder={messagePlaceholder}
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
        endIcon={
          !submitted && <ArrowIcon locale={locale} direction="forward" />
        }
      >
        {submitted ? successMessageText : submitButtonText}
      </Button>
    </Box>
  )
}

const ContactPage = ({ data = {}, location }) => {
  const featureEntries = contentfulArrayToObject(data.feature || [])
  const [
    { sectionHeadings: askAnythingHeading },
    { sectionHeadings: notACustomerHeading },
    { sectionHeadings: writeUsAMessageHeading },
    { sectionHeadings: goToFaqsHeading },
  ] = featureEntries?.ContentfulSectionHeading
  const { link: faqLink, text: faqLinkText } = featureEntries?.ContentfulButton
  const socials = featureEntries?.ContentfulJoinUsOnSocials
  const fillFormText = JSON.parse(
    featureEntries?.ContentfulSectionText[1].sectionText.raw,
  )
  const commercialInquiryText = JSON.parse(
    featureEntries?.ContentfulSectionText[0].sectionText.raw,
  )
  const styles = useStyles()
  const { locale } = useIntl()

  return (
    <main>
      {/* First Heading with Blue Background */}
      <Box className={styles.bannerContainer}>
        <Container maxWidth="lg">
          <Box className={styles.bannerText}>
            <AnimatedText
              animationType="wavy"
              variant="h2"
              content={askAnythingHeading}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container className={styles.mainFormContainer}>
          {/* left section */}
          <Grid item lg={4} md={5} xs={12} className={styles.contactSidebar}>
            <Typography variant="h6" className={styles.notACustomerHeading}>
              {notACustomerHeading}
            </Typography>
            <div className={styles.sectionText}>
              <RichText variant="body1" document={commercialInquiryText} />
            </div>
          </Grid>
          {/* right section: includes form */}
          <Grid
            item
            lg={8}
            md={7}
            xs={12}
            className={styles.contactFormSection}
          >
            <XRayText
              variant="h2"
              wrapperClass={styles.writeUsHeading}
              content={writeUsAMessageHeading}
            />
            <div className={styles.sectionText}>
              <RichText variant="body1" document={fillFormText} />
            </div>
            <SupportPageForm
              data={featureEntries?.ContentfulContactForm}
              styles={styles}
              hostName={location.hostname}
            />
          </Grid>
          <Grid item className={styles.goToFaqsHeadingSection}>
            <XRayText
              variant="h3"
              wrapperClass={styles.goToFaqsHeading}
              content={goToFaqsHeading}
            />
            <Box className={styles.faqLinkSection}>
              <Link className={styles.faqLink} to={faqLink}>
                {faqLinkText}
                <ArrowIcon locale={locale} direction="forward" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <JoinUsSocials data={socials} />
    </main>
  )
}

export default ContactPage
