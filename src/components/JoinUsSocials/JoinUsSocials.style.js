import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    backgroundColor: theme.palette.grey[300],
    margin: theme.spacing(0, 'auto'),
    overflow: 'hidden',
  },
  mainGridContainer: {
    backgroundColor: theme.palette.grey[300],
    justifyContent: 'center',
    padding: theme.spacing(10, 0),
  },
  cardImageWrapper: {
    textAlign: 'center',
  },
  cardImage: {
    maxWidth: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  joinUsTitle: {
    width: '258px',
  },
  [theme.breakpoints.down('xs')]: {
    joinUsTitleWrapper: {
      padding: theme.spacing(5, 7, 0),
    },
    joinUsTitle: {
      margin: 'auto',
      width: 'auto',
    },
    joinUsText: {
      width: '100%',
      textAlign: 'center',
      padding: theme.spacing(0, 4),
      margin: theme.spacing(3, 0, 5),
    },
    cardImage: {
      maxWidth: '80%',
    },
    textContainer: {
      width: '100%',
    },
  },
  [theme.breakpoints.up('sm')]: {
    joinUsTitle: {
      margin: 'auto',
      width: 'auto',
    },
    joinUsText: {
      width: '100%',
      padding: theme.spacing(0, 25),
      margin: theme.spacing(3, 0, 8.75),
    },
  },
  [theme.breakpoints.up('md')]: {
    joinUsTitle: {
      width: '258px',
      margin: theme.spacing(0),
    },
    joinUsText: {
      width: '220px',
      textAlign: 'left',
      lineHeight: 1.55,
      margin: theme.spacing(4.5, 0, 6.75),
      padding: theme.spacing(0),
    },
    textContainer: {
      textAlign: 'left',
      alignItems: 'flex-start',
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(8),
    },
  },
}))
