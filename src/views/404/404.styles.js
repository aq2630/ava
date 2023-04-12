import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  mainCont: {
    height: '80vh',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  image404: {
    maxWidth: '85%',
    margin: theme.spacing(0, 'auto'),
  },
  gotoHomeButton: {
    borderRadius: 2,
    fontSize: '1.125rem',
    fontWeight: 500,
    padding: theme.spacing(0.75, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(1, 1.5),
    },
    overflow: 'hidden',
  },
  waitListBtn404: {
    color: theme.palette.text.primary,
  },
  paragraph: {
    margin: theme.spacing(3, 0),
  },
  [theme.breakpoints.down('sm')]: {
    mainCont: {
      height: '80vh',
      margin: '5vh 0',
    },
  },
}))
