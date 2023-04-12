import { graphql } from 'gatsby'
import ArenaPage from '../views/arena'

export default ArenaPage
export const query = graphql`
  query ArenaQuery($slug: String, $locale: String) {
    header: contentfulHeader(node_locale: { eq: $locale }) {
      ...headerFragment
    }
    footer: contentfulFooter(node_locale: { eq: $locale }) {
      ...footerFragment
    }
    waitingList: contentfulCtaSection(node_locale: { eq: $locale }) {
      ...waitingListFragment
    }
    hero: contentfulHeroSection(
      page: { elemMatch: { node_locale: { eq: $locale }, slug: { eq: $slug } } }
    ) {
      ...heroFragment
    }
    page: contentfulPage(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      feature: pageSection {
        ...homeFragment
      }
      metaDescription
      metaTag
      title
      slug
    }
  }
`
