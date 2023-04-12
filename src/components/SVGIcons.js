/* eslint max-len: ["error", { "ignoreStrings": true }] */
import React from 'react'
import Facebook from '../assets/svg/facebook.svg'
import Instagram from '../assets/svg/instagram.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import LogoAr from '../assets/svg/logo_AR.svg'
import LogoEn from '../assets/svg/logo_EN.svg'
import Twitter from '../assets/svg/twitter.svg'
import IPhoneLarge from '../assets/svg/iPhone-large.svg'
import IPhoneSmall from '../assets/svg/iPhone-small.svg'
import LoadingSpinnerIcon from '../assets/svg/loading.svg'
import SocialShareIcon from '../assets/svg/social-share.svg'

// Icon shapes for passing SVG as child to SVGIcon
const ICON_SHAPES = {
  hamburger: (
    <path
      d="M24 0L24 3 0 3 0 0zM24 20L24 23 0 23 0 20zM24 10L24 13 0 13 0 10z"
      transform="translate(-16 -19) translate(16 15) translate(0 4)"
    />
  ),
  close: (
    <path
      d="M16.265 0.293L17.679 1.707 10.4 8.986 17.679 16.265 16.265 17.679 8.986 10.4 1.707 17.679 0.293 16.265 7.571 8.986 0.293 1.707 1.707 0.293 8.986 7.571z"
      transform="translate(-26 -114) translate(27 115)"
    />
  ),
}
export {
  ICON_SHAPES,
  LogoEn,
  LogoAr,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  IPhoneLarge,
  IPhoneSmall,
  LoadingSpinnerIcon,
  SocialShareIcon,
}
