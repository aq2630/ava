import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Typography } from '@material-ui/core'

const renderHeading = (variant, children) => (
  <Typography variant={variant}>{children}</Typography>
)
/* eslint-disable react/display-name */
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Typography variant="inherit" style={{ fontWeight: 500 }}>
        {text}
      </Typography>
    ),
    [MARKS.ITALIC]: (text) => (
      <Typography variant="inherit" style={{ fontStyle: 'italic' }}>
        {text}
      </Typography>
    ),
    [MARKS.CODE]: (text) => <Typography component="pre">{text}</Typography>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography variant="inherit" paragraph>
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_1]: (_, children) => renderHeading('h1', children),
    [BLOCKS.HEADING_2]: (_, children) => renderHeading('h2', children),
    [BLOCKS.HEADING_3]: (_, children) => renderHeading('h3', children),
    [BLOCKS.HEADING_4]: (_, children) => renderHeading('h4', children),
    [BLOCKS.HEADING_5]: (_, children) => renderHeading('h5', children),
    [BLOCKS.HEADING_6]: (_, children) => renderHeading('h6', children),
  },
}
/* eslint-enable react/display-name */
const RichText = ({ document, variant = 'body2', className }) => (
  // To be able to pass on variant & className to underlying text
  <Typography variant={variant} component="div" className={className}>
    {documentToReactComponents(document, options)}
  </Typography>
)
export default RichText
