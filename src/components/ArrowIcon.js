import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const ArrowIcon = ({ direction, locale }) => {
  if (locale === 'ar') {
    if (direction === 'forward') {
      return <ArrowBackIcon />
    }
    return <ArrowForwardIcon />
  }
  if (direction === 'forward') {
    return <ArrowForwardIcon />
  }
  return <ArrowBackIcon />
}

export default ArrowIcon
