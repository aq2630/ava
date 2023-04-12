import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  blockquote: {
    '& img': {
      width: '25px',
      height: '25px',
    },
    '[lang=ar] &': {
      transform: 'scale(-1)',
    },
  },
  sliderContainer: {
    overflow: 'visible',
    '& .slick-initialized .slick-slide': {
      padding: theme.spacing(0, 1),
    },
  },
  testimonialNameWrapper: {
    position: 'relative',
    zIndex: theme.zIndex.xRayWrapper,
  },
  nameDetailsContainer: {
    '[lang=ar] &': {
      textAlign: 'left',
    },
  },
  testimonialName: {
    fontSize: '0.75rem',
  },
  testimonialText: {
    fontSize: '0.875rem',
    margin: theme.spacing(2, 0),
    fontWeight: 500,
    '[lang=ar] &': {
      textAlign: 'left',
    },
  },
  testimonialContainer: {
    borderRadius: theme.spacing(1),
    border: `1.5px solid ${theme.palette.secondary.main}`,
    height: '230px',
    position: 'relative',
    padding: theme.spacing(2),
  },
  sliderArrows: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  },
  arrowIconButton: (props) => ({
    transform: props.locale === 'ar' && 'rotate(180deg)',
    display: 'inline-block',
    cursor: 'pointer',
    width: '2.2em',
    height: '2.2em',
    lineHeight: '0',
    padding: theme.spacing(0),
    margin: theme.spacing(0.5),
    borderRadius: '50%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform:
        props.locale === 'ar' ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)',
    },
  }),
  [theme.breakpoints.up('sm')]: {
    sliderContainer: {
      overflow: 'visible',
      '& .slick-initialized .slick-slide': {
        padding: theme.spacing(0, 1),
      },
    },
    testimonialContainer: {
      height: '250px',
      padding: theme.spacing(4, 3),
      border: `3px solid ${theme.palette.secondary.main}`,
    },
    testimonialText: {
      lineHeight: '25px',
      fontSize: '1.125rem',
      margin: theme.spacing(3, 0),
    },
    testimonialName: {
      fontSize: '1.125rem',
    },
  },
  [theme.breakpoints.up('md')]: {
    sliderContainer: {
      overflow: 'visible',
      '& .slick-initialized .slick-slide': {
        paddingRight: theme.spacing(4),
      },
      '[lang=ar] &': {
        transform: 'scaleX(-1)',
      },
    },
    testimonialContainer: {
      padding: theme.spacing(6, 7, 5),
      display: 'flex',
      flexDirection: 'column',
      height: '300px',
      marginLeft: theme.spacing(0),
      '[lang=ar] &': {
        transform: 'scaleX(-1)',
        marginRight: theme.spacing(-4),
      },
    },
    testimonialText: {
      lineHeight: '30px',
    },
    sliderArrows: {
      justifyContent: 'flex-start',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(0),
      paddingLeft: theme.spacing(0),
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
}))
