module.exports.LANGUAGES = {
  EN: 'en',
  AR: 'ar',
}
module.exports.TYPENAME = '__typename'
module.exports.BLOG_WRITTEN_BY_TEXT = 'Written by'
module.exports.SLASH_HEIGHT = 210
module.exports.ContentType = {
  videoMp4: 'video/mp4',
}
module.exports.RECAPTCHA_SITE_KEY = '6LccJrAeAAAAANLmC7iHMVRNp8DFetNtfBdT69Xv'
module.exports.BLOG_MINUTE_DURATION_EN = 'min read'
module.exports.BLOG_MINUTE_DURATION_AR = 'دقيقة مشاهدة'
module.exports.BLOG_SLIDER_HEADING_EN = 'More like this'
module.exports.BLOG_SLIDER_HEADING_AR = 'المزيد من هذا القبيل'
module.exports.ROUTES = {
  HOME: {
    to: '/',
    key: 'What we do',
  },
  ABOUT: {
    to: '/aboutUs',
    key: 'About us',
  },
  ARENA: {
    to: '/arena',
    key: 'Arena',
  },
  COMMUNITY: {
    to: '/', // TODO: get link to community
    key: 'Community',
  },
  FAQS: {
    to: '/faqs',
    key: 'faqs',
  },
  PRICING: {
    to: '/pricing',
    key: 'pricing',
  },
  CONTACT: {
    to: '/contactUs',
    key: 'Contact us',
  },
  TANDC: {
    to: '/termsAndConditions',
    key: 'Terms & Conditions',
  },
  PRIVACY: {
    to: '/privacyPolicy',
    key: 'Privacy Policy',
  },
  BLOG: {
    to: '/blog',
    key: 'Blog',
  },
}

module.exports.CMS = {
  GQL_API_URL: 'https://graphql.contentful.com/content/',
  CMS_ENVIRONMENT: 'master',
  CMS_CONTENT_VERSION: 'v1',
}
module.exports.METADATA = {
  title: 'JB',
  description: '',
  author: '',
  siteUrl: {
    development: 'localhost:8000',
    production: 'https://website.stage.jbinfra-nonprod.net',
  },
}
