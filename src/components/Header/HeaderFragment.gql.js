import { graphql } from 'gatsby'

export const query = graphql`
  fragment headerFragment on ContentfulHeader {
    logo {
      title
      description
      svg {
        content
      }
      file {
        url
        contentType
        details {
          image {
            width
            height
          }
        }
      }
    }
    ctaDesktop {
      title
      link
    }
    navigationLinksDesktop {
      link
      title
      isExternal
    }
    navigationLinksMobile {
      link
      title
      isExternal
    }
  }
`
