import {
  AppBar,
  Box,
  Container,
  Drawer,
  Hidden,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core'
import React from 'react'
import { LogoAr, LogoEn } from '../SVGIcons'
import { LANGUAGES, ROUTES } from '../../constants'
import Link from '../Link'
import WaitingListButton from '../WaitlistButton'
import { useStyles } from './Header.styles'
import Image from '../Image'

const Logo = ({ className, logoFromCMS, language = LANGUAGES.EN }) => {
  if (logoFromCMS)
    return (
      <Link to={`${ROUTES.HOME.to}`} className={className}>
        <Image {...logoFromCMS} />
      </Link>
    )
  return language === LANGUAGES.AR ? (
    <LogoAr className={className} />
  ) : (
    <LogoEn className={className} />
  )
}

const NavigationMenu = ({
  t,
  styles,
  language,
  toggleDrawer,
  drawerToggle,
  navigationLinksDesktop = [],
  navigationLinksMobile = [],
  ...rest
}) => {
  const showDesktopMenu = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const isCurrentLanguage = (lang = LANGUAGES.EN) => lang === language
  const props = {
    className: [styles.headerText, styles.link, styles.menuItem].join(' '),
    activeStyle: {
      borderBottom: `2px solid`,
      '&::after': {
        transform: 'scaleX(0)',
      },
    },
  }
  const renderList = showDesktopMenu ? (
    <>
      {navigationLinksDesktop.map((route) => (
        <Link
          key={`nav-link-${`${route.title}`.split(' ').join('-')}`}
          id={`nav-link-${`${route.title}`.split(' ').join('-')}`}
          to={route.link}
          isExternal={route.isExternal}
          {...props}
        >
          {route.title}
        </Link>
      ))}
    </>
  ) : (
    <Hidden mdUp>
      {navigationLinksMobile.map((route) => (
        <Link
          key={`nav-link-${`${route.title}`.split(' ').join('-')}`}
          id={`nav-link-${`${route.title}`.split(' ').join('-')}`}
          to={route.link}
          isExternal={route.isExternal}
          {...props}
        >
          {route.title}
        </Link>
      ))}
    </Hidden>
  )

  const renderLanguageSwitch = (
    <div className={styles.languageSwitcher}>
      {Object.values(LANGUAGES).map((lang) => {
        const currentPathName = rest.path
          .split('/')
          .slice(2)
          .join('/')

        return (
          <a
            key={`language-switch-${lang}${isCurrentLanguage(lang) &&
              '-active'}`}
            id={`language-switch-${lang}${isCurrentLanguage(lang) &&
              '-active'}`}
            className={[
              styles.headerLanguageLink,
              styles.headerText,
              !isCurrentLanguage(lang) ? styles.inactiveLanguage : '',
            ].join(' ')}
            href={`/${lang}/${currentPathName}`}
          >
            {t(lang)}
          </a>
        )
      })}
    </div>
  )

  return showDesktopMenu ? (
    <div className={styles.navigation}>
      {renderList} {renderLanguageSwitch}
    </div>
  ) : (
    <Drawer
      anchor="left"
      open={drawerToggle}
      onClose={toggleDrawer(false)}
      className={styles.navigationDrawer}
      onClick={toggleDrawer(false)}
    >
      <Toolbar />
      <div className={styles.navigation}>
        {renderList}
        {renderLanguageSwitch}
      </div>
    </Drawer>
  )
}

const Header = ({ t, data = {}, ...props }) => {
  const {
    logo,
    ctaDesktop: cta = {},
    navigationLinksDesktop = [],
    navigationLinksMobile = [],
  } = data
  const [drawerToggle, setDrawerToggle] = React.useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? props.window() : undefined,
  })
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerToggle(isOpen)
  }
  const styles = useStyles({ trigger, drawerToggle })
  return (
    <>
      <AppBar
        className={drawerToggle ? styles.appBarToggle : styles.appBar}
        elevation={0}
        color={'transparent'}
      >
        <Toolbar className={styles.toolbar} component={Container}>
          <Hidden mdUp>
            <Box
              aria-label="menu"
              onClick={toggleDrawer(!drawerToggle)}
              className={[
                styles.hamburgerWrapper,
                drawerToggle ? styles.rotateIcon : '',
              ].join(' ')}
            >
              <Box component="span" className={styles.hamburgerIcon}></Box>
            </Box>
          </Hidden>
          <Logo
            logoFromCMS={logo}
            className={styles.logo}
            language={props.language}
          />
          <NavigationMenu
            t={t}
            styles={styles}
            drawerToggle={drawerToggle}
            toggleDrawer={toggleDrawer}
            navigationLinksDesktop={navigationLinksDesktop}
            navigationLinksMobile={navigationLinksMobile}
            logo={logo}
            {...props}
          />
          <WaitingListButton
            color={trigger ? 'primary' : 'secondary'}
            title={cta.title}
            className={[
              styles.headerText,
              trigger ? styles.primaryButton : styles.squareButton,
              drawerToggle ? styles.hideElement : '',
            ].join(' ')}
          />
        </Toolbar>
      </AppBar>
      <Toolbar className={styles.toolbarOffset} />
    </>
  )
}

export default Header
