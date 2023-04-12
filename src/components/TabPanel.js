import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const TabPanel = (props) => {
  const styles = useStyles()
  const { children, value, index, ...other } = props
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={styles.tabsPanelRoot}
    >
      {value === index && (
        <Box className={styles.tabPanelText} textAlign="center">
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  )
}

export default TabPanel

const useStyles = makeStyles((theme) => ({
  tabsPanelRoot: {
    width: '100%',
  },
  tabPanelText: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    tabPanelText: {
      padding: theme.spacing(3),
    },
  },
}))
