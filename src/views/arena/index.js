import React from 'react'
import { HeroSection } from '../../components'
import { useHeroStyles } from './arena.styles'

// markup
const ArenaPage = ({ t, data = {} }) => {
  const { hero } = data
  return (
    <main>
      {hero && (
        <HeroSection
          t={t}
          fullWidth={true}
          {...hero}
          useCustomStyles={useHeroStyles}
        />
      )}
    </main>
  )
}

export default ArenaPage
