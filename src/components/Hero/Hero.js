import React from 'react'

import heroImg from '../../../public/images/scuba.jpg'

import HeroTitle from './HeroTitle'

const Hero = () => (
  <section className="hero">
    <HeroTitle />
    <img src={heroImg} alt="Hero" className="hero__img" />
  </section>
)

export default Hero
