import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10, 'auto'),
  },
  thumbnailBox: {
    '&:focus-visible': {
      outline: 'none',
    },
  },
  leftSection: {
    pointerEvents: 'none',
  },
  mainImage: {
    width: '100%',
  },
  nextImages: {
    display: 'none',
    cursor: 'pointer',
  },
  sliderText: {
    textAlign: 'center',
  },
  sliderArrows: {
    pointerEvents: 'all',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  arrowIconButton: (props) => ({
    transform: props.locale === 'ar' && 'rotate(180deg)',
    display: 'inline-block',
    padding: theme.spacing(0),
    width: '2.2em',
    height: '2.2em',
    lineHeight: '0',
    cursor: 'pointer',
    margin: theme.spacing(0.75),
    borderRadius: '50%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform:
        props.locale === 'ar' ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)',
    },
    '& .MuiSvgIcon-root': {
      width: '1em',
      height: '1em',
    },
  }),
  sliderHeading: {
    textStroke: `1px ${theme.palette.secondary.main}`,
    '-webkit-text-stroke': `1px ${theme.palette.secondary.main}`,
    fontWeight: '500',
  },
  [theme.breakpoints.down('xs')]: {
    sliderContainer: { backgroundColor: theme.palette.background.default },
    root: {
      display: 'flex',
      marginBottom: '2rem',
    },
    sliderWrapper: {
      boxShadow: 'none',
      background: 'transparent',
      width: '100%',
      position: 'relative',
      left: 0,
    },
    sliderHeading: {
      marginBottom: theme.spacing(2),
    },
    sliderText: {
      padding: theme.spacing(5, 0),
      textAlign: 'left',
    },
    sliderDescription: {
      marginBottom: theme.spacing(3),
    },
    leftSection: {
      boxShadow: 'none',
      marginBottom: theme.spacing(0),
      margin: theme.spacing(-3),
    },
    rightSection: {
      backgroundColor: theme.palette.grey[300],
      padding: theme.spacing(0, 3),
      margin: theme.spacing(0, -3),
    },
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: theme.spacing(0, 12),
    },
    sliderWrapper: {
      boxShadow: `40px 40px 16px 0 ${theme.palette.background.shadow}`,
    },
    rightSection: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(0, 6),
    },
    sliderText: {
      padding: theme.spacing(3, 0),
    },
    sliderDescription: {
      '&>p': {
        margin: theme.spacing(3, 0),
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    root: {
      padding: theme.spacing(0),
    },
    nextImages: {
      display: 'block',
      height: '33%',
      '& .slick-list': {
        height: '152px',
      },
      '& .slick-slide': {
        maxWidth: '288px',
      },
    },
    sliderWrapper: {
      height: '416px',
      display: 'flex',
      minWidth: '100%',
      overflowX: 'hidden',
      flexDirection: 'row',
      backgroundColor: theme.palette.background.default,
    },
    leftSection: {
      width: '60%',
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    rightSection: {
      width: '40%',
      height: '100%',
      overflow: 'hidden',
      padding: theme.spacing(0),
      '&>div': {
        '& img': {
          maxWidth: '100%',
          objectFit: 'cover',
        },
      },
    },
    sliderHeading: {
      textAlign: 'center',
      fontSize: '2.25rem',
    },
    sliderText: {
      padding: theme.spacing(2, 3),
      height: '67%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    sliderDescription: {
      '&>p': {
        marginBottom: theme.spacing(1.5),
        marginTop: theme.spacing(3),
      },
    },
    arrowIconButton: {
      width: '2.35em',
      height: '2.35em',
      '& .MuiSvgIcon-root': {
        width: '1.3em',
        height: '1.3em',
      },
    },
  },
  [theme.breakpoints.up('lg')]: {
    sliderWrapper: {
      height: '524px',
    },
    nextImages: {
      height: '33%',
      '& .slick-list': {
        height: '175px',
      },
    },
    sliderText: {
      padding: theme.spacing(4, 5, 2.5),
      height: '67%',
    },
    sliderHeading: {
      textAlign: 'center',
      fontSize: '2.75rem',
    },
    sliderDescription: {
      '&>p': {
        marginBottom: theme.spacing(5),
      },
    },
  },
}))
