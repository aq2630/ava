/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from './Link'
import Image from './Image'

const SocialIcons = ({ socialLinks, isJoinUsSocials }) => {
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof window !== 'undefined' && navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('safari') !== -1) {
      if (userAgent.indexOf('chrome') > -1) {
        setIsSafari(false)
      } else {
        setIsSafari(true)
      }
    }
  }, [])

  const styles = useStyles({ isJoinUsSocials, isSafari })

  return (
    <Box className={styles.socialIconsRoot}>
      {socialLinks?.map((social) => {
        return (
          <Link
            id={`social-link-${social.title}`}
            key={`social-link-${social.title}`}
            isExternal={true}
            to={social.link}
            className={styles.socialIconButton}
          >
            <Image className={styles.socialIcon} {...social.icon} />
          </Link>
        )
      })}
    </Box>
  )
}

export default SocialIcons

const useStyles = makeStyles((theme) => ({
  socialIconsRoot: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  socialIconButton: ({ isJoinUsSocials }) => ({
    padding: theme.spacing(1.25),
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: isJoinUsSocials
      ? theme.palette.secondary.main
      : theme.palette.background.default,
    '&:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
    '&:before': {
      content: '""',
      height: '120%',
      width: '120%',
      background: theme.palette.primary.main,
      position: 'absolute',
      top: '90%',
      left: '-110%',
      transform: 'rotate(45deg)',
      transition: 'all 0.3s',
    },
    '&:hover:before': {
      transform: ({ isSafari }) => isSafari && 'scale(0.84)',
      borderRadius: ({ isSafari }) => isSafari && '50%',
      left: '-10%',
      top: '-10%',
    },
    '&:hover $socialIcon': {
      transform: 'scale(1.3)',
    },
  }),
  socialIcon: ({ isJoinUsSocials }) => ({
    width: '20px',
    height: '20px',
    transition: 'all 0.3s',
    filter: isJoinUsSocials ? 'invert(1)' : 'none',
  }),
}))
