import React, { useEffect, useRef, useState } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowHeight } from '@react-hook/window-size'
import { useIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import {
  Box,
  ClickAwayListener,
  Container,
  Hidden,
  IconButton,
  LinearProgress,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import {
  Facebook,
  Linkedin,
  SocialShareIcon,
  Twitter,
} from '../../components/SVGIcons'
import { useStyles } from './blogPost.styles'
import {
  BLOG_SLIDER_HEADING_AR,
  BLOG_SLIDER_HEADING_EN,
  TYPENAME,
} from '../../constants'
import {
  BlogAuthor,
  BlogHeroSection,
  BlogImage,
  BlogImageGallery,
  BlogPoll,
  BlogQuotedText,
  BlogSectionText,
  ColumnImage,
  ColumnText,
  ColumnTextandImage,
  RelatedBlogSlider,
} from '../../components'

const SHARE_ARTICLE_TEXT = 'Share this article'

export default function BlogPage({ data, ...props }) {
  const rootRef = useRef(null)
  const windowHeight = useWindowHeight()
  const scrollY = useScrollPosition(60)
  const [openTooltip, setOpenTooltip] = useState(false)
  const [progress, setProgress] = useState(0)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? props.window() : undefined,
  })
  const styles = useStyles({ trigger, openTooltip })
  const { locale } = useIntl()

  const shareLink = props.location.href

  const BLOG_HEIGHT = rootRef?.current?.offsetHeight - windowHeight

  const handleTooltipClose = () => {
    setOpenTooltip(false)
  }

  const handleTooltipToggle = () => {
    setOpenTooltip(!openTooltip)
  }

  useEffect(() => {
    setProgress((scrollY / BLOG_HEIGHT) * 100)
  }, [scrollY])

  const { allBlogs, blog } = data

  const typeMapping = {
    Contentful2ColumnTextImage: ColumnTextandImage,
    Contentful2ColumnText: ColumnText,
    ContentfulSectionText: BlogSectionText,
    Contentful2ColumnImage: ColumnImage,
    ContentfulImageAnimation: BlogImage,
    ContentfulStyledQuote: BlogQuotedText,
    ContentfulImageGallery: BlogImageGallery,
    ContentfulBlogPoll: BlogPoll,
  }
  const renderComponent = (item) => {
    if (typeof typeMapping[item[TYPENAME]] !== 'undefined') {
      return React.createElement(typeMapping[item[TYPENAME]], { data: item })
    }
    return undefined
  }

  return (
    <>
      <Box className={styles.socialShareBar}>
        <Container
          className={styles.socialShareContainer}
          disableGutters={true}
        >
          <Box className={styles.socialWrapper}>
            <Typography
              className={styles.socialBarTitle}
              variant="h4"
              disableGutters={true}
            >
              {blog.title}
            </Typography>
            <Hidden smDown>
              <Box className={styles.shareButtonsWrapper}>
                <Typography variant="body1">{SHARE_ARTICLE_TEXT}</Typography>
                <Box className={styles.mobileIconsWrapper}>
                  <FacebookShareButton url={shareLink}>
                    <Facebook />
                  </FacebookShareButton>
                  <LinkedinShareButton url={shareLink}>
                    <Linkedin />
                  </LinkedinShareButton>
                  <TwitterShareButton url={shareLink}>
                    <Twitter />
                  </TwitterShareButton>
                </Box>
              </Box>
            </Hidden>
            <Hidden mdUp>
              <Box className={styles.shareButtonsWrapper}>
                <Box>
                  <Box className={styles.socialShareButton}>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                      <Box>
                        <IconButton
                          className={styles.socialShareIcon}
                          onClick={handleTooltipToggle}
                        >
                          <SocialShareIcon />
                        </IconButton>
                        <Box className={styles.mobileTooltip}>
                          <Typography variant="body1">
                            {SHARE_ARTICLE_TEXT}
                          </Typography>
                          <Box className={styles.mobileIconsWrapper}>
                            <FacebookShareButton url={shareLink}>
                              <Facebook />
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareLink}>
                              <Linkedin />
                            </LinkedinShareButton>
                            <TwitterShareButton url={shareLink}>
                              <Twitter />
                            </TwitterShareButton>
                          </Box>
                        </Box>
                      </Box>
                    </ClickAwayListener>
                  </Box>
                </Box>
              </Box>
            </Hidden>
          </Box>
        </Container>
        <Box className={styles.progressBarWrapper}>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={progress}
            className={styles.progressBar}
          />
        </Box>
      </Box>
      <Box ref={rootRef}>
        <BlogHeroSection item={blog} />
        <Container maxWidth="lg">
          <Box className={styles.blogSectionsRoot}>
            {blog.content.map((item) => renderComponent(item))}
            {blog.author && <BlogAuthor data={blog} />}
          </Box>
        </Container>
        <RelatedBlogSlider
          blogs={allBlogs.nodes}
          heading={
            locale === 'en' ? BLOG_SLIDER_HEADING_EN : BLOG_SLIDER_HEADING_AR
          }
        />
      </Box>
    </>
  )
}

export const query = graphql`
  query BlogDetails($blogPost: String, $locale: String, $categoryName: String) {
    allBlogs: allContentfulBlogPost(
      filter: {
        blogCategories: { elemMatch: { categoryName: { eq: $categoryName } } }
      }
    ) {
      nodes {
        title
        slug
        publishDate
        minRead
        heroImage {
          file {
            url
          }
        }
        blogCategories {
          categoryName
        }
      }
    }
    blog: contentfulBlogPost(
      slug: { eq: $blogPost }
      node_locale: { eq: $locale }
    ) {
      slug
      title
      featured
      publishDate
      minRead
      author {
        name
        profileDetail
        image {
          image {
            file {
              url
            }
          }
        }
      }
      heroImage {
        file {
          url
        }
      }
      blogCategories {
        categoryName
      }
      content {
        ... on Contentful2ColumnImage {
          id
          leftImage {
            file {
              url
            }
          }
          rightImage {
            file {
              url
            }
          }
        }
        ... on ContentfulImageAnimation {
          image {
            file {
              url
              contentType
            }
          }
        }
        ... on Contentful2ColumnText {
          id
          rightText {
            raw
          }
          leftText {
            raw
          }
        }
        ... on Contentful2ColumnTextImage {
          id
          text {
            raw
          }
          colImage {
            file {
              url
            }
          }
          imagetoLeft
        }
        ... on ContentfulImageGallery {
          id
          galleryTitle
          galleryImages {
            image {
              file {
                url
              }
            }
          }
        }
        ... on ContentfulBlogPoll {
          id
          pollLink
        }
        ... on ContentfulSectionText {
          id
          sectionText {
            raw
          }
        }
        ... on ContentfulStyledQuote {
          id
          quoteText {
            raw
          }
        }
      }
    }
    header: contentfulHeader(node_locale: { eq: $locale }) {
      ...headerFragment
    }
    footer: contentfulFooter(node_locale: { eq: $locale }) {
      ...footerFragment
    }
    waitingList: contentfulCtaSection(node_locale: { eq: $locale }) {
      ...waitingListFragment
    }
    page: contentfulPage(
      slug: { eq: $blogPost }
      node_locale: { eq: $locale }
    ) {
      feature: pageSection {
        ...homeFragment
      }
      metaDescription
      metaTag
      title
      slug
    }
  }
`
