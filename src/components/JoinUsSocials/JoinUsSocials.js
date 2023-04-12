import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Tilt from 'react-parallax-tilt'
import XRayText from '../XRayText'
import Image from '../Image'
import SocialIcons from '../SocialIcons'
import { useStyles } from './JoinUsSocials.style'

const JoinUsSocials = ({ data }) => {
  const styles = useStyles()

  const cardImage = data?.card
  const joinUsTitle = data.title || ''
  const joinUsText = data.text || ''
  const socialLinks = data.socials || []

  return (
    <div className={styles.rootContainer}>
      <Container maxWidth="lg">
        <Grid container className={styles.mainGridContainer}>
          <Grid item md={6} sm={12} className={styles.cardImgContainer}>
            <Tilt options={{ speed: 1000 }}>
              <div className={styles.cardImageWrapper}>
                <Image className={styles.cardImage} {...cardImage} />
              </div>
            </Tilt>
          </Grid>

          <Grid item md={6} sm={12} className={styles.textContainer}>
            <XRayText
              textClass={styles.joinUsTitle}
              variant="h3"
              content={joinUsTitle}
              wrapperClass={styles.joinUsTitleWrapper}
            />
            <Typography variant="body1" className={styles.joinUsText}>
              {joinUsText}
            </Typography>
            <div>
              <SocialIcons isJoinUsSocials socialLinks={socialLinks} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default JoinUsSocials
