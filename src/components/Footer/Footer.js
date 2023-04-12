import { Box, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import Lottie from 'react-lottie'
import Link from '../Link'
import AnimatedText from '../AnimatedText'
import SocialIcons from '../SocialIcons'
import WaitingListButton from '../WaitlistButton'
import RichText from '../RichText'
import { waitingListSubmission } from '../../services/waitingListSubmission'
import { checkValidation } from '../../utils/formValidation'
import { useStyles } from './Footer.styles'

export const SubmitState = {
  INITIAL: 0,
  SUBMITTING: 1,
  SUBMITTED: 2,
  ERROR: 3,
}

const Footer = React.forwardRef(
  ({ t, data = {}, path, pageContext, location }, ref) => {
    const {
      allRightsReserved,
      successBlock: {
        heading,
        text,
        animation: {
          file: { url: footerAnimation },
        },
      },
      navigationLinks = [],
      companyInfo = {},
      waitingList = {},
      socialLinks = [],
    } = data
    const companyInformation = companyInfo.raw && JSON.parse(companyInfo.raw)
    const [
      { sectionHeadings: nameErrorMessage },
      { sectionHeadings: emailErrorMessage },
      ,
      ,
      { sectionHeadings: waitinglistSubject },
      { sectionHeadings: errorMessageText },
      { sectionHeadings: waitingListRecaptcha },
    ] = waitingList?.errorMessages

    const scrollY = useScrollPosition(60)
    const { slug } = pageContext
    const isBackgroundVisible =
      slug !== '/' ||
      (ref.current &&
        scrollY >= ref.current.offsetTop - ref.current.clientHeight / 25)
    const styles = useStyles({ isBackgroundVisible })
    const [submitState, setSubmitState] = useState(SubmitState.INITIAL)
    const [errorMessage, setErrorMessage] = useState(false)
    const [fieldValidation, setFieldValidation] = useState({})
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const hasError = (fieldName) =>
      !fieldValidation[fieldName] && Object.keys(fieldValidation).length !== 0
    const { executeRecaptcha } = useGoogleReCaptcha()

    const formSubmitHandler = async (e) => {
      e.preventDefault()
      const { validateEntries, status } = checkValidation(fullName, email)
      if (!status) {
        setFieldValidation(validateEntries)
        setSubmitState(SubmitState.INITIAL)
        return
      }
      setSubmitState(SubmitState.SUBMITTING)
      try {
        if (!executeRecaptcha) {
          throw new Error('Recaptcha is not loaded')
        }
        const isVerified = await executeRecaptcha(waitingListRecaptcha)
        if (isVerified) {
          const formData = {
            name: fullName,
            email,
            subject: waitinglistSubject,
          }

          waitingListSubmission(formData, location.hostname).then(
            (response) => {
              if (response.status === 200) {
                setSubmitState(SubmitState.SUBMITTED)
              } else {
                throw new Error('Error while submitting form')
              }
            },
          )
        }
      } catch (error) {
        setSubmitState(SubmitState.ERROR)
        setErrorMessage(errorMessageText)
      }
    }

    useEffect(() => {
      setSubmitState(SubmitState.INITIAL)
      setErrorMessage(false)
      setFieldValidation({})
      setFullName('')
      setEmail('')
    }, [path])

    return (
      <footer id="footer-main" className={styles.footerContainer}>
        <Box ref={ref} id="footer-slash" className={styles.background}>
          {/* Get early access section  */}

          {submitState !== SubmitState.SUBMITTED ? (
            // Get early access form
            <Container maxWidth="lg">
              <Grid container className={styles.waitlistWrapper}>
                <Grid item md={6} xs={12}>
                  <Box
                    className={[
                      styles.waitingListDescription,
                      styles.waitingListRow,
                    ].join(' ')}
                  >
                    <AnimatedText
                      animationType="wavy"
                      variant="h1"
                      content={waitingList.ctaHeading || ''}
                      wrapperClass={styles.waitingListTitle}
                    />
                    {waitingList.ctaDescription?.raw && (
                      <RichText
                        document={JSON.parse(waitingList.ctaDescription.raw)}
                        variant="body1"
                      />
                    )}
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box
                    className={[
                      styles.waitingListForm,
                      styles.waitingListRow,
                    ].join(' ')}
                  >
                    <form
                      noValidate
                      onSubmit={formSubmitHandler}
                      className={styles.footerForm}
                    >
                      <TextField
                        id="preferredName"
                        error={hasError('name')}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={waitingList.formName}
                        fullWidth
                        helperText={hasError('name') ? nameErrorMessage : ''}
                        color="secondary"
                        required
                      />
                      <TextField
                        id="email"
                        error={hasError('email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={waitingList.formEmail}
                        fullWidth
                        helperText={hasError('email') ? emailErrorMessage : ''}
                        color="secondary"
                        required
                      />
                      <WaitingListButton
                        isButtonBackgroundAnimated
                        className={styles.footerCta}
                        title={
                          errorMessage ? errorMessageText : waitingList.formCta
                        }
                        loading={submitState === SubmitState.SUBMITTING}
                        type="submit"
                      />
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          ) : (
            // Thank You component
            <Grid
              container
              className={`${styles.waitlistWrapper} ${styles.successMessageContainer}`}
            >
              {/* success message will be here */}
              <Box className={styles.successMessage}>
                <Typography className={styles.successHeading} variant="h1">
                  {heading}
                </Typography>
                <Typography variant="h3">{text}</Typography>
              </Box>
              <Box className={styles.footerAnimationStyle}>
                <Lottie
                  options={{
                    autoplay: true,
                    loop: true,
                    path: footerAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  width="100%"
                />
              </Box>
            </Grid>
          )}
        </Box>

        {/* Footer with page links and social icons and licencing information and all rights resercved text */}
        <Box bgcolor="secondary.main" color="text.secondary">
          <Container maxWidth="lg">
            <Grid container className={styles.footerWrapper}>
              <Box className={styles.links} color="text.secondary">
                {navigationLinks.map((route) => (
                  <Link
                    key={`nav-link-${route?.title.split(' ').join('-')}`}
                    id={`nav-link-${route?.title.split(' ').join('-')}`}
                    to={route?.link || '/'}
                  >
                    {route?.title}
                  </Link>
                ))}
              </Box>
              <SocialIcons socialLinks={socialLinks} />
              <Box className={styles.copyright}>{allRightsReserved}</Box>
            </Grid>
            {companyInformation && (
              <RichText
                className={styles.bsfInfo}
                document={companyInformation}
              />
            )}
          </Container>
        </Box>
      </footer>
    )
  },
)

export default Footer
