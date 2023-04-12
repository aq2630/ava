import { Link as GatsbyLink } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { Link as MUILink } from '@material-ui/core'
import React from 'react'

const Link = React.forwardRef(function Link({ isExternal, to, ...props }, ref) {
  const { locale } = useIntl()
  const externalProps = {
    target: '_blank',
    rel: 'noopener',
    href: to,
  }
  return (
    <MUILink
      component={isExternal ? 'a' : GatsbyLink}
      underline="none"
      to={`/${locale}${to}`}
      {...(isExternal && externalProps)}
      {...props}
      ref={ref}
    />
  )
})
export default Link
