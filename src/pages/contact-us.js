import { graphql } from 'gatsby'
import ContactPage from '../views/contactUs'

export default ContactPage
export const query = graphql`
  query ContactUsQuery($slug: String, $locale: String) {
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
        ... on ContentfulButton {
          text
          link
        }
        ... on ContentfulContactForm {
          id
          formFields {
            ... on ContentfulFormField {
              id
              placeholderText
              fieldType
              validationText
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
