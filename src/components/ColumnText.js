import * as React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import RichText from './RichText'

const ColumnText = ({ data }) => {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item sm={12} md={6} className={styles.textColumns}>
          <RichText variant="body1" document={JSON.parse(data.leftText.raw)} />
        </Grid>
        <Grid item sm={12} md={6} className={styles.textColumns}>
          <RichText variant="body1" document={JSON.parse(data.rightText.raw)} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColumnText

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  textColumns: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
    },
  },
}))
