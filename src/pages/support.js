import { graphql } from 'gatsby'
import SupportPage from '../views/support'

export default SupportPage
export const query = graphql`
  query SupportQuery($slug: String, $locale: String) {
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
        ... on ContentfulSectionText {
          id
          sectionText {
            raw
          }
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
        ... on ContentfulButton {
          id
          text
          link
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulContactForm {
          id
          formFields {
            ... on ContentfulFormField {
              id
              placeholderText
              fieldType
            }
            ... on ContentfulFormCta {
              id
              ctaHeading
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
