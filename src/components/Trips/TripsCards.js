import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'

import TripsCard from './TripsCard'

const TripsCards = () => {
  const { trips } = useContext(MainContext)
  const tripsList = trips[0].map((trip, index) => (
    <TripsCard trip={trip} key={index} />
  ))

  return <div className="trips__cards">{tripsList}</div>
}

export default TripsCards
