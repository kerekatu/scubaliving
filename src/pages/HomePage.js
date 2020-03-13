import React from 'react'

import Hero from '../components/Hero/Hero'
import Equipment from '../components/Equipment/Equipment'
import Trips from '../components/Trips/Trips'
import Courses from '../components/Courses/Courses'

const HomePage = () => {
  return (
    <main className="home container">
      <Hero />
      <Equipment />
      <Trips />
      <Courses />
    </main>
  )
}

export default HomePage
