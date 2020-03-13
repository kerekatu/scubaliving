import React from 'react'
import { Link } from 'react-router-dom'

const TripsCard = ({ trip }) => (
  <Link to={`/trips/${trip.tripId}`} className="trips__card">
    <img
      src={trip.tripImg}
      alt={`Trip ${trip.tripId}`}
      className="trips__img"
    />
    <div className="trips__text">
      <h3 className="heading-2">{trip.tripTitle}</h3>
      <span className="paragraph">{trip.tripDescription}</span>
    </div>
  </Link>
)
export default TripsCard
