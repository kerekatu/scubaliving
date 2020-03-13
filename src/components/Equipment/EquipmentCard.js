import React from 'react'
import { Link } from 'react-router-dom'

const EquipmentCard = ({ product }) => (
  <Link to={`/equipment/${product.productId}`} className="equipment__card">
    <img
      src={product.productImg}
      alt={`Product ${product.productId}`}
      className="equipment__img"
    />
    <h3 className="heading-3">{product.productTitle}</h3>
    <span className="detail">{product.productPrice}</span>
  </Link>
)

export default EquipmentCard
