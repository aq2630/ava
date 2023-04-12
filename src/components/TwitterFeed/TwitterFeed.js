import React, { useEffect } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import AnimatedText from '../AnimatedText'
import { useStyles } from './TwitterFeed.style'
import { useScript } from '../../utils/externalScript'

// CURATOR feed id, got this from Curator dashboard, shouldn't be changed in the curator dashboard.
const CURATOR_ID = 'curator-feed-default-feed-layout'
const CURATOR_SCRIPT_ID = 'curator-script'

const TwitterFeed = ({ title, locale }) => {
  const styles = useStyles()
  const { subscribe, unsubscribe } = useScript(
    {
      url:
        'https://cdn.curator.io/published/73b2d471-3f64-4c8d-9809-1226cfb8d9d9.js',
      defer: true,
    },
    CURATOR_SCRIPT_ID,
  )

  useEffect(() => {
    subscribe()

    return () => {
      unsubscribe()
    }
  }, [locale])

  return (
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={12}>
            <AnimatedText
              variant="h1"
              content={title}
              wrapperClass={styles.socialFeedHeading}
            />
            <Box id={CURATOR_ID} className={styles.crtPostRoot} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TwitterFeed
