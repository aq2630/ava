import { makeStyles } from '@material-ui/core/styles'

export const useHeroStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
  },
  textWrapper: {
    order: 1,
    zIndex: 1,
    padding: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 8),
      maxWidth: theme.spacing(77),
    },
  },
  imgWrapper: {
    order: 2,
    alignItems: 'baseline',

    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
    '& img': {
      [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
        minHeight: '100%',
      },
    },
  },
  bannerImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '85%',
    height: '100%',
  },
  title: {
    maxWidth: theme.spacing(62),
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      maxWidth: theme.spacing(44),
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      maxWidth: '70%',
    },
  },
  description: {
    marginTop: theme.spacing(3),
    maxWidth: theme.spacing(55),
  },
}))
