import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  sideMenu: {
    position: 'sticky',
    top: '150px',
    marginBottom: theme.spacing(10),
  },
  miniSlash: {
    position: 'absolute',
    transition: 'all 0.3s ease-in-out',
    zIndex: theme.zIndex.slash,
    top: theme.spacing(0.5),
    width: '75px',
    transform: ({ activeSideMenuIndex, navHeight }) =>
      `translateY(${activeSideMenuIndex * navHeight * 10}px)`,
  },
  miniSlashImage: {
    width: '100%',
  },
  boldText: {
    fontWeight: 500,
  },
  sidebarHeading: {
    cursor: 'pointer',
    height: '64px',
    fontSize: '1.125rem',
    margin: 0,
    lineHeight: 1.56,
    display: 'flex',
    alignItems: 'center',
  },
}))
