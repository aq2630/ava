import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'
import Image from '../Image'
import { useStyles } from './BlogHeroSection.style'
import formatDate from '../../utils/formatDate'
import {
  BLOG_MINUTE_DURATION_AR,
  BLOG_MINUTE_DURATION_EN,
} from '../../constants'

const BlogHeroSection = ({ item }) => {
  const styles = useStyles()
  const publishedDate = formatDate(item.publishDate)
  const { locale } = useIntl()

  return (
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Box className={styles.container}>
          <Box className={styles.blogTextBox}>
            <Box className={styles.dateDurationText}>
              <Typography className={styles.blogInfo} variant="body1">
                {publishedDate}
              </Typography>
              <Box component="span" className={styles.dotSeparator}></Box>
              <Typography className={styles.blogInfo} variant="body1">
                {item.minRead}{' '}
                {locale === 'en'
                  ? BLOG_MINUTE_DURATION_EN
                  : BLOG_MINUTE_DURATION_AR}
              </Typography>
            </Box>
            <Typography className={styles.blogTitle} variant="h1">
              {item.title}
            </Typography>
          </Box>
          <Box className={styles.blogItemWrapper}>
            <Box className={styles.blogImageBox}>
              <Box component="span" className={styles.imageCategory}>
                {item.blogCategories[0].categoryName}
              </Box>
              <Box className={styles.imageWrapper}>
                <Image className={styles.blogItemImage} {...item.heroImage} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BlogHeroSection
