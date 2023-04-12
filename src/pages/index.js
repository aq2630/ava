import { graphql } from 'gatsby'
import HomePage from '../views/home'

export default HomePage

export const query = graphql`
  query HomeQuery($slug: String, $locale: String) {
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
    contentfulImageAnimation(image: { file: { url: { regex: "/[.]mp4/g" } } }) {
      image {
        file {
          url
          contentType
        }
      }
    }
    allContentfulHomepageSlider {
      nodes {
        sliderImage {
          image {
            file {
              url
            }
          }
        }
        slideHeading
        slideDescription {
          raw
        }
      }
    }
    contentfulFeatureSection(node_locale: { eq: $locale }) {
      featureHeading
      featureDescription {
        raw
      }
      featureImages {
        image {
          file {
            url
          }
        }
      }
    }
    pageData: contentfulPage(
      slug: { eq: $slug }
      node_locale: { eq: $locale }
    ) {
      metaDescription
      metaTag
      title
      slug
      pageSection {
        ... on ContentfulTestimonialSection {
          testimonialHeading
          blockquote {
            file {
              url
            }
          }
          forwardarrow {
            file {
              url
            }
          }
          backwardarrow {
            file {
              url
            }
          }

          testimonialCard {
            testimonialName
            testimonialText
            testimonialDesignation
          }
        }
        ... on ContentfulHomepageServices {
          id
          imageToRight
          serviceHeading
          serviceDescription {
            raw
          }
          serviceImages {
            image {
              file {
                url
              }
              fluid {
                srcWebp
                srcSetWebp
              }
            }
          }
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
              contentType
            }
          }
        }
        ... on ContentfulFeatureSection {
          id
          featureHeading
          featureDescription {
            raw
          }
          featureImages {
            image {
              file {
                url
              }
            }
          }
        }
        ... on ContentfulSectionHeading {
          id
          sectionHeadings
        }
        ... on ContentfulSliderBlock {
          id
          sliderHeading
          forwardarrow {
            file {
              url
            }
          }
          backwardarrow {
            file {
              url
            }
          }
          slides {
            slideHeading
            slideDescription {
              raw
            }
            sliderImage {
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
