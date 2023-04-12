import { graphql } from 'gatsby'
import BlogPage from '../views/blog'

export default BlogPage
export const query = graphql`
  query BlogPageQuery($slug: String, $locale: String) {
    header: contentfulHeader(node_locale: { eq: $locale }) {
      ...headerFragment
    }
    footer: contentfulFooter(node_locale: { eq: $locale }) {
      ...footerFragment
    }
    waitingList: contentfulCtaSection(node_locale: { eq: $locale }) {
      ...waitingListFragment
    }
    page: contentfulPage(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      feature: pageSection {
        ... on ContentfulFormField {
          placeholderText
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulSectionHeading {
          sectionHeadings
        }
      }
      metaDescription
      metaTag
      title
      slug
    }
    blogs: allContentfulBlogPost(filter: { node_locale: { eq: $locale } }) {
      nodes {
        slug
        title
        featured
        blogCategories {
          categoryName
        }
        publishDate
        minRead
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
`
