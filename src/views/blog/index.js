import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CachedIcon from '@material-ui/icons/Cached'
import { useStyles } from './blog.styles'
import { categorySorting } from '../../utils/sorting'
import { contentfulArrayToObject } from '../../utils/cms'
import {
  BlogItem,
  BlogSearchPlaceholder,
  BlogSlider,
  FadeTransition,
  TabPanel,
} from '../../components'

const LOADING_STEP_SIZE = 6

const BlogPage = ({ data }) => {
  const blogs = data.blogs.nodes
  const {
    ContentfulFormField: searchInput,
    ContentfulImageAnimation: [
      {
        image: {
          file: { url: searchInputImage },
        },
      },
      { image: searchPlaceholder },
    ],
    ContentfulSectionHeading: [
      { sectionHeadings: blogHeading },
      { sectionHeadings: allBlogsTab },
      { sectionHeadings: blogTabs },
      { sectionHeadings: latestPosts },
      { sectionHeadings: articlesNotFound },
      { sectionHeadings: tryDifferentKeyword },
      { sectionHeadings: loadMore },
    ],
  } = contentfulArrayToObject(data.feature)
  const styles = useStyles({ searchInputImage })
  const mainBlogContainer = useRef(null)
  const [searchValue, setSearchValue] = useState('')
  const [blogTabsHeading, setBlogTabsHeading] = useState(latestPosts)
  const [tabIndex, setTabIndex] = useState(0)
  const [allBlogs, setAllBlogs] = useState(blogs)
  const { sortedCategories } = categorySorting(blogs)
  const [searchableCategories, setSearchableCategories] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [sizeLimit, setSizeLimit] = useState(LOADING_STEP_SIZE)
  const categorizedTabsContent =
    sortedCategories[Object.keys(sortedCategories)[tabIndex - 1]] || []
  const [mobileTabButtonText, setMobileTabButtonText] = useState(allBlogsTab)
  const [drawerToggle, setDrawerToggle] = React.useState(false)

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerToggle(isOpen)
  }

  const foundArticle = (articlesLength, searchQuery) => {
    return `Found ${articlesLength} Article for ${searchQuery}`
  }

  const handleChange = (event, newIndex) => {
    setSizeLimit(LOADING_STEP_SIZE)
    setTabIndex(newIndex)
    setCategoryName(event.target.innerText.toLowerCase().toString())
    setMobileTabButtonText(event.target.innerText.toUpperCase().toString())
    mainBlogContainer.current.scrollIntoView({ behavior: 'smooth' })
    setSearchValue('')
    setBlogTabsHeading(latestPosts)
  }

  const blurHandler = () => {
    setSearchValue('')
    setAllBlogs(blogs)
    setSearchableCategories(categorizedTabsContent)
    setSizeLimit(LOADING_STEP_SIZE)
    setBlogTabsHeading(latestPosts)
  }

  const blogSearch = (event) => {
    setSearchValue(event.target.value)
    mainBlogContainer.current.scrollIntoView({ behavior: 'smooth' })

    if (tabIndex === 0) {
      const filteredList = blogs.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
      setAllBlogs(filteredList)
      setBlogTabsHeading(
        event.target.value.length < 1
          ? latestPosts
          : foundArticle(filteredList.length, event.target.value),
      )
    } else {
      const filteredListbyCategories = categorizedTabsContent.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
      setSearchableCategories(filteredListbyCategories)
      setBlogTabsHeading(
        event.target.value.length < 1
          ? latestPosts
          : foundArticle(filteredListbyCategories.length, event.target.value),
      )
    }
  }

  useEffect(() => {
    setSearchableCategories(categorizedTabsContent)
  }, [tabIndex])

  return (
    <Box>
      <BlogSlider blogs={blogs} heading={blogHeading} />
      <Box className={styles.tabsContainer}>
        <Container maxWidth="lg" className={styles.tabsInputContainer}>
          <Hidden smDown>
            <Tabs
              className={styles.tabsRoot}
              value={tabIndex}
              onChange={handleChange}
              aria-label={blogTabs}
            >
              <Tab label={allBlogsTab} />
              {Object.keys(sortedCategories).map((item, index) => (
                <Tab label={item} key={`tab-${index}`} />
              ))}
            </Tabs>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={styles.blogsTabsButton}
              onClick={toggleDrawer(!drawerToggle)}
            >
              <Button className={styles.mobileToggleButton}>
                {mobileTabButtonText}
              </Button>
              <Box className={styles.expandIcon}>
                {drawerToggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Box>
            </IconButton>
            <Drawer
              anchor="bottom"
              open={drawerToggle}
              onClose={toggleDrawer(false)}
              className={styles.navigationDrawer}
              onClick={toggleDrawer(false)}
            >
              <Tabs
                className={styles.mobileTabsRoot}
                value={tabIndex}
                onChange={handleChange}
                aria-label={blogTabs}
              >
                <Tab label={allBlogsTab} />
                {Object.keys(sortedCategories).map((item, index) => (
                  <Tab label={item} key={`tab-${index}`} />
                ))}
              </Tabs>
            </Drawer>
          </Hidden>
          <Box className={styles.searchInput}>
            <Box
              component="input"
              type="text"
              value={searchValue}
              placeholder={searchInput.placeholderText}
              onChange={blogSearch}
              onBlur={blurHandler}
            />
          </Box>
        </Container>
      </Box>
      <Container
        ref={mainBlogContainer}
        maxWidth="lg"
        className={styles.mainContainer}
      >
        <TabPanel value={tabIndex} index={tabIndex}>
          <FadeTransition key={tabIndex}>
            <Grid container className={styles.blogGridContainer}>
              {tabIndex === 0 && (
                <>
                  {allBlogs.length === 0 ? (
                    <BlogSearchPlaceholder
                      articlesNotFound={articlesNotFound}
                      searchQuery={searchValue}
                      tryDifferentKeyword={tryDifferentKeyword}
                      searchPlaceholder={searchPlaceholder}
                    />
                  ) : (
                    <>
                      {allBlogs.length > 0 && (
                        <Grid
                          item
                          xs={12}
                          className={styles.latestBlogsHeading}
                        >
                          <Typography variant="h1">
                            {blogTabsHeading}
                          </Typography>
                        </Grid>
                      )}
                      {allBlogs.map(
                        (item, index) =>
                          index < sizeLimit && (
                            <Grid
                              key={`all-item-${index}`}
                              item
                              md={6}
                              className={styles.blogItem}
                            >
                              <BlogItem blogItem={item} />
                            </Grid>
                          ),
                      )}
                    </>
                  )}
                  {sizeLimit < allBlogs.length && (
                    <Box className={styles.loadMoreButtonWrapper}>
                      <Button
                        className={styles.loadMoreButton}
                        onClick={() =>
                          setSizeLimit(sizeLimit + LOADING_STEP_SIZE)
                        }
                      >
                        <CachedIcon className={styles.lodeMoreIcon} />
                        <Box component="span" className={styles.lodeMoreText}>
                          {loadMore}
                        </Box>
                      </Button>
                    </Box>
                  )}
                </>
              )}
              {tabIndex > 0 &&
                (searchableCategories.length === 0 ? (
                  <BlogSearchPlaceholder
                    articlesNotFound={articlesNotFound}
                    searchQuery={searchValue}
                    tryDifferentKeyword={tryDifferentKeyword}
                    searchPlaceholder={searchPlaceholder}
                  />
                ) : (
                  <>
                    {searchableCategories.length > 0 && (
                      <Grid item xs={12} className={styles.latestBlogsHeading}>
                        <Typography variant="h1">{blogTabsHeading}</Typography>
                      </Grid>
                    )}
                    {searchableCategories.map(
                      (item, index) =>
                        index < sizeLimit && (
                          <>
                            <Grid item md={6} className={styles.blogItem}>
                              <BlogItem
                                blogItem={item}
                                categoryName={categoryName}
                              />
                            </Grid>
                          </>
                        ),
                    )}
                  </>
                ))}
            </Grid>
          </FadeTransition>

          {/* Load More button if there are more blogs */}
          {sizeLimit < searchableCategories.length && (
            <Button
              className={styles.loadMoreButton}
              onClick={() => setSizeLimit(sizeLimit + LOADING_STEP_SIZE)}
            >
              <CachedIcon className={styles.lodeMoreIcon} />
              <Box component="span" className={styles.lodeMoreText}>
                {loadMore}
              </Box>
            </Button>
          )}
        </TabPanel>
      </Container>
    </Box>
  )
}

export default BlogPage
