import React from 'react'
import { HeroInfo } from './HeroInfo'
import { PowerStatsInfo } from './PowerStatsInfo'

export const HeroCard = ({hero}) => {
  return (
    <div key={hero.id} className="col mt-2">
            <div className="card" style={{ width: '25rem' }}>
              <img src={hero.image} className="card-img-top" alt="..." width="400" height="500"/>
              <div className="card-body">
                <h4 className="card-title">{`${hero.name}/${hero.fullName}`}</h4>
                <div className="row">
                  <div className="col">
                    <HeroInfo hero={hero}/>
                  </div>
                  <div className="col">
                    <PowerStatsInfo hero={hero}/>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
  )
}
