import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import Image from './Image'

const BlogSearchPlaceholder = ({
  articlesNotFound,
  searchQuery,
  tryDifferentKeyword,
  searchPlaceholder,
}) => {
  const styles = useStyles()
  return (
    <Box className={styles.searchRoot}>
      <Box>
        <Typography variant="h4">{articlesNotFound}</Typography>
        <Typography variant="h1">{searchQuery}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">{tryDifferentKeyword}</Typography>
      </Box>
      <Box>
        <Image
          {...searchPlaceholder}
          className={styles.searchPlaceHolderImage}
        />
      </Box>
    </Box>
  )
}

export default BlogSearchPlaceholder

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('md')]: {
    searchRoot: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '50vh',
    },
    searchPlaceHolderImage: {
      width: '100%',
      height: '250px',
      objectFit: 'contain',
    },
  },
}))
