import React from 'react'
import { Link } from 'react-router-dom'

import HeadingTitle from '../HeadingTitle'
import EquipmentCards from './EquipmentCards'

const Equipment = () => {
  return (
    <section className="equipment">
      <HeadingTitle
        headingText="Mest Populære Dykkerudstyr"
        headingType="headingTwo"
      />
      <EquipmentCards />
      <Link to="/equipment" className="link">
        <HeadingTitle
          headingText="Se mere lækkert udstyr her!"
          headingType="headingOne"
        />
      </Link>
    </section>
  )
}

export default Equipment
