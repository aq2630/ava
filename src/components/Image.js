import React from 'react'
import propTypes from 'prop-types'
import Img from 'gatsby-image'

// Render inline SVG with fallback non-svg images
export default function Image({
  svg,
  fluid,
  fixed,
  file,
  title,
  alt,
  className,
}) {
  if (file?.contentType === 'image/svg+xml' && svg?.content) {
    // Inlined SVGs
    return (
      <div
        dangerouslySetInnerHTML={{ __html: svg.content }}
        className={className}
        title={title || alt}
      />
    )
  }
  if (fluid || fixed) {
    return (
      <Img
        fluid={fluid}
        fixed={fixed}
        alt={title || alt}
        className={className}
      />
    )
  }
  if (file?.url) {
    return <img src={file?.url} alt={title || alt} className={className} />
  }
  return <></>
}

Image.propTypes = {
  svgContent: propTypes.string,
  fluid: propTypes.object,
  fixed: propTypes.object,
  file: propTypes.object.isRequired,
}
