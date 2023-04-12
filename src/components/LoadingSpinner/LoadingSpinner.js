import React from 'react'
import { useStyles } from './LoadingSpinner.style'
import { LoadingSpinnerIcon } from '../SVGIcons'

const LoadingSpinner = () => {
  const styles = useStyles()

  return (
    <div className={styles.loadingIconImg}>
      <LoadingSpinnerIcon />
    </div>
  )
}

export default LoadingSpinner
