import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  slash: {
    background: theme.palette.primary.main,
    zIndex: theme.zIndex.slash,
    transform: 'rotate(55deg)',
    width: '50px',
    height: '200px',
    top: '70px',
    left: '43vw',
    position: 'fixed',
  },
  [theme.breakpoints.down('xs')]: {
    stickyHeadingContainer: {
      marginTop: theme.spacing(1.25),
    },
    mainContainer: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(8),
    },
    stickyHeading: {
      margin: theme.spacing(7.5, 2, 0),
      textAlign: 'center',
    },
    mainTextSubContainer: {
      width: 'inherit',
    },
    sectionSpace: {
      width: 'inherit',
      marginTop: theme.spacing(4),
    },
    subHeading: {
      margin: theme.spacing(10, 0, 5),
    },
    subText: {
      margin: theme.spacing(1, 0, 0),
      width: 'auto',
      lineHeight: 1.7,
    },
  },
  [theme.breakpoints.up('sm')]: {
    slash: {
      width: '70px',
      height: '350px',
    },
    stickyHeadingContainer: {
      position: 'relative',
      padding: theme.spacing(6, 10, 0),
    },
    stickyHeading: {
      margin: theme.spacing(5, 'auto'),
      textAlign: 'center',
      width: '448px',
    },
    subText: {
      margin: theme.spacing(0),
      width: '100%',
      lineHeight: 1.7,
      marginBottom: theme.spacing(12),
      '& p': {
        marginBottom: theme.spacing(3.5),
      },
    },
    subHeading: {
      margin: theme.spacing(10, 0, 5),
    },
    mainTextContainer: {
      padding: theme.spacing(6, 16),
    },
    mainContainer: {
      marginTop: theme.spacing(0),
    },
  },
  [theme.breakpoints.up('md')]: {
    slash: {
      position: 'absolute',
      width: '70px',
      height: '300px',
      left: '250px',
      top: '180px',
      '[lang=ar] &': {
        top: '100px',
      },
    },
    stickyDiv: {
      position: 'sticky',
      top: '120px',
      marginBottom: theme.spacing(45),
    },
    stickyHeading: {
      width: '324px',
      height: '204px',
      margin: theme.spacing(0, 'auto', 10),
    },
    subHeading: {
      maxWidth: '320px',
      margin: theme.spacing(0, 0, 4),
    },
    mainTextContainer: {
      padding: theme.spacing(6.5, 8),
    },
  },
  [theme.breakpoints.up('lg')]: {
    slash: {
      left: '300px',
    },
    stickyHeading: {
      width: '324px',
      height: '204px',
      margin: theme.spacing(0, 'auto', 10),
      top: theme.spacing(18.75),
    },
    subHeading: {
      maxWidth: '450px',
      margin: theme.spacing(0, 0, 5),
      color: theme.palette.text.primary,
    },
    subText: {
      width: '430px',
      height: 'auto',
      margin: theme.spacing(5, 7.75, 15, 0),
      color: theme.palette.text.primary,
      '& p': {
        marginBottom: theme.spacing(3.5),
      },
    },
    mainContainer: {
      margin: theme.spacing(5, 'auto', 0),
    },
  },
}))

export const useHeroStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideUpElement: {
    animation: '$slideUpAnimation 300ms ease-in-out',
    transform: 'translateY(20px)',
    opacity: 0,
    animationFillMode: 'forwards',
  },
  textWrapper: {
    order: 2,
    padding: theme.spacing(7, 3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 19),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 8),
      zIndex: theme.zIndex.xRayWrapper,
    },
  },
  imgWrapper: {
    backgroundColor: theme.palette.primary.main.replace,
    order: 1,
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      maxWidth: '100%',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(-15),
      maxWidth: '400px',
    },
  },
  description: {
    maxWidth: theme.spacing(55),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(8),
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
