import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    margin: theme.spacing(0, 'auto'),
    flexDirection: 'column-reverse',
    overflow: 'hidden',
  },
  lottie: (props) => ({
    backgroundImage: `url(${props.placeholderPath})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      width: '333px',
      height: '289px',
    },
  }),
  promoTextContainer: {
    marginTop: theme.spacing(8),
  },
  description: {
    marginTop: theme.spacing(3),
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: theme.spacing(10, 14),
      margin: theme.spacing(0, 'auto'),
      flexDirection: 'column-reverse',
    },
    lottie: {
      width: '514px',
      height: '446px',
    },
    promoTextContainer: {
      marginTop: theme.spacing(8),
    },
  },
  [theme.breakpoints.up('md')]: {
    root: {
      padding: theme.spacing(5),
      margin: theme.spacing(0, 'auto'),
      flexDirection: (props) => (props.reverse ? 'row-reverse' : 'row'),
    },
    lottie: {
      width: '448px',
      height: '388px',
    },
    promoTextContainer: {
      marginTop: theme.spacing(0),
      padding: theme.spacing(0, 6),
    },
  },
  [theme.breakpoints.up('lg')]: {
    root: {
      padding: theme.spacing(12, 1),
      maxWidth: '1200px',
      margin: theme.spacing(0, 'auto'),
    },
    lottie: {
      width: '598px',
      height: '520px',
    },
    promoTextContainer: {
      paddingLeft: (props) =>
        props.reverse ? theme.spacing(5) : theme.spacing(18),
      paddingRight: (props) =>
        props.reverse ? theme.spacing(28) : theme.spacing(13.5),
      '[lang=ar] &': {
        paddingLeft: (props) =>
          props.reverse ? theme.spacing(20) : theme.spacing(8.5),
        paddingRight: (props) =>
          props.reverse ? theme.spacing(5) : theme.spacing(16.5),
      },
    },
  },
}))
