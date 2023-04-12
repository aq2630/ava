import NeuzeitGroBlack from './English/NeuzeitGro-Bla.woff'
import NeuzeutGroBold from './English/NeuzeitGro-Bol.woff'
import NeuzeutGroLight from './English/NeuzeitGro-Lig.woff'
import NeuzeutGroRegular from './English/NeuzeitGro-Reg.woff'

import SSTArabicBlack from './Arabic/SSTArabic-Bold.otf'
import SSTArabicBold from './Arabic/SSTArabic-Medium.otf'
import SSTArabicLight from './Arabic/SSTArabic-Light.otf'
import SSTArabicRegular from './Arabic/SSTArabic-Roman.otf'

const sstArabicBlack = {
  fontFamily: 'SSTArabic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '700',
  src: `url(${SSTArabicBlack}) format('opentype')` /* Pretty Modern Browsers */,
}

const sstArabicLight = {
  fontFamily: 'SSTArabic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '300',
  src: `url(${SSTArabicLight}) format('opentype')` /* Pretty Modern Browsers */,
}

const sstArabicRegular = {
  fontFamily: 'SSTArabic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `url(${SSTArabicRegular}) format('opentype')` /* Pretty Modern Browsers */,
}

const sstArabicGroBold = {
  fontFamily: 'SSTArabic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '500',
  src: `url(${SSTArabicBold}) format('opentype')` /* Pretty Modern Browsers */,
}

const neuzeitGroBlack = {
  fontFamily: 'NeuzeitGro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '700',
  src: `url(${NeuzeitGroBlack}) format('woff2')` /* Pretty Modern Browsers */,
}

const neuzeitGroLight = {
  fontFamily: 'NeuzeitGro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '300',
  src: `url(${NeuzeutGroLight}) format('woff2')` /* Pretty Modern Browsers */,
}

const neuzeitGroRegular = {
  fontFamily: 'NeuzeitGro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `url(${NeuzeutGroRegular}) format('woff2')` /* Pretty Modern Browsers */,
}

const neuzeitGroBold = {
  fontFamily: 'NeuzeitGro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '500',
  src: `url(${NeuzeutGroBold}) format('woff2')` /* Pretty Modern Browsers */,
}

export const englishFontFace = [
  neuzeitGroBlack,
  neuzeitGroLight,
  neuzeitGroRegular,
  neuzeitGroBold,
]
export const arabicFontFace = [
  sstArabicLight,
  sstArabicRegular,
  sstArabicGroBold,
  sstArabicBlack,
]
