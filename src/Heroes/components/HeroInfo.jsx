import React from 'react'

export const HeroInfo = ({hero}) => {
  return (
    <div>
        <ul>
                  <li>Gender: {hero.gender}</li>
                  <li>race: {hero.race}</li>
                  <li>Height: {hero.height[1]}</li>
                  <li>Weight: {hero.weight[1]}</li>
                  <li>Eye color: {hero.eyeColor}</li>
                  <li>Hair color: {hero.hairColor}</li>
                </ul>
    </div>
  )
}
