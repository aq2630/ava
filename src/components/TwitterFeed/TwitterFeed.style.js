import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(15, 0),
    backgroundColor: theme.palette.grey[300],
    position: 'relative',
    zIndex: theme.zIndex.xRayWrapper,
  },
  socialFeedHeading: {
    textAlign: 'center',
    marginBottom: theme.spacing(9),
    display: 'block',
  },
  crtPostRoot: {
    display: 'block',
    '& .crt-post .crt-post-header': {
      textAlign: 'left',
    },
    // hiding powered by Curator Tweet through display, for desktop and mobile screens.
    '& .crt-col-1 .crt-post:first-child,& article[data-post="1"]': {
      display: 'none',
    },
    '& .crt-post-header > .crt-post-fullname': {
      marginBottom: theme.spacing(2),
    },
    '& .crt-post-header > .crt-post-fullname > a': {
      color: theme.palette.grey[600],
      textDecoration: 'none',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    '& .crt-post .crt-post-header > .crt-social-icon': {
      marginBottom: theme.spacing(1),
    },
    '& .crt-post-footer > .crt-post-username': {
      display: 'none',
    },
    '& .crt-post-footer > .crt-post-date': {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    '& .crt-post-footer > .crt-post-date a': {
      color: theme.palette.grey[600],
    },
    '& .crt-post-footer > .crt-post-share svg': {
      width: '18px',
      marginRight: theme.spacing(0.75),
      fill: theme.palette.grey[600],
    },
    '& .crt-post a ': {
      textDecoration: 'none',
      opacity: 1,
    },
    '& .crt-post-text': {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    '& .crt-widget .crt-post-text a': {
      color: theme.palette.text.primary,
    },
    '& .crt-social-icon svg': {
      fill: theme.palette.secondary.main,
    },
    '& .crt-post-footer': {
      borderTop: `2px solid ${theme.palette.grey[300]}`,
    },
    '& .crt-post-border': {
      border: 'none',
    },
    '& a.crt-tag': {
      opacity: 0,
    },
  },
}))
