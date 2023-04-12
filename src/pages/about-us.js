import { graphql } from 'gatsby'
import AboutPage from '../views/aboutUs'

export default AboutPage
export const query = graphql`
  query AboutUsQuery($slug: String, $locale: String) {
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
        ... on ContentfulFeatureSectionAboutUs {
          id
          heading
          description {
            raw
          }
        }
        ... on ContentfulSocialFeed {
          feedParameters
          title
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
      }
      metaDescription
      metaTag
      title
      slug
    }
  }
`
