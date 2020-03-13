import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'

import EquipmentCard from './EquipmentCard'

const EquipmentCards = () => {
  const { products } = useContext(MainContext)
  const equipmentList = products[0].map((product, index) => (
    <EquipmentCard product={product} key={index} />
  ))

  return <div className="equipment__cards">{equipmentList}</div>
}

export default EquipmentCards
