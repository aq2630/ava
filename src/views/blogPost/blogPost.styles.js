import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  blogSectionsRoot: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(0, 7),
    },
  },
  socialShareBar: {
    background: theme.palette.background.default,
    position: 'fixed',
    width: '100%',
    top: '56px',
    height: '64px',
    zIndex: theme.zIndex.blogShareNavbar,
    transition: 'transform 0.5s ease-in-out, opacity 0.3s ease-in-out',
    transform: ({ trigger }) =>
      trigger ? 'translateY(0px)' : 'translateY(-50px)',
    opacity: ({ trigger }) => (trigger ? 1 : 0),
    [theme.breakpoints.up('md')]: {
      top: '100px',
    },
  },
  socialBarTitle: {
    fontSize: '0.875rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
  socialShareIcon: {
    padding: theme.spacing(1),
  },
  socialShareContainer: {
    height: '100%',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 7),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 0),
    },
  },
  mobileTooltip: {
    opacity: ({ openTooltip }) => (openTooltip ? 1 : 0),
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    position: 'absolute',
    top: '80px',
    right: '0px',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2, 3),
    color: theme.palette.text.secondary,
    zIndex: theme.zIndex.blogShareTooltip,
    pointerEvents: ({ openTooltip }) => (openTooltip ? 'all' : 'none'),
    '&::before': {
      content: "''",
      position: 'absolute',
      display: 'block',
      width: '0px',
      left: '48%',
      bottom: '0',
      border: '15px solid transparent',
      borderTop: 0,
      borderBottom: `15px solid ${theme.palette.secondary.main}`,
      transform: 'translate(115%, calc(-50% - 100px))',
    },
  },
  mobileIconsWrapper: {
    display: 'flex',
    gap: '20px',
  },
  socialShareButton: {
    borderRadius: '50%',
    border: '2px solid',
    '& .MuiTooltip-tooltip': {
      background: theme.palette.secondary.main,
    },
  },
  tooltipMain: {
    backgroundColor: theme.palette.secondary.main,
  },
  socialWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  shareButtonsWrapper: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  progressBarWrapper: {
    position: 'fixed',
    top: '64px',
    width: '100%',
  },
  progressBar: {
    '& > div': {
      transition: 'all 0.2s cubic-bezier(0, 0, 0, 0)',
    },
  },
}))
