import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    display: 'flex',
    minHeight: '300px',
    backgroundColor: theme.palette.grey[300],
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    position: 'relative',
    zIndex: theme.zIndex.xRayText,
  },
  mainContainer: {
    margin: theme.spacing(10, 0),
  },
  fullWidthSpacer: {
    height: '150px',
    width: '100%',
    marginTop: theme.spacing(-18.75),
    visibility: 'hidden',
  },
  priceListContainer: {
    marginBottom: theme.spacing(12.5),
    [theme.breakpoints.up('lg')]: {
      lineHeight: 1.67,
    },
  },
  priceListItemContainer: {
    marginBottom: theme.spacing(2),
  },
  primaryHeading: {
    lineHeight: '1.24',
    margin: theme.spacing(0, 0, 5, 0),
  },
  subItemPrice: {
    fontSize: '1.125rem',
    lineHeight: 'inherit',
    textAlign: 'end',
  },
  [theme.breakpoints.down('xs')]: {
    bannerContainer: {
      padding: theme.spacing(0),
    },
  },
  [theme.breakpoints.up('sm')]: {
    bannerText: {
      padding: theme.spacing(0, 11),
    },
    mainContainer: {
      padding: theme.spacing(0, 16),
    },
  },
  [theme.breakpoints.up('md')]: {
    bannerText: {
      padding: theme.spacing(0, 12),
    },
    mainContainer: {
      padding: theme.spacing(0, 10, 0, 17),
    },
  },
  [theme.breakpoints.up('lg')]: {
    mainContainer: {
      padding: theme.spacing(0, 12),
    },
  },
}))
