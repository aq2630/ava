import React from 'react'
import { Box, Hidden, Typography } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { useStyles } from './SideMenu.style'
import Image from '../Image'

const NAV_HEIGHT = 6.4

const SideMenu = ({
  miniSlashPath,
  sideMenuItem,
  headingPrefix,
  slashRef,
  navHeight = NAV_HEIGHT,
  activeSideMenuIndex,
}) => {
  const styles = useStyles({ activeSideMenuIndex, navHeight })

  return (
    <Hidden smDown>
      <Box className={styles.root}>
        <div className={styles.sideMenu}>
          <div ref={slashRef} className={styles.miniSlash}>
            <Image
              file={{ url: miniSlashPath }}
              className={styles.miniSlashImage}
            />
          </div>
          {sideMenuItem?.map((item, index) => {
            return (
              <Typography
                key={index}
                variant="body1"
                onClick={() => scrollTo(`#${headingPrefix}-heading-${index}`)}
                className={
                  activeSideMenuIndex === index
                    ? [styles.boldText, styles.sidebarHeading].join(' ')
                    : styles.sidebarHeading
                }
              >
                {item.faqHeading || item.priceHeading}
              </Typography>
            )
          })}
        </div>
      </Box>
    </Hidden>
  )
}

export default SideMenu
