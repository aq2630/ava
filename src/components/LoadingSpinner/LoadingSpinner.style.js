import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  loadingIconImg: {
    height: '24px',
    animation: '$loadingAnimation 1.7s linear infinite',
    marginRight: '8px',
  },
  '@keyframes loadingAnimation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}))
