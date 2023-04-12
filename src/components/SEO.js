import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { LANGUAGES } from '../constants'

const SEO = ({
  language,
  title,
  metaDescription: description,
  metaTag,
  slug,
  theme,
}) => {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const keywords = [metaTag]
  const url = `${site.siteMetadata.siteUrl}/${language}${slug}`
  const meta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:url`,
      content: url,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `viewport`,
      content: 'minimum-scale=1, initial-scale=1, width=device-width',
    },
    {
      name: `theme-color`,
      content: theme.palette.text.primary,
    },
  ].concat(
    keywords.length > 0
      ? {
          name: `keywords`,
          content: keywords.join(`, `),
        }
      : [],
  )
  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      bodyAttributes={{
        dir: language === LANGUAGES.EN ? 'ltr' : 'rtl',
      }}
      title={title}
      titleTemplate={defaultTitle ? `${defaultTitle} | %s` : null}
      meta={meta}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="//cdn.curator.io/3.1/css/curator.css"
      />
      <link rel="stylesheet" href="https://use.typekit.net/wxd4lun.css"></link>
    </Helmet>
  )
}
export default SEO
