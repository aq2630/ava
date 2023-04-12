import * as React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { Image, Link, RichText, WaitlistButton } from '../../components'
import { useStyles } from './404.styles'
import { ROUTES } from '../../constants'

const ErrorPage = ({ data }) => {
  const {
    title,
    description: rawDescription,
    image: image404,
    button: backToHomeButton,
  } = data.feature[0]
  const description = JSON.parse(rawDescription.raw)
  const backToHomeButtonText = backToHomeButton.text
  const styles = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container className={styles.mainCont}>
        <Grid item lg={1} sm={1} />
        <Grid item lg={4} sm={4} className={styles.imageWrapper}>
          {image404 && <Image className={styles.image404} {...image404} />}
        </Grid>
        <Grid item lg={1} sm={1} xs={1} />
        <Grid item lg={3} sm={5} xs={10} className={styles.textWrapper}>
          <div>
            <Typography variant="h2">{title}</Typography>
            <RichText
              variant="body1"
              className={styles.paragraph}
              document={description}
            />
            <Link to={ROUTES.HOME.to}>
              <WaitlistButton title={backToHomeButtonText} />
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ErrorPage
