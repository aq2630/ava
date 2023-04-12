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
  fullWidthSpacer: {
    height: '150px',
    width: '100%',
    marginTop: theme.spacing(-18.75),
    visibility: 'hidden',
  },
  mainFaqContainer: {
    margin: theme.spacing(10, 0),
  },
  accordionSummaryTitle: {
    fontWeight: 500,
  },
  accordionDetails: {
    '&>div>p ': {
      marginBottom: 0,
    },
  },
  faqContainer: {
    marginBottom: theme.spacing(12.5),
    '& > div > div': {
      borderBottom: 'none',
    },
    '& .MuiAccordionSummary-content': {
      marginTop: 0,
    },
  },
  primaryHeading: {
    margin: theme.spacing(0, 0, 4),
  },
  goToContactHeadingSection: {
    marginBottom: theme.spacing(2),
  },
  contactLinkSection: {
    marginTop: theme.spacing(2),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '[lang=ar] &': {
      '& svg': {
        marginTop: '11px',
      },
    },
  },
  contactLink: {
    fontSize: '1.375rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    bannerContainer: {
      padding: theme.spacing(0),
    },
    primaryHeading: {
      margin: theme.spacing(2, 0),
    },
  },
  [theme.breakpoints.up('sm')]: {
    bannerText: {
      padding: theme.spacing(0, 11),
    },
    mainFaqContainer: {
      padding: theme.spacing(0, 16),
    },
  },
  [theme.breakpoints.up('md')]: {
    bannerText: {
      padding: theme.spacing(0, 12),
    },
    mainFaqContainer: {
      padding: theme.spacing(0, 10, 0, 17),
    },
  },
  [theme.breakpoints.up('lg')]: {
    mainFaqContainer: {
      padding: theme.spacing(0, 12),
    },
  },
}))
