import React from 'react'
import { Fade } from '@material-ui/core'

const FadeTransition = ({ children, location, key, ...props }) => {
  return (
    <Fade key={key} timeout={1500} in={true}>
      <main {...props}>{children}</main>
    </Fade>
  )
}

export default FadeTransition
