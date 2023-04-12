import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    minHeight: '40vh',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    alignItems: 'center',
  },
  bannerText: {
    width: '828px',
    left: '5.3%',
    margin: 0,
    position: 'relative',
  },
  mainFormContainer: {
    marginTop: theme.spacing(10),
  },
  accordionDetails: {
    '&>div>p ': {
      marginBottom: 0,
    },
  },
  bannerFaqContainer: {
    alignItems: 'center',
    minHeight: '33vh',
    backgroundColor: theme.palette.background.secondary,
  },
  faqBannerText: {
    margin: 0,
    position: 'relative',
  },
  supportPageForm: {
    marginTop: theme.spacing(12),
    [theme.breakpoints.up('lg')]: {
      maxWidth: '450px',
    },
    '& .MuiInputBase-input:-webkit-autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.background.default}`,
    },
    '& .MuiInputBase-input:autofill': {
      boxShadow: `inset 0 0 0 1000px ${theme.palette.background.default}`,
    },
  },
  textField: {
    marginBottom: theme.spacing(8),
  },
  sectionText: {
    margin: 0,
  },
  faqContainer: {
    marginBottom: theme.spacing(12.5),
    '& > div > div': {
      borderBottom: 'none',
    },
  },
  primaryHeading: {
    margin: theme.spacing(0, 0, 4),
  },
  [theme.breakpoints.down('xs')]: {
    bannerContainer: {
      height: '30vh',
      borderRadius: theme.spacing(0),
    },
    bannerText: {
      width: '87%',
      left: '6.4%',
      position: 'relative',
    },
    faqBannerText: {
      left: '6.4%',
      position: 'relative',
      width: '80%',
    },
    sectionText: {
      width: 'auto',
    },
    notACustomerHeading: {
      width: 'auto',
      margin: theme.spacing(0, 0, 3),
    },
    writeUsHeading: {
      margin: theme.spacing(3, 0),
      width: 'auto',
    },
    supportPageForm: {
      marginTop: theme.spacing(4.5),
    },
    primaryHeading: {
      margin: theme.spacing(2, 0),
    },
  },
  [theme.breakpoints.up('sm')]: {
    mainFormContainer: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    bannerText: {
      width: '87%',
      paddingLeft: theme.spacing(6.5),
    },
    bannerContainer: {
      height: '30vh',
      borderRadius: theme.spacing(1),
    },
    notACustomerHeading: {
      width: 'auto',
      margin: theme.spacing(0, 0, 6),
    },
    writeUsHeading: {
      width: 'auto',
      margin: theme.spacing(0, 0, 6),
    },
    sectionText: {
      width: 'auto',
    },
  },
  [theme.breakpoints.up('md')]: {
    bannerText: {
      width: '828px',
    },
    mainFormContainer: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    writeUsHeading: {
      width: '453px',
    },
    notACustomerHeading: {
      width: '324px',
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
    animation: 'buttonGrow 5s',
  },

  '@keyframes buttonGrow': {
    '0%': { width: '30%', color: theme.palette.text.primary },
    '20%': { width: '100%', color: theme.palette.text.primary },
    '30%': { color: theme.palette.text.secondary },
    '60%': { color: theme.palette.text.secondary },
    '70%': { color: theme.palette.text.primary, width: '100%' },
    '100%': { width: '30%', color: theme.palette.text.primary },
  },
}))
