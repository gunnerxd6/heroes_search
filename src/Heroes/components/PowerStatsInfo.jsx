import React from 'react'

export const PowerStatsInfo = ({hero}) => {
  return (
    <div>
        <h5>PowerStats</h5>
                    <div className="row">
                      <div className="col">
                        <h5>Intelligence</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: `${hero.powerstats.intelligence}%`}}></div>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Strength</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: `${hero.powerstats.strength}%`}}></div>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Speed</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{width: `${hero.powerstats.speed}%`}}></div>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Durability</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{width: `${hero.powerstats.durability}%`}}></div>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Power</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{width: `${hero.powerstats.power}%`}}></div>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Combat</h5>
                      </div>
                      <div className="col">
                      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: `${hero.powerstats.combat}%`}}></div>
                    </div>
                      </div>
                    </div>  
    </div>
  )
}
