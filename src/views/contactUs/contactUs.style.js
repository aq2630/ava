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
  mainFormContainer: {
    margin: theme.spacing(10, 0),
  },
  supportPageForm: {
    marginTop: theme.spacing(12),
    '& .MuiInputBase-input:-webkit-autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.background.default}`,
    },
    '& .MuiInputBase-input:autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.background.default}`,
    },
  },
  textField: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  phoneInput: {
    '[lang=ar] &': {
      direction: 'rtl',
      '& input': {
        paddingRight: theme.spacing(0.75),
      },
    },
  },
  sectionText: {
    margin: 0,
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  goToFaqsHeadingSection: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  faqLinkSection: {
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
  faqLink: {
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
    contactSidebar: {
      paddingRight: theme.spacing(0),
    },
    contactFormSection: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(0),
    },
    notACustomerHeading: {
      margin: theme.spacing(0, 0, 3),
    },
    writeUsHeading: {
      margin: theme.spacing(3, 0),
    },
    supportPageForm: {
      marginTop: theme.spacing(4.5),
    },
  },
  [theme.breakpoints.up('sm')]: {
    bannerText: {
      padding: theme.spacing(0, 11),
    },
    mainFormContainer: {
      padding: theme.spacing(0, 16),
    },
    contactSidebar: {
      paddingRight: theme.spacing(0),
    },
    contactFormSection: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(0),
    },
    notACustomerHeading: {
      margin: theme.spacing(0, 0, 3),
    },
    writeUsHeading: {
      margin: theme.spacing(0, 0, 6),
    },
  },
  [theme.breakpoints.up('md')]: {
    bannerText: {
      padding: theme.spacing(0, 12),
    },
    contactSidebar: {
      paddingRight: theme.spacing(5),
    },
    contactFormSection: {
      marginTop: theme.spacing(0),
      padding: theme.spacing(0),
    },
    mainFormContainer: {
      padding: theme.spacing(0, 12, 0, 17),
    },
    writeUsHeading: {
      width: '520px',
    },
    sectionText: {
      width: '303px',
    },
  },
  successButton: {
    borderRadius: 2,
    fontSize: '1.125rem',
    fontWeight: 500,
    padding: theme.spacing(0.75, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(1, 1.5),
    },
    overflow: 'hidden',
    animation: 'buttonGrow 5s',
  },
  submitButton: {
    borderRadius: 2,
    fontSize: '1.125rem',
    fontWeight: 500,
    padding: theme.spacing(0.75, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(1, 1.5),
    },
    overflow: 'hidden',
  },
  [theme.breakpoints.up('lg')]: {
    mainFormContainer: {
      padding: theme.spacing(0, 12),
    },
    contactFormSection: {
      marginTop: theme.spacing(0),
      padding: theme.spacing(0, 5),
    },
  },
}))
