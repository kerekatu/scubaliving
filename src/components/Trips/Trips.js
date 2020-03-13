import React from 'react'
import { Link } from 'react-router-dom'

import HeadingTitle from '../HeadingTitle'
import TripsCards from './TripsCards'

const Trips = () => {
  return (
    <section className="trips">
      <HeadingTitle headingText="Dyk ud i verden" headingType="headingTwo" />
      <TripsCards />
      <Link to="/trips" className="link">
        <HeadingTitle
          headingText="Se flere destinationer og muligheder her!"
          headingType="headingOne"
        />
      </Link>
    </section>
  )
}

export default Trips
