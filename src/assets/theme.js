import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { LANGUAGES } from '../constants'
import { arabicFontFace, englishFontFace } from './fonts'

// AVA theme
const theme = (language = LANGUAGES.EN) =>
  responsiveFontSizes(
    createMuiTheme({
      direction: language === LANGUAGES.AR ? 'rtl' : 'ltr',
      palette: {
        primary: {
          light: '#ccffff',
          main: '#00ffff',
          dark: '#04e0e0',
        },
        secondary: {
          main: '#000000',
        },
        warning: {
          main: '#ffea50',
        },
        error: {
          main: '#ff3366',
        },
        success: {
          main: '#81ff3f',
        },
        background: {
          default: '#fff',
          shadow: 'rgba(0, 0, 0, 0.16)',
        },
        text: {
          primary: '#000000',
          secondary: '#ffffff',
          footerInfo: '#CCCCCC',
        },
        stroke: {
          arabicXray: '#9c9c9c',
        },
        grey: {
          600: '#727272',
          500: '#999999',
          400: '#CCCCCC',
          300: '#f1f1f1',
        },
        button: {
          main: '#369999',
        },
      },
      typography: {
        fontFamily:
          language === LANGUAGES.AR ? 'SSTArabic, Arial' : 'NeuzeitGro, Arial',
        h1: {
          fontSize: 60,
          fontWeight: 500,
        },
        h2: {
          fontWeight: 500,
          lineHeight: 1.08,
        },
        h3: {
          '@media (min-width:600px)': {
            fontSize: 42,
          },
          fontWeight: 500,
        },
        h4: {
          '@media (min-width:600px)': {
            fontSize: 32,
          },
          fontWeight: 500,
        },
        body1: {
          fontSize: 16,
          '@media (min-width:600px)': {
            fontSize: 18,
          },
          lineHeight: 1.6,
        },
      },
      zIndex: {
        xRayWrapper: 1,
        xRayText: -2,
        slash: -1,
        blogImageCategory: 2,
        blogNavbar: 3,
        appBar: 1301,
        blogShareNavbar: 990,
        blogShareTooltip: 991,
      },
      overrides: {
        MuiContainer: {
          root: {
            '@media (max-width:599px)': {
              paddingLeft: '24px',
              paddingRight: '24px',
            },
          },
        },
        MuiTab: {
          root: {
            marginRight: '8px',
            borderRadius: '4px',
            padding: '4px 16px',
            border: '2px solid #727272',
            '@media (min-width:600px)': {
              minWidth: 'fit-content',
              minHeight: 'fit-content',
            },
          },
        },
        MuiInputAdornment: {
          root: {
            '& .MuiTypography-colorTextSecondary': {
              color: '#000',
              lineHeight: 1.5,
            },
          },
        },
        MuiCssBaseline: {
          '@global': {
            '@font-face': [...arabicFontFace, ...englishFontFace],
            '::-webkit-input-placeholder': {
              /* Chrome/Opera/Safari */ color: '#818181',
            },
            '::-moz-placeholder': {
              /* Firefox 19+ */ color: '#818181',
            },
            ':-ms-input-placeholder': {
              /* IE 10+ */ color: '#818181',
            },
            ':-moz-placeholder': {
              /* Firefox 18- */ color: '#818181',
            },
            body: {
              backgroundColor: 'unset',
            },
          },
        },
        MuiAccordion: {
          root: {
            boxShadow: 'none',
            '&:not(:last-child)': {
              borderBottom: 0,
            },
            '&:before': {
              display: 'none',
            },
            '&$expanded': {
              margin: 'auto',
            },
          },
          expanded: {},
        },
        MuiAccordionSummary: {
          root: {
            fontWeight: '500',
            padding: '0 0 8px 0',
            minHeight: 74,
            '&$expanded': {
              minHeight: 74,
            },
          },
          content: {
            margin: '12px 0 0',
            '&$expanded': {
              margin: '12px 0 0',
            },
          },
          expandIcon: {
            position: 'relative',
            top: '0',
            '& .MuiSvgIcon-root': {
              fill: 'black',
              width: '1.4em',
              height: '1.4em',
            },
          },
        },
        MuiAccordionDetails: {
          root: {
            padding: '24px 72px 24px 0',
            '@media (max-width:599px)': {
              padding: '24px 0',
            },
            lineHeight: 1.67,
          },
        },
        MuiButton: {
          root: {
            padding: '0.625rem 1.25rem',
            textTransform: 'none',
          },
        },
        MuiInput: {
          underline: {
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: () => '2px solid #000',
            },
            '&:before': {
              borderBottom: () => '2px solid #000',
            },
          },
        },
        MuiInputBase: {
          input: {
            padding: '1rem 0',
          },
        },
        MuiTypography: {
          h1: {
            fontSize: 42,
            '@media (min-width:600px)': {
              fontSize: 54,
            },
            '@media (min-width:960px)': {
              fontSize: 60,
            },
            '@media (min-width:1280px)': {
              fontSize: 60,
            },
          },
          h2: {
            '@media (min-width:600px)': {
              fontSize: 48,
            },
            '@media (min-width:960px)': {
              fontSize: 48,
            },
            '@media (min-width:1280px)': {
              fontSize: 48,
            },
          },
          h3: {
            '@media (min-width:960px)': {
              fontSize: 42,
              fontWeight: 500,
            },
            '@media (min-width:1280px)': {
              fontSize: 42,
              fontWeight: 500,
            },
          },
          h6: {
            '@media (min-width:600px)': {
              fontSize: 22,
            },
            '@media (min-width:960px)': {
              fontSize: 22,
            },
            '@media (min-width:1280px)': {
              fontSize: 22,
            },
          },
          paragraph: {
            whiteSpace: 'pre-wrap',
            '@media (min-width:960px)': {
              marginBottom: 48,
            },
          },
          body2: {
            '@media (min-width:960px)': {
              fontSize: '1.125rem',
            },
          },
        },
      },
    }),
  )

export default theme
