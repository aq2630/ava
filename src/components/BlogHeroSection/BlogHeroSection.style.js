import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0),
    position: 'relative',
    top: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 8),
      top: theme.spacing(9),
    },
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    padding: theme.spacing(2, 0),
    textAlign: 'left',
    height: '75vw',
    [theme.breakpoints.up('md')]: {
      height: 'unset',
    },
  },
  blogItemWrapper: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  dotSeparator: {
    width: '6px',
    height: '6px',
    backgroundColor: theme.palette.grey[600],
    borderRadius: '50%',
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(0.75),
    },
  },
  dateDurationText: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  blogItemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      height: '550px',
      width: '100%',
    },
  },
  blogImageBox: {
    position: 'relative',
  },
  imageCategory: {
    position: 'absolute',
    zIndex: theme.zIndex.blogImageCategory,
    transform: 'rotate(90deg)',
    transformOrigin: 'top left',
    top: theme.spacing(0),
    left: theme.spacing(4),
    padding: theme.spacing(0.75, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  blogTitle: {
    fontSize: '1.25rem',
    margin: theme.spacing(0.5, 0),
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.625rem',
      margin: theme.spacing(2.5, 0),
    },
  },
  blogInfo: {
    color: theme.palette.grey[600],
    textAlign: 'left',
    fontSize: '0.75rem',
    marginTop: theme.spacing(0.125),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
      fontSize: '1rem',
    },
  },
}))
