import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  background: {
    background: ({ isBackgroundVisible }) =>
      isBackgroundVisible ? theme.palette.primary.main : 'transparent',
  },
  footerForm: {
    '& .MuiInputBase-input:-webkit-autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.primary.main}`,
    },
    '& .MuiInputBase-input:autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.primary.main}`,
    },
  },
  successMessage: {
    zIndex: theme.zIndex.xRayWrapper,
    [theme.breakpoints.up('sm')]: {
      minHeight: '545px',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '328px',
    },
  },
  successHeading: {
    marginBottom: theme.spacing(4),
  },
  footerAnimationStyle: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
  },
  successMessageContainer: {
    position: 'relative',
    textAlign: 'center',
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      minHeight: '620px',
    },
  },
  waitlistWrapper: {
    background: 'transparent',
    display: 'flex',
    flexFlow: 'column nowrap',
    boxSizing: 'border-box',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 16),
    },
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      padding: theme.spacing(25, 10),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(25, 19),
    },
  },
  waitingListRow: {
    maxWidth: '100%',
  },
  waitingListDescription: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(12),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(15),
    },
    '&>*': {
      marginBottom: theme.spacing(4),
    },
  },
  waitingListTitle: {
    textShadow: `4px 4px ${theme.palette.text.secondary}`,
    fontWeight: 700,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      '[lang=ar] &': {
        letterSpacing: -2,
      },
    },
  },
  waitingListForm: {
    '& form': {
      '&>*': {
        marginBottom: theme.spacing(3.75),
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(3),
        },
      },
    },
  },
  footerCta: {
    marginTop: '1.3rem',
  },
  footerWrapper: {
    padding: theme.spacing(6, 0, 0),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 16, 0),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(9, 15, 0),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(9, 28, 0),
    },
    textAlign: 'center',
    '& svg': {
      width: theme.spacing(5.5),
      height: theme.spacing(5.5),
      margin: theme.spacing(3, 1),
    },
  },
  links: {
    '&>a': {
      color: theme.palette.text.secondary,
      fontWeight: 500,
      fontSize: '1.125rem',
      width: '100%',
      textAlign: 'left',
      marginBottom: theme.spacing(3),
      transition: 'transform 200ms ease-in-out',
      [theme.breakpoints.up('md')]: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        textAlign: 'center',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(2.5),
  },
  copyright: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2.5, 2),
    color: theme.palette.grey[400],
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2.5, 5, 2.5),
    },
  },
  bsfInfo: {
    textAlign: 'center',
    padding: theme.spacing(3, 0),
    color: theme.palette.grey[400],
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 13),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 8, 3),
    },
  },
}))
