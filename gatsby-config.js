const { LANGUAGES, METADATA } = require('./src/constants')
require('dotenv').config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: METADATA.title,
    description: METADATA.description,
    author: METADATA.author,
    siteUrl: METADATA.siteUrl[process.env.NODE_ENV],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CMS_SPACE_ID}`,
        accessToken: `${process.env.CMS_AUTH_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/translations`,
        languages: Object.values(LANGUAGES),
        defaultLanguage: LANGUAGES.EN,
        redirect: true,
      },
    },
  ],
}
