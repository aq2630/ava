import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
  },
  mainHeading: {
    marginBottom: theme.spacing(6),
  },
}))
