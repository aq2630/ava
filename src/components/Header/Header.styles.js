import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: 'transparent',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 7),
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3, 1),
    },
  },
  appBarToggle: {
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.secondary.main,
  },
  appBar: (props) => ({
    backgroundImage: `linear-gradient(to top, transparent 50%, ${theme.palette.secondary.main} 50%)`,
    backgroundSize: '100% 200%',
    transition:
      'background-position 0.25s ease-in-out, color 0.25s ease-in-out',
    backgroundPosition: props.trigger ? 'top' : 'bottom',
    color: props.trigger && theme.palette.background.default,
  }),
  hideElement: { display: 'none' },
  hamburgerWrapper: {
    width: '27px',
    height: '32px',
    cursor: 'pointer',
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      width: '100%',
      height: '3px',
      display: 'block',
      background: (props) =>
        props.trigger || props.drawerToggle
          ? theme.palette.text.secondary
          : theme.palette.secondary.main,
      position: 'absolute',
      opacity: 1,
      transition: 'top, transform .35s cubic-bezier(.23,1,.32,1)',
    },
    '&:before': {
      top: '4px',
    },
    '&:after': {
      top: '26px',
    },
  },
  rotateIcon: {
    '&:before': {
      transform: 'rotate(45deg)',
      top: '13px',
    },
    '&:after': {
      transform: 'rotate(-45deg)',
      top: '13px',
    },
  },
  hamburgerIcon: (props) => ({
    width: '100%',
    height: '3px',
    display: props.drawerToggle ? 'none' : 'block',
    backgroundColor:
      props.trigger || props.drawerToggle
        ? theme.palette.text.secondary
        : theme.palette.secondary.main,
    position: 'absolute',
    top: '15px',
    opacity: 1,
  }),
  toolbarOffset: {
    height: 'inherit',
    [theme.breakpoints.up('md')]: {
      height: 100,
    },
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    '&>*': {
      margin: theme.spacing(0, 2),
      '[lang=ar] &': {
        lineHeight: 2,
      },
    },
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      flex: 1,
      overflow: 'auto',
      '&>*': {
        margin: theme.spacing(1, 0),
      },
    },
  },
  navigationDrawer: {
    '& .MuiDrawer-paper': {
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      padding: theme.spacing(3, 7),
    },
    '& $toolbar': {
      borderBottom: `1px solid ${fade(theme.palette.primary.main, 0.2)}`,
    },
    '& svg': {
      color: theme.palette.text.secondary,
    },
    '& $headerText': {
      color: theme.palette.text.secondary,
    },
  },
  headerText: {
    fontSize: '1.125rem',
    fontWeight: 500,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    '[lang=ar] &': {
      fontWeight: 'bold',
    },
  },
  headerLanguageLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    padding: theme.spacing(0.5, 1),
    '[lang=ar] &': {
      top: '5px',
    },
  },
  languageSwitcher: {
    marginRight: theme.spacing(4),
    '[lang=ar] &': {
      marginLeft: theme.spacing(3),
    },
    '& > .headerLanguageLink': {
      minWidth: theme.spacing(4.5),
      '[lang=ar] &:not($inactiveLanguage)': {
        paddingBottom: theme.spacing(1.25),
      },
    },
    '[lang=en] & $inactiveLanguage': {
      fontFamily: 'SSTArabic, Arial',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        top: '-4px',
      },
      top: '-4px',
      fontWeight: 700,
    },
    '[lang=ar] & $inactiveLanguage': {
      [theme.breakpoints.down('sm')]: {
        top: '3px',
        position: 'relative',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 'auto',
      '& $headerText': {
        fontWeight: 'normal',
        textTransform: 'uppercase',
        fontSize: '1.375rem',
      },
    },
  },
  inactiveLanguage: {
    color: theme.palette.grey[500],
    position: 'relative',
    '&:before': {
      position: 'absolute',
      width: 2,
      height: '1.125rem',
      backgroundColor: (props) =>
        props.trigger
          ? theme.palette.text.secondary
          : theme.palette.secondary.main,
      content: "' '",
    },
    '[lang=en] &:before': {
      [theme.breakpoints.down('sm')]: {
        left: '1px',
        backgroundColor: theme.palette.text.secondary,
        top: '16px',
      },
      left: 0,
      top: '12px',
    },
    '[lang=ar] &:before': {
      [theme.breakpoints.down('sm')]: {
        top: theme.spacing(2.5),
        backgroundColor: theme.palette.text.secondary,
        right: -4,
      },

      top: theme.spacing(1.75),
      right: -2,
    },
  },
  squareButton: {
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(0.5, 1.5),
    },
  },
  primaryButton: {
    borderRadius: 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(0.5, 1.5),
    },
    '&:after': {
      content: '""',
      opacity: 0.4,
    },
  },

  link: {
    color: 'inherit',
    position: 'relative',
    boxSizing: 'content-box',
  },
  menuItem: {
    display: 'inline-block',
    '&:after': {
      display: 'block',
      content: '""',
      borderBottom: `solid 2px ${theme.palette.primary.main}`,
      transform: 'scaleX(0)',
      position: 'relative',
      top: '2px',
      transition: 'transform 250ms ease-in-out',
    },
    '&:hover:after': {
      transform: 'scaleX(1)',
    },
  },
  logo: ({ drawerToggle, trigger }) => ({
    color:
      drawerToggle || trigger
        ? theme.palette.background.default
        : theme.palette.secondary.main,
    marginRight: 'auto',
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        height: theme.spacing(3.75),
        width: theme.spacing(7.25),
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        height: theme.spacing(6.25),
      },
      '&>svg': {
        height: '100%',
      },
    },
  }),
}))
