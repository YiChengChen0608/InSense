import React from 'react'
import './orderProductCard.scss'
const OrderProductCard = ({ itemName, itemId, itemSize, quantity, itemPrice, itemImg }) => {
  return (
    <div className='d-flex justify-content-center align-items-center order-detail-product-card'>
      <figure>
        <img src={itemImg} />
      </figure>
      <ul>
        <li>
          {itemName}<br />
          {itemId}<br />
          {itemSize}
        </li>
      </ul>
      <p>{quantity}</p>
      <p>NT$ {itemPrice}</p>
      <p>NT$ {quantity * itemPrice}</p>
    </div>
  )
}

export default OrderProductCard

