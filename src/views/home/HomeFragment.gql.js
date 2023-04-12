import { graphql } from 'gatsby'

export const query = graphql`
  fragment homeFragment on ContentfulFeatureSection {
    featureHeading
    featureDescription {
      raw
    }
    featureImages {
      imageOrder
      image {
        file {
          url
        }
        title
        description
      }
      title
    }
  }
`
