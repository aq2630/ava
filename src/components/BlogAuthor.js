import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import Image from './Image'
import { BLOG_WRITTEN_BY_TEXT } from '../constants'

const BlogSearchPlaceholder = ({ data }) => {
  const styles = useStyles()
  return (
    <Box className={styles.authorRoot}>
      <Box>
        <Image
          {...data.author.image.image}
          className={styles.blogAuthorImage}
        />
      </Box>
      <Box className={styles.blogInfoSection}>
        <Typography variant="body1" className={styles.writtenByText}>
          {BLOG_WRITTEN_BY_TEXT}
        </Typography>
        <Typography variant="h6" className={styles.authorName}>
          {data.author.name}
        </Typography>
        <Typography variant="body2" className={styles.authorDesignation}>
          {data.author.profileDetail}
        </Typography>
      </Box>
    </Box>
  )
}

export default BlogSearchPlaceholder

const useStyles = makeStyles((theme) => ({
  authorRoot: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, -3, 5),
    padding: theme.spacing(0, 3, 3),
    borderBottom: `4px solid ${theme.palette.grey[300]}`,
  },
  blogInfoSection: {
    marginLeft: theme.spacing(3),
  },
  blogAuthorImage: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: '50%',
  },
  [theme.breakpoints.up('md')]: {
    authorRoot: {
      margin: theme.spacing(10, 0),
      padding: theme.spacing(4, 0),
      borderTop: `4px solid ${theme.palette.grey[300]}`,
      borderBottom: `4px solid ${theme.palette.grey[300]}`,
    },
    blogAuthorImage: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
  },
}))
