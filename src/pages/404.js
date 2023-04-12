import { graphql } from 'gatsby'
import ErrorPage from '../views/404'

export default ErrorPage
export const query = graphql`
  query ErrorPageQuery($slug: String, $locale: String) {
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
        ...homeFragment
        ... on Contentful404Section {
          image {
            file {
              url
              contentType
            }
          }
          title
          description {
            raw
          }
          button {
            text
          }
        }
      }
      metaDescription
      metaTag
      title
      slug
    }
  }
`
