import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  servicesTitle: {
    textAlign: 'center',
    margin: theme.spacing(10, 3, 6),
  },
  homeVideo: {
    width: '100%',
  },
  homeSliderHeading: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  anAccountSectionDescription: {
    maxWidth: '320px',
    margin: theme.spacing(3, 0),
  },
  testimonialsSection: {
    margin: theme.spacing(15, 0),
  },
  testimonialWrapper: {
    overflow: 'hidden',
    '& .slick-list': {
      overflow: 'visible',
    },
  },
  testimonialsHeading: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
  },
  [theme.breakpoints.down('xs')]: {
    anAccountSection: {
      padding: theme.spacing(2, 0, 7),
    },
    titleScreenShot: {
      marginBottom: theme.spacing(1.5),
    },
    videoContainer: {
      '& video': {
        height: '75vh',
        objectFit: 'cover',
      },
    },
  },
  [theme.breakpoints.up('sm')]: {
    anAccountSection: {
      padding: theme.spacing(7, 16),
    },
    testimonialHeadingBox: {
      padding: theme.spacing(0, 20),
    },
  },
  [theme.breakpoints.up('md')]: {
    homeVideo: {
      height: '600px',
      objectFit: 'cover',
    },
    anAccountSection: {
      padding: theme.spacing(14),
      margin: theme.spacing(0, 'auto'),
    },
    testimonialsSection: {
      margin: theme.spacing(0, 0, 10),
    },
    testimonialHeadingBox: {
      padding: theme.spacing(0),
    },
  },
  [theme.breakpoints.up('lg')]: {
    anAccountSection: {
      padding: theme.spacing(8, 19, 4),
    },
  },
}))

export const useHeroStyles = makeStyles((theme) => ({
  slideUpElement: {
    [theme.breakpoints.up('sm')]: {
      animation: '$slideUpAnimation 300ms ease-in-out',
      transform: 'translateY(20px)',
      opacity: 0,
      animationFillMode: 'forwards',
    },
  },
  root: {
    padding: theme.spacing(8, 0),
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 14),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 2),
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(12),
      alignItems: 'center',
    },
  },
  textWrapper: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(5),
    alignSelf: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      animation: '$slideUpAnimation 500ms ease-in-out',
      animationDelay: '1000ms',
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 6),
      marginTop: theme.spacing(0),
      '[lang=ar] &': {
        padding: theme.spacing(0, 5),
      },
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(15),
      '[lang=ar] &': {
        paddingRight: theme.spacing(12),
      },
    },
  },
  imgWrapper: {
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      padding: theme.spacing(0, 6),
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  description: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(6, 0),
    },
  },
  mockContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(3),
  },
  heroSectionJBCard: {
    width: '60vw',
    transform: 'rotate(0, -1, 0, 0deg)',
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      transform: 'rotate3d(0, -1, 0, 30deg)',
    },
  },
  heroSectionlottie: ({ placeholder }) => ({
    backgroundImage: `url(${placeholder})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      width: '69vw',
    },
  }),

  [theme.breakpoints.up('sm')]: {
    heroSectionJBCard: {
      width: '260px',
    },
    heroSectionlottie: {
      width: '45vw',
    },
  },
  [theme.breakpoints.up('md')]: {
    heroSectionJBCard: {
      width: '45%',
      marginLeft: theme.spacing(-1.5),
    },
    heroSectionlottie: {
      width: '246px',
      height: '454px',
    },
  },
  '@keyframes slideUpAnimation': {
    '0%': {
      transform: 'translateY(20px)',
      opacity: 0,
    },
    '20%': {
      opacity: 1,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    },
  },
}))
