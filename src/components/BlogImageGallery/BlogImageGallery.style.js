import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, -3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3, 0),
    },
  },
  mainImage: {
    position: 'relative',
  },
  mainLightBoxImage: {
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '600px',
    },
  },
  lightBoxButton: {
    position: 'absolute',
    bottom: '16px',
    right: '10px',
    minWidth: '60px',
    padding: theme.spacing(0.75, 1.5),
    background: theme.palette.background.default,
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    gap: '3px',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      bottom: '22px',
      right: '16px',
    },
  },
  modalRoot: {
    zIndex: `${theme.zIndex.appBar} !important`,
    backgroundColor: 'rgba(0,0,0,1)',
    overflow: 'auto',
  },
  modalMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'stretch',
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  sliderBox: {
    top: '50%',
    order: '0',
    flex: '0 1 auto',
    maxWidth: '100%',
    height: '300px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
    '& img': {
      maxWidth: '100%',
      height: '300px',
      objectFit: 'cover',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
      height: '100%',
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(3),
      padding: theme.spacing(0, 3),
      '& img': {
        height: '100%',
        objectFit: 'cover',
      },
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '1200px',
      height: '100%',
      '& img': {
        maxWidth: '100%',
        margin: '0 auto',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
  lightBoxContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(0, 3),
  },
  thumbnailWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(56px, 56px))',
    border: '1px solid transparent',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(10, minmax(56px, 56px))',
    },
  },
  thumbnailBox: {
    boxSizing: 'border-box',
    '& img': {
      maxWidth: '100%',
      height: '56px',
      objectFit: 'cover',
      outlineOffset: '-2px',
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          outline: `2px solid ${theme.palette.primary.main} `,
        },
      },
    },
  },
  activeThumbnail: {
    outline: `2px solid ${theme.palette.primary.main} `,
    [theme.breakpoints.up('md')]: {
      outline: `2px solid ${theme.palette.background.default} `,
    },
  },
  iconButton: {
    padding: theme.spacing(0),
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: theme.palette.text.secondary,
  },
  counterText: {
    fontWeight: 700,
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  closeIconButton: {
    padding: theme.spacing(0),
  },
  closeIcon: {
    color: theme.palette.background.default,
    backgroundColor: '#717171',
    borderRadius: '4px',
    width: '1.5em',
    height: '1.5em',
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      color: '#CBCBCB',
    },
  },
  galleryTitle: {
    fontSize: '20px',
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
}))
