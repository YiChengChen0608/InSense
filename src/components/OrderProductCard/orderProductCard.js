import React from 'react'
import './orderProductCard.scss'
const OrderProductCard = ({ brand, itemName, itemId, itemSize, quantity, itemPrice, itemImg }) => {
  return (
    <div className='d-flex justify-content-center align-items-center order-detail-product-card'>
      <figure>
        <img src={itemImg} />
      </figure>
      <ul>
        <li>
          {brand}<br />
          {itemName}<br />
          {itemId}<br />
          {itemSize}
        </li>
      </ul>
      <p>{quantity}</p>
      <p>{itemPrice}</p>
      <p>{quantity * itemPrice}</p>
    </div>
  )
}

export default OrderProductCard

