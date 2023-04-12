// scroll to Top on page refresh
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#shouldUpdateScroll
// above link is a reference

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 1000)

  return true
}
