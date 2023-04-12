import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from '@material-ui/core/styles'
import { create } from 'jss'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'
import React from 'react'
import rtl from 'jss-rtl'
import { injectIntl } from 'gatsby-plugin-intl'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import FadeTransition from './FadeTransition'
import themeObject from '../assets/theme'
import SEO from './SEO'
import { useScript } from '../utils/externalScript'
import { RECAPTCHA_SITE_KEY } from '../constants'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

// https://github.com/mui-org/material-ui/tree/master/examples/gatsby
const Layout = ({ children, data = {}, location, ...props }) => {
  // footerSlash config
  const footerRef = React.useRef(null)
  const [footerNode, setFooterNode] = React.useState(footerRef?.current)
  React.useEffect(() => {
    setFooterNode(footerRef?.current)
  })
  // language
  const { locale: language } = props.intl

  const { sprinklrChatIdScript, sprinklrChatFunctionScript } = props.pageContext
  const {
    subscribe: subscribeSprinklrId,
    unsubscribe: unsubscribeSprinklrId,
  } = useScript({ innerHtml: sprinklrChatIdScript }, `sprinklrId-${language}`)
  const {
    subscribe: subscribeSprinklrFunction,
    unsubscribe: unsubscribeSprinklrFunction,
  } = useScript(
    { innerHtml: sprinklrChatFunctionScript },
    `sprinklrFunction-${language}`,
  )

  React.useEffect(() => {
    if (sprinklrChatIdScript && sprinklrChatFunctionScript) {
      subscribeSprinklrId()
      subscribeSprinklrFunction()
    }

    return () => {
      unsubscribeSprinklrId()
      unsubscribeSprinklrFunction()
    }
  }, [props.intl.locale])

  // theme
  const theme = themeObject(language)

  // TODO: change instances of T function to use Intl FormatMessage instead
  const t = (value, params) =>
    value ? props.intl?.formatMessage({ id: value }, params) : ''

  // pageData
  const {
    header = {},
    footer = {},
    waitingList = {},
    page = {},
    ...rest
  } = data
  const { title, metaDescription, metaTag, slug, ...pageData } = page || {}

  return (
    <React.Fragment key={language}>
      <SEO
        title={title}
        metaDescription={metaDescription}
        metaTag={metaTag}
        language={language}
        slug={slug}
        theme={theme}
      />
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <FadeTransition key={location.pathname}>
              <Header {...props} language={language} data={header} t={t} />
              {React.Children.map(children, (child) => {
                // checking isValidElement is the safe way
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, {
                    ...props,
                    data: { ...pageData, ...rest },
                    footerNode,
                    t,
                  })
                }
                return child
              })}
              <Footer
                location={location}
                {...props}
                ref={footerRef}
                data={{ ...footer, waitingList }}
                t={t}
              />
            </FadeTransition>
          </ThemeProvider>
        </StylesProvider>
      </GoogleReCaptchaProvider>
    </React.Fragment>
  )
}

export default injectIntl(Layout)
Layout.propTypes = {
  children: PropTypes.node,
}
