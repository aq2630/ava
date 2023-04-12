import { graphql } from 'gatsby'
import PricingPage from '../views/pricing'

export default PricingPage
export const query = graphql`
  query PricingQuery($slug: String, $locale: String) {
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
        ... on ContentfulSectionHeading {
          id
          sectionHeadings
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulPriceListBlock {
          id
          priceHeading
          priceLists {
            id
            price
            details
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
