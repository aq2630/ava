import React, { useRef, useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import Slider from 'react-slick'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { useIntl } from 'gatsby-plugin-intl'
import Image from '../Image'
import { useStyles } from './BlogImageGallery.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const IMAGETEXTENGLISH = 'Images'
const IMAGETEXTARABIC = 'الصور'

const BlogImageGallery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const styles = useStyles()
  const gallerySlider = useRef()
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [activeImage, setActiveImage] = useState(1)
  const { locale } = useIntl()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: locale === 'ar',
    adaptiveHeight: true,
    beforeChange: (_, newIndex) => {
      setActiveImage(newIndex + 1)
    },
  }

  const handleClose = () => {
    setIsOpen(false)
    gallerySlider.current.slickGoTo(0)
    setActiveImage(1)
  }

  const handleThumbnailSelect = (index) => {
    gallerySlider.current.slickGoTo(index)
    setActiveImage(index + 1)
  }

  return (
    <Box className={styles.root}>
      <Box>
        <Box className={styles.mainImage}>
          <Box component="span" onClick={() => !mdUp && setIsOpen(true)}>
            <Image
              className={styles.mainLightBoxImage}
              {...data?.galleryImages[0].image}
            />
          </Box>
          <Box
            component="span"
            onClick={() => setIsOpen(true)}
            className={styles.lightBoxButton}
          >
            {data?.galleryImages.length}{' '}
            {mdUp ? (
              <>
                {locale === 'en' ? IMAGETEXTENGLISH : IMAGETEXTARABIC}{' '}
                <ImageOutlinedIcon fontSize="small" />
              </>
            ) : (
              <ImageOutlinedIcon fontSize="small" />
            )}
          </Box>
        </Box>
        <Modal className={styles.modalRoot} open={isOpen} onClose={handleClose}>
          <Box className={styles.modalMain}>
            <Container className={styles.lightBoxContainer}>
              <Box className={styles.titleBox}>
                <Box>
                  <Typography className={styles.counterText} variant="body2">
                    {`${activeImage} / ${data?.galleryImages.length}`}
                  </Typography>
                </Box>
                <Typography className={styles.galleryTitle} variant="h3">
                  {data.galleryTitle}
                </Typography>
                <Box>
                  <IconButton
                    className={styles.closeIconButton}
                    onClick={handleClose}
                  >
                    <CloseOutlinedIcon className={styles.closeIcon} />
                  </IconButton>
                </Box>
              </Box>
            </Container>
            <Box className={styles.sliderBox}>
              <Slider ref={gallerySlider} {...settings}>
                {data?.galleryImages?.map((image, index) => (
                  <Box key={`gallery-image-${index}`}>
                    <Image className={styles.lightBoxImage} {...image.image} />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Container className={styles.lightBoxContainer}>
              <Box className={styles.thumbnailWrapper}>
                {data?.galleryImages.map((image, index) => (
                  <Box key={`gallery-image-${index}`}>
                    <IconButton
                      className={styles.iconButton}
                      onClick={() => handleThumbnailSelect(index)}
                    >
                      <Box className={styles.thumbnailBox}>
                        <Image
                          className={[
                            styles.lightBoxImage,
                            activeImage - 1 === index
                              ? styles.activeThumbnail
                              : '',
                          ].join(' ')}
                          {...image.image}
                        />
                      </Box>
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}

export default BlogImageGallery
