import React, { useRef } from 'react'
import { Box, Container, IconButton, useMediaQuery } from '@material-ui/core'
import Slider from 'react-slick'
import { useIntl } from 'gatsby-plugin-intl'
import ArrowIcon from '../ArrowIcon'
import BlogItem from '../BlogItem/BlogItem'
import AnimatedText from '../AnimatedText'
import { useStyles } from './RelatedBlogSlider.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const RelatedBlogSlider = ({ blogs, heading }) => {
  const blogSliderRef = useRef()
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const styles = useStyles()
  const { locale } = useIntl()

  const blogSliderSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: mdUp ? '3%' : '25%',
    slidesToShow: 2,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  const nextSlideHandler = () => {
    blogSliderRef.current.slickNext()
  }
  const prevSlideHandler = () => {
    blogSliderRef.current.slickPrev()
  }

  return (
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Box className={styles.controlSection}>
          <Box className={styles.iconWrapper}>
            <IconButton
              className={styles.arrowIconButton}
              onClick={prevSlideHandler}
            >
              <ArrowIcon locale={locale} />
            </IconButton>
          </Box>
          <Box>
            <AnimatedText
              isXray
              variant="h1"
              content={heading}
              wrapperClass={styles.blogSliderHeading}
            />
          </Box>
          <Box className={styles.iconWrapper}>
            <IconButton
              className={styles.arrowIconButton}
              onClick={nextSlideHandler}
            >
              <ArrowIcon locale={locale} direction="forward" />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <Box className={styles.slidesSection}>
        <Slider ref={blogSliderRef} {...blogSliderSettings}>
          {blogs.map((blogSliderItem, index) => (
            <BlogItem
              key={`related-post-${index}`}
              blogItem={blogSliderItem}
              isBlogSlider
              className={styles.relatedBlogItem}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default RelatedBlogSlider
