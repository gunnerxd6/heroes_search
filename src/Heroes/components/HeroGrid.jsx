import React from 'react'
import { HeroCard } from './HeroCard'

export const HeroGrid = ({heroes}) => {
  return (
    <div className="row">
        {heroes.map((hero) => (
          <HeroCard hero={hero}/>
        ))}
      </div>
  )
}
