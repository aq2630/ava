import { graphql } from 'gatsby'

export const query = graphql`
  fragment sectionHeadingFragment on ContentfulSectionHeading {
    sectionHeadings
    isHeadingXRay
  }
  fragment sectionTextFragment on ContentfulSectionText {
    sectionText {
      raw
    }
  }
`
