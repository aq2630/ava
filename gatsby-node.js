const path = require('path')
const {
  ARABIC_CHAT_ID,
  ENGLISH_CHAT_ID,
  SPRINKLR_FUNCTION,
  getSprinklrChatId,
} = require('./src/config/sprinklrChat')

// ********** Blogs **********
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      blogs: allContentfulBlogPost {
        nodes {
          slug
          node_locale
          blogCategories {
            categoryName
          }
        }
      }
    }
  `)
  data.blogs.nodes.forEach((blog) => {
    actions.createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve('./src/views/blogPost/index.js'),
      context: {
        locale: blog.node_locale,
        blogPost: blog.slug,
        categoryName: blog.blogCategories[0].categoryName,
      },
    })
  })
}
// ***************************

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const { context } = page
  const { intl } = context

  if (intl && intl.language && !context.intlLocale) {
    // Map React-Intl locale values to Contentful's locale string
    const intlToCms = {
      en: 'en-US',
      ar: 'ar',
    }

    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        sprinklrChatIdScript: getSprinklrChatId(
          intl.language === 'ar' ? ARABIC_CHAT_ID : ENGLISH_CHAT_ID,
        ),
        sprinklrChatFunctionScript: SPRINKLR_FUNCTION,
        // Build the pages with the available react-intl locales
        // passed into the page level GraphQL context
        locale: intlToCms[intl.language],
        // Remove trailing slash unless it's the root '/'
        slug:
          intl.originalPath.length > 1
            ? intl.originalPath.replace(/\/$/, '')
            : intl.originalPath,
      },
    })
  }
}
