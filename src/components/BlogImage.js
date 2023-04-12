import React, { useRef, useState } from 'react'
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core'
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined'
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined'
import Image from './Image'
import { ContentType } from '../constants'

const ColumnImage = ({ data }) => {
  const styles = useStyles()
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const blogVideoRef = useRef(null)
  const { contentType } = data.image.file
  const isContentTypeVideo = contentType === ContentType.videoMp4
  const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(true)
  const [isPauseButtonVisible, setIsPauseButtonVisible] = useState(false)

  const handlePlay = () => {
    blogVideoRef.current.play()
    setIsPlayButtonVisible(false)
    setIsPauseButtonVisible(true)
  }

  const handlePause = () => {
    blogVideoRef.current.pause()
    setIsPlayButtonVisible(true)
    setIsPauseButtonVisible(false)
  }

  const handleMouseEnter = () => {
    if (!blogVideoRef?.current.paused) {
      setIsPauseButtonVisible(true)
    } else {
      setIsPlayButtonVisible(true)
      setIsPauseButtonVisible(false)
    }
  }

  const handleMouseLeave = () => {
    if (!blogVideoRef?.current.paused) setIsPauseButtonVisible(false)
  }

  const handleVideoPlayback = () => {
    if (blogVideoRef?.current.paused && !mdUp) {
      blogVideoRef.current.play()
      setIsPlayButtonVisible(false)
    } else {
      blogVideoRef.current.pause()
      setIsPlayButtonVisible(true)
    }
  }

  return (
    <Box className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={12}>
          {isContentTypeVideo ? (
            <Box className={styles.videoBox}>
              <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.playButtonWrapper}
              >
                {(isPlayButtonVisible || blogVideoRef?.current.stopped) && (
                  <IconButton
                    onClick={handlePlay}
                    className={styles.playButton}
                  >
                    <PlayArrowOutlinedIcon />
                  </IconButton>
                )}
                {isPauseButtonVisible && (
                  <IconButton
                    onClick={handlePause}
                    className={styles.pauseButton}
                  >
                    <PauseOutlinedIcon />
                  </IconButton>
                )}
              </Box>
              <IconButton
                onClick={handleVideoPlayback}
                className={styles.videoIconButton}
                disableRipple={true}
              >
                <video ref={blogVideoRef} className={styles.blogVideo}>
                  <source src={data.image.file.url} type="video/mp4" />
                </video>
              </IconButton>
            </Box>
          ) : (
            <Image {...data.image} className={styles.blogImage} />
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColumnImage

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, -3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(3, 0),
    },
  },
  blogVideo: {
    width: '100%',
  },
  videoBox: {
    position: 'relative',
  },
  videoIconButton: {
    padding: theme.spacing(0),
  },
  playButtonWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      zIndex: 1,
    },
  },
  playButton: {
    cursor: 'pointer',
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing(1.5),
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
    },
    '& svg': {
      fill: theme.palette.primary.main,
      width: '2em',
      height: '2em',
      [theme.breakpoints.up('md')]: {
        width: '3em',
        height: '3em',
      },
    },
  },
  pauseButton: {
    cursor: 'pointer',
    backgroundColor: theme.palette.text.primary,
    padding: theme.spacing(1.5),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      display: 'inline-flex',
      opacity: 0.5,
    },
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
    },
    '& svg': {
      fill: theme.palette.primary.main,
      width: '2em',
      height: '2em',
      [theme.breakpoints.up('md')]: {
        width: '3em',
        height: '3em',
      },
    },
  },
  blogImage: {
    width: '100%',
  },
}))
