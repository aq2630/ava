import { graphql } from 'gatsby'

export const query = graphql`
  fragment heroFragment on ContentfulHeroSection {
    heading
    isHeadingXRay
    bannerCta {
      link
      text
    }
    bannerImages {
      image {
        file {
          contentType
          url
        }
        title
        fluid(resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
      }
      title
    }
    description {
      raw
    }
  }
`
