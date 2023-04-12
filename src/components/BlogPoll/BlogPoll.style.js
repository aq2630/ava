import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, -3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0, 3, 0),
    },
  },
  pollIframe: {
    border: 'none',
    width: '100%',
    height: '365px',
  },
}))
