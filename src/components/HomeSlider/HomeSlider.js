import React, { useRef } from 'react'
import { Box, Container, IconButton, Typography } from '@material-ui/core'
import Slider from 'react-slick'
import { useIntl } from 'gatsby-plugin-intl'
import Image from '../Image'
import RichText from '../RichText'
import { useStyles } from './HomeSlider.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeSlider = ({ data = {} }) => {
  const mainSlider = useRef()
  const thumbnailSlider = useRef()
  const textSlider = useRef()
  const { locale } = useIntl()
  const styles = useStyles({ locale })

  const mainSliderSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const thumbnailSliderSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    initialSlide: locale === 'ar' ? 0 : 1,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: false,
  }
  const textSliderSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  }

  const nextSlideHandler = () => {
    mainSlider.current.slickNext()
    thumbnailSlider.current.slickNext()
    textSlider.current.slickNext()
  }
  const prevSlideHandler = () => {
    mainSlider.current.slickPrev()
    thumbnailSlider.current.slickPrev()
    textSlider.current.slickPrev()
  }

  const handleThumbailSlider = (thumbnailSliderIndex) => {
    mainSlider.current.slickGoTo(thumbnailSliderIndex)
    thumbnailSlider.current.slickGoTo(
      (thumbnailSliderIndex + 1) % data.slides.length,
    )
  }

  return (
    <Container maxWidth="lg" className={styles.sliderContainer}>
      <Box className={styles.root}>
        <Box className={styles.sliderWrapper}>
          <Box className={styles.leftSection}>
            <Slider
              asNavFor={textSlider.current}
              ref={mainSlider}
              {...mainSliderSettings}
            >
              {data.slides.map((mainSliderItem, mainSliderIndex) => (
                <Image
                  key={`mainSlide-${mainSliderIndex}`}
                  className={styles.mainImage}
                  {...mainSliderItem.sliderImage.image}
                />
              ))}
            </Slider>
          </Box>

          <Box className={styles.rightSection}>
            <Box className={styles.nextImages}>
              <Slider ref={thumbnailSlider} {...thumbnailSliderSettings}>
                {data.slides.map(
                  (thumbnailSliderItem, thumbnailSliderIndex) => (
                    <Box
                      className={styles.thumbnailBox}
                      key={`thumbnailSlide-${thumbnailSliderIndex}`}
                      onClick={() => handleThumbailSlider(thumbnailSliderIndex)}
                    >
                      <Image {...thumbnailSliderItem.sliderImage.image} />
                    </Box>
                  ),
                )}
              </Slider>
            </Box>
            <Box className={styles.sliderText}>
              <Slider
                asNavFor={mainSlider.current}
                ref={textSlider}
                {...textSliderSettings}
              >
                {data.slides.map((textSliderItem, textSliderIndex) => (
                  <Box
                    key={`textSlide-${textSliderIndex}`}
                    className="carousel-cell-text"
                  >
                    <Typography className={styles.sliderHeading} variant="h3">
                      {textSliderItem.slideHeading}
                    </Typography>
                    <RichText
                      className={styles.sliderDescription}
                      variant="body1"
                      document={JSON.parse(textSliderItem.slideDescription.raw)}
                    />
                  </Box>
                ))}
              </Slider>
              <Box className={styles.sliderArrows}>
                <IconButton
                  className={styles.arrowIconButton}
                  onClick={prevSlideHandler}
                >
                  <Image {...data.backwardarrow} />
                </IconButton>
                <IconButton
                  className={styles.arrowIconButton}
                  onClick={nextSlideHandler}
                >
                  <Image {...data.forwardarrow} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomeSlider
