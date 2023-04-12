import { graphql } from 'gatsby'
import FaqsPage from '../views/faqs'

export default FaqsPage
export const query = graphql`
  query FaqQuery($slug: String, $locale: String) {
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
        ... on ContentfulPageFaqs {
          id
          faqs {
            id
            faqHeading
            faQs {
              id
              heading
              content {
                raw
              }
            }
          }
        }
        ... on ContentfulButton {
          text
          link
        }
        ... on ContentfulJoinUsOnSocials {
          id
          title
          text
          card {
            file {
              url
              fileName
              contentType
            }
          }
          socials {
            id
            title
            link
            icon {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
        ... on ContentfulCtaSection {
          id
          ctaHeading
          ctaDescription {
            raw
          }
          formName
          formNumber
          formCta
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
            }
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
