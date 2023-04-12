import React, { useRef, useState } from 'react'
import { Box, Container, IconButton, useMediaQuery } from '@material-ui/core'
import Slider from 'react-slick'
import { useIntl } from 'gatsby-plugin-intl'
import ArrowIcon from '../ArrowIcon'
import BlogItem from '../BlogItem/BlogItem'
import AnimatedText from '../AnimatedText'
import { useStyles } from './BlogSlider.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BlogSlider = ({ blogs = {}, heading }) => {
  const blogSliderRef = useRef()
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const styles = useStyles()
  const { locale } = useIntl()
  const [activeSlideIndex, setActiveSlideIndex] = useState(2)

  const blogSliderSettings = {
    centerMode: true,
    infinite: true,
    initialSlide: locale === 'ar' ? 1 : 0,
    centerPadding: mdUp ? '21%' : '7%',
    slidesToShow: 1,
    useCSS: false,
    speed: 300,
    arrows: false,
    rtl: locale === 'ar',
    beforeChange: (current, next) => setActiveSlideIndex(next),
  }
  const nextSlideHandler = () => {
    blogSliderRef.current.slickNext()
  }
  const prevSlideHandler = () => {
    blogSliderRef.current.slickPrev()
  }

  const featuredBlogs = blogs.filter(
    (blogSliderItem) => blogSliderItem.featured,
  )

  return (
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Box className={styles.controlSection}>
          <Box alignItems="center" display="flex">
            <IconButton
              className={styles.arrowIconButton}
              onClick={prevSlideHandler}
            >
              <ArrowIcon locale={locale} />
            </IconButton>
          </Box>
          <Box>
            <AnimatedText
              variant="h1"
              content={heading}
              wrapperClass={styles.blogSliderHeading}
            />
          </Box>
          <Box alignItems="center" display="flex">
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
          {featuredBlogs.map((blogSliderItem, index) => {
            return (
              <BlogItem
                key={`BlogSlides-${index}`}
                blogItem={blogSliderItem}
                isBlogSlider
                className={[
                  activeSlideIndex === index ? styles.activeBlogItemSlide : ' ',
                  styles.blogItemSlide,
                ].join(' ')}
              />
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}

export default BlogSlider
