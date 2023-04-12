import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 12, 18),
    margin: '0 auto',
    alignItems: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 2),
      flexDirection: 'column-reverse',
    },
  },
  mockContainer: {
    marginTop: theme.spacing(5),
  },
  textWrapper: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
  },
  imgWrapper: {
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
    '&>img': {
      margin: theme.spacing(-2, -2),
      width: `calc(100% + ${theme.spacing(4)}px)`,
      [theme.breakpoints.down('sm')]: {
        order: 1,
        width: `calc(100% + ${theme.spacing(10)}px)`,
        margin: theme.spacing(-5, -5, 0),
      },
    },
  },
  title: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      maxWidth: '70%',
    },
  },
  description: {
    marginTop: theme.spacing(3),
  },
}))
