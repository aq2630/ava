import * as React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import Image from './Image'

const ColumnImage = ({ data }) => {
  const styles = useStyles()
  return (
    <Box className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={6} className={styles.imageColumn}>
          <Image {...data.leftImage} className={styles.blogImage} />
        </Grid>
        <Grid item xs={6} className={styles.imageColumn}>
          <Image {...data.rightImage} className={styles.blogImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColumnImage

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, -3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3, 0),
    },
  },
  imageColumn: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
    },
  },
  blogImage: {
    width: '100%',
  },
}))
