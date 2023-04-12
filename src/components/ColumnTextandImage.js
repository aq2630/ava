import * as React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Image from './Image'
import RichText from './RichText'

const ColumnTextandImage = ({ data }) => {
  const styles = useStyles()

  return (
    <Box className={styles.root}>
      <Grid
        container
        className={styles.gridContainer}
        direction={data.imagetoLeft ? 'row-reverse' : 'row'}
      >
        <Grid item xs={12} md={6} className={styles.gridColumn}>
          <RichText variant="body1" document={JSON.parse(data.text.raw)} />
        </Grid>
        <Grid item xs={12} md={6} className={styles.imageColumn}>
          <Image {...data.colImage} className={styles.blogImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColumnTextandImage

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, -3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3, 0),
    },
  },
  gridColumn: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
    },
  },
  imageColumn: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5),
    },
  },
  blogImage: {
    width: '100%',
  },
}))
