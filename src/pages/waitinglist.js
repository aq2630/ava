import { graphql } from 'gatsby'
import Waitinglist from '../views/waitinglist'

export default Waitinglist
export const query = graphql`
  query WaitingListPageQuery($slug: String, $locale: String) {
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
      metaDescription
      metaTag
      title
      slug
    }
  }
`
