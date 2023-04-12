import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(15, 'auto'),
  },
  mobileScreenShotsContainer: {
    display: 'flex',
    overflowX: 'scroll',
    width: '100%',
    paddingLeft: theme.spacing(19),
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  [theme.breakpoints.down('xs')]: {
    mobileScreenShotsContainer: {
      paddingLeft: theme.spacing(2),
    },
    mobileScreenShotLottie: {
      width: '150px',
    },
  },
  [theme.breakpoints.up('sm')]: {
    mobileScreenShotLottie: {
      width: '180px',
    },
  },
}))
