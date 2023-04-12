import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    marginLeft: ({ isBlogSlider }) => isBlogSlider && theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      marginLeft: ({ isBlogSlider }) => isBlogSlider && theme.spacing(6),
    },
  },
  blogItemWrapper: {
    display: ({ isBlogSlider }) => (isBlogSlider ? 'block' : 'flex'),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  blogItemImage: {
    width: ({ isBlogSlider }) => (isBlogSlider ? '100%' : '40vw'),
    height: ({ isBlogSlider }) => (isBlogSlider ? '240px' : '40vw'),
    objectFit: 'cover',
    border: ({ isBlogSlider }) =>
      !isBlogSlider && `3px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(0.25),
    [theme.breakpoints.up('md')]: {
      height: () => '400px',
      width: () => '100%',
    },
  },
  blogImageBox: {
    position: 'relative',
    '[lang=ar] &': {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    width: ({ isBlogSlider }) => !isBlogSlider && '40vw',
    height: ({ isBlogSlider }) => !isBlogSlider && '40vw',
    [theme.breakpoints.up('md')]: {
      width: ({ isBlogSlider }) => !isBlogSlider && 'auto',
      height: ({ isBlogSlider }) => !isBlogSlider && 'auto',
    },
  },
  blogTextBox: {
    width: ({ isBlogSlider }) => (isBlogSlider ? '100%' : '55%'),
    padding: ({ isBlogSlider }) =>
      !isBlogSlider ? theme.spacing(0, 1.5) : theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      width: () => '100%',
      padding: theme.spacing(0),
    },
  },
  dotSeparator: {
    width: '6px',
    height: '6px',
    backgroundColor: theme.palette.grey[600],
    borderRadius: '50%',
    marginTop: ({ isBlogSlider }) => isBlogSlider && theme.spacing(0.75),
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(0.75),
    },
  },
  dateDurationText: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '[lang=ar] &': {
      flexDirection: ({ isBlogSlider }) => isBlogSlider && 'row-reverse',
    },
  },
  imageCategory: {
    position: 'absolute',
    zIndex: theme.zIndex.blogImageCategory,
    transform: 'rotate(90deg)',
    transformOrigin: 'top left',
    top: '0px',
    left: '30px',
    padding: theme.spacing(0.75, 1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '0.75rem',
  },
  imageWrapper: {
    maxWidth: ({ isBlogSlider }) => isBlogSlider && '85vw',
    [theme.breakpoints.up('md')]: {
      maxWidth: ({ isBlogSlider }) => isBlogSlider && '52vw',
      '[lang=ar] &': {
        flexBasis: '100%',
      },
    },
  },
  blogTitle: {
    margin: theme.spacing(1, 0),
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontSize: ({ isBlogSlider }) => (isBlogSlider ? '1.25rem' : '1rem'),
    [theme.breakpoints.up('md')]: {
      fontSize: () => '2rem',
    },
  },
  blogInfo: {
    color: theme.palette.grey[600],
    marginTop: ({ isBlogSlider }) => isBlogSlider && theme.spacing(1),
    textAlign: 'left',
    fontSize: '0.75rem',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
      fontSize: '1rem',
    },
  },
}))
