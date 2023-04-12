import { graphql } from 'gatsby'
import StaticPage from '../views/staticPage'

export default StaticPage
export const query = graphql`
  query PrivacyPolicyQuery($slug: String, $locale: String) {
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
        ...sectionHeadingFragment
        ...sectionTextFragment
      }
      metaDescription
      metaTag
      title
      slug
    }
  }
`
