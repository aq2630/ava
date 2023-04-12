import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  tabsContainer: {
    width: '100%',
    padding: theme.spacing(1, 0),
    backgroundColor: theme.palette.background.default,
    position: 'sticky',
    zIndex: theme.zIndex.blogNavbar,
    top: '56px',
  },
  mobileToggleButton: {
    border: `2px solid ${theme.palette.text.primary}`,
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
  },
  blogsTabsButton: {
    padding: theme.spacing(0, 1),
  },
  expandIcon: {
    '& svg': {
      width: '1.5em',
      height: '1.5em',
      fill: theme.palette.text.primary,
      marginTop: theme.spacing(0.5),
    },
  },
  mobileTabsRoot: {
    padding: theme.spacing(3),
    '& .MuiTab-textColorInherit.Mui-selected': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.secondary,
      border: `2px solid ${theme.palette.text.primary}`,
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTabs-flexContainer': {
      display: 'inline-flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      '& button': {
        margin: theme.spacing(1),
      },
    },
  },
  tabsInputContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    display: 'inline-flex',
    float: 'right',
    padding: theme.spacing(0.5, 1),
    '& input': {
      background: `no-repeat left 9px center`,
      backgroundImage: ({ searchInputImage }) => `url(${searchInputImage})`,
      backgroundSize: '18px',
      border: `2px solid ${theme.palette.grey[400]}`,
      borderRadius: '5rem',
      outline: 'none',
      caretColor: 'transparent',
      padding: theme.spacing(0.5, 1),
      float: 'right',
      cursor: 'pointer',
      width: '38px',
      height: '38px',
      transition: 'all 0.5s',
      '&::-webkit-input-placeholder': {
        color: 'transparent',
      },
      '&::-moz-placeholder': {
        color: 'transparent',
      },
      '&:focus': {
        width: '100%',
        cursor: 'auto',
        border: '2px solid',
        caretColor: theme.palette.text.primary,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.grey[300],
        '&::-webkit-input-placeholder': {
          color: theme.palette.grey[600],
        },
        '&::-moz-placeholder': {
          color: theme.palette.grey[600],
        },
      },
    },
  },
  blogGridContainer: {
    marginTop: theme.spacing(5),
  },
  blogItem: {
    margin: theme.spacing(2, 0),
  },
  loadMoreButtonWrapper: {
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(1, 0),
    flexBasis: '100%',
  },
  loadMoreButton: {
    color: theme.palette.button.main,
  },
  blogImage: {
    width: '400px',
  },
  lodeMoreIcon: {
    width: '32px',
    height: '32px',
  },
  lodeMoreText: {
    padding: theme.spacing(0, 1),
    fontSize: '1.125rem',
  },
  latestBlogsHeading: {
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      scrollMarginTop: '120px',
    },
    tabsContainer: {
      width: '100%',
      padding: theme.spacing(1, 0),
      backgroundColor: theme.palette.background.default,
      position: 'sticky',
      zIndex: theme.zIndex.blogNavbar,
      top: '99px',
      '& .MuiTab-textColorInherit.Mui-selected': {
        border: `2px solid ${theme.palette.text.primary}`,
      },
      '& .MuiTabs-indicator': {
        display: 'none',
      },
    },
    tabsRoot: {
      display: 'inline-flex',
      alignItems: 'center',
      '& .MuiTab-root': {
        textTransform: 'capitalize',
      },
    },
    tabsInputContainer: {
      flexDirection: 'row',
    },
    searchInput: {
      display: 'inline-flex',
      float: 'right',
      padding: theme.spacing(0.5, 1),
      '& input': {
        backgroundImage: ({ searchInputImage }) => `url(${searchInputImage})`,
        background: `no-repeat left 9px center`,
        backgroundSize: '18px',
        border: `2px solid ${theme.palette.grey[400]}`,
        borderRadius: '5rem',
        outline: 'none',
        caretColor: 'transparent',
        padding: theme.spacing(0.5, 1),
        float: 'right',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        transition: 'all 0.5s',
        '&::-webkit-input-placeholder': {
          color: 'transparent',
        },
        '&::-moz-placeholder': {
          color: 'transparent',
        },
        '&:focus': {
          width: '300px',
          cursor: 'auto',
          border: '2px solid',
          caretColor: theme.palette.text.primary,
          paddingLeft: theme.spacing(4),
          backgroundColor: theme.palette.grey[300],
          '&::-webkit-input-placeholder': {
            color: theme.palette.grey[600],
          },
          '&::-moz-placeholder': {
            color: theme.palette.grey[600],
          },
        },
      },
    },
    blogGridContainer: {
      marginTop: theme.spacing(5),
      '&> div:nth-child(even)': {
        marginTop: theme.spacing(-5),
      },
    },
    blogItem: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(5),
    },
    loadMoreButtonWrapper: {
      margin: theme.spacing(0, 'auto'),
      padding: theme.spacing(4, 0),
    },
    loadMoreButton: {
      color: theme.palette.button.main,
    },
    blogImage: {
      width: '400px',
    },
  },
}))
