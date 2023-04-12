import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    zIndex: theme.zIndex.xRayWrapper,
    padding: theme.spacing(5, 0, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 0, 5),
    },
  },
  blogSliderHeading: {
    marginLeft: theme.spacing(0.4),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(0),
    },
  },
  controlSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    },
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowIconButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '2.5em',
      height: '2.5em',
      backgroundColor: theme.palette.text.primary,
      margin: theme.spacing(0, 2),
      '&:hover': {
        backgroundColor: theme.palette.text.primary,
      },
      '& .MuiSvgIcon-root': {
        width: '1.3em',
        height: '1.3em',
        color: 'white',
      },
    },
  },
  relatedBlogItem: {
    marginLeft: theme.spacing(2),
    maxWidth: '40vw',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
    '& img': {
      border: `4px solid ${theme.palette.primary.main}`,
      height: '40vw',
      [theme.breakpoints.up('md')]: {
        height: '400px',
      },
    },
  },
  blogItemSlide: {
    '[lang=ar] &': {
      opacity: 0.5,
      transition: 'opacity 0.8s ease-in-out',
    },
  },
  activeBlogItemSlide: {
    '[lang=ar] &': {
      opacity: 1,
    },
  },
  slidesSection: {
    margin: theme.spacing(5, 0),
    overflow: 'hidden',
    '[lang=en] &': {
      '& .slick-track > div': {
        opacity: 0.5,
        transition: 'opacity 0.8s ease-in-out',
      },
      '& .slick-track > div[aria-hidden="false"]': {
        opacity: 1,
        transition: 'opacity 0.8s ease-in-out',
      },
    },
  },
}))
