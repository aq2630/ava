import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'
import Image from '../Image'
import Link from '../Link'
import { useStyles } from './BlogItem.style'
import formatDate from '../../utils/formatDate'
import {
  BLOG_MINUTE_DURATION_AR,
  BLOG_MINUTE_DURATION_EN,
} from '../../constants'

const BlogItem = ({ blogItem = {}, categoryName, isBlogSlider, className }) => {
  const styles = useStyles({ isBlogSlider })
  const publishedDate = formatDate(blogItem.publishDate)
  const { locale } = useIntl()

  return (
    <Box className={[styles.root, className].join(' ')}>
      <Box>
        <Link to={`/blog/${blogItem.slug}`}>
          <Box className={styles.blogItemWrapper}>
            <Box className={styles.blogImageBox}>
              <Box component="span" className={styles.imageCategory}>
                {categoryName
                  ? blogItem.blogCategories.filter(
                      (item) =>
                        item.categoryName.toLowerCase() === categoryName,
                    )[0]?.categoryName
                  : blogItem.blogCategories[0].categoryName}
              </Box>
              <Box className={styles.imageWrapper}>
                <Image
                  className={styles.blogItemImage}
                  {...blogItem.heroImage}
                />
              </Box>
            </Box>
            <Box className={styles.blogTextBox}>
              <Box className={styles.dateDurationText}>
                <Typography className={styles.blogInfo} variant="body1">
                  {publishedDate}
                </Typography>
                <Box component="span" className={styles.dotSeparator}></Box>
                <Typography className={styles.blogInfo} variant="body1">
                  {blogItem.minRead}{' '}
                  {locale === 'en'
                    ? BLOG_MINUTE_DURATION_EN
                    : BLOG_MINUTE_DURATION_AR}
                </Typography>
              </Box>
              <Typography className={styles.blogTitle} variant="h4">
                {blogItem.title}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default BlogItem
