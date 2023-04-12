import React, { useRef } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './BlogPoll.style'

const BlogPoll = ({ data }) => {
  const styles = useStyles()
  const pollRef = useRef()

  const { pollLink } = data || ''

  return (
    <Box className={styles.root}>
      <iframe
        scrolling="no"
        ref={pollRef}
        className={styles.pollIframe}
        src={pollLink}
      ></iframe>
    </Box>
  )
}

export default BlogPoll
