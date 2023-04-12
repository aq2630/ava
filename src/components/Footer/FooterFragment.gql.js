import { graphql } from 'gatsby'

export const query = graphql`
  fragment footerFragment on ContentfulFooter {
    allRightsReserved
    successBlock {
      heading
      text
      animation {
        file {
          url
        }
      }
    }
    socialLinks {
      icon {
        file {
          contentType
          url
        }
        title
      }
      title
      link
    }
    companyInfo {
      raw
    }
    navigationLinks {
      link
      title
    }
  }

  fragment waitingListFragment on ContentfulCtaSection {
    ctaDescription {
      raw
    }
    ctaHeading
    errorMessages {
      sectionHeadings
    }
    formCta
    formName
    formNumber
    formEmail
  }
`
