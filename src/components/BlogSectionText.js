import * as React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import RichText from './RichText'

const ColumnTextandImage = ({ data }) => {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={12}>
          <RichText
            variant="body1"
            document={JSON.parse(data.sectionText.raw)}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColumnTextandImage

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  gridContainer: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
    },
  },
}))
