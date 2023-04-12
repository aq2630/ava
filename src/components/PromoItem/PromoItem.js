import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'
import AnimatedPhoneSet from '../AnimatedPhoneSet'
import AnimatedText from '../AnimatedText'
import { useStyles } from './PromoItem.style'

const HeroSection = ({
  title,
  description,
  animationPath,
  placeholderPath,
  reverse,
}) => {
  const props = { reverse, placeholderPath }
  const styles = useStyles(props)
  return (
    <Grid spacing={0} container alignItems="center" className={styles.root}>
      <Grid item xs={12} sm={12} md={6} className={styles.promoTextContainer}>
        <AnimatedText
          textClass={styles.title}
          isXray
          variant="h3"
          content={title}
        />
        <Typography className={styles.description} variant="body1">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={styles.animationContainer}>
        <AnimatedPhoneSet animationPath={animationPath} style={styles.lottie} />
      </Grid>
    </Grid>
  )
}

export default HeroSection
