import React, { useRef } from 'react'
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import Slider from 'react-slick'
import { useIntl } from 'gatsby-plugin-intl'
import Image from '../Image'
import { useStyles } from './UserTestimonial.style'

const UserTestimonial = ({ userTestimonials }) => {
  const { locale } = useIntl()
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const testimonialSlider = useRef()
  const { testimonialCard } = userTestimonials
  const styles = useStyles({ testimonialCard, locale })

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: smDown ? 1 : 1.1,
    slidesToScroll: 1,
    variableWidth: !smDown,
  }
  const nextSlideHandler = () => {
    testimonialSlider.current.slickNext()
  }
  const prevSlideHandler = () => {
    testimonialSlider.current.slickPrev()
  }

  return (
    <Box>
      <Grid container direction={smDown ? 'column-reverse' : 'column'}>
        <Grid item xs={12}>
          <Box className={styles.sliderArrows}>
            <IconButton
              className={styles.arrowIconButton}
              onClick={prevSlideHandler}
            >
              <Image {...userTestimonials.backwardarrow} />
            </IconButton>
            <IconButton
              className={styles.arrowIconButton}
              onClick={nextSlideHandler}
            >
              <Image {...userTestimonials.forwardarrow} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} className={styles.sliderContainer}>
          <Slider ref={testimonialSlider} {...settings}>
            {userTestimonials?.testimonialCard.map(
              (testimonialItem, testimonialIndex) => (
                <Box
                  key={`testimonial-${testimonialIndex}`}
                  className={styles.testimonialContainer}
                  style={{ width: smDown ? '75vw' : 750 }}
                >
                  <Box className={styles.blockquote}>
                    <Image {...userTestimonials.blockquote} />
                  </Box>
                  <Typography
                    variant="body1"
                    className={styles.testimonialText}
                  >
                    {testimonialItem.testimonialText}
                  </Typography>
                  <Box className={styles.nameDetailsContainer}>
                    <Box
                      className={styles.testimonialNameWrapper}
                      component="span"
                      display="inline-block"
                    >
                      <Typography
                        variant="body1"
                        className={styles.testimonialName}
                      >
                        {testimonialItem.testimonialName}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ),
            )}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserTestimonial
