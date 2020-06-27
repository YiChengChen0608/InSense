import React from 'react'
import './orderProductCard.scss'
const OrderProductCard = () => {
  return (
    <div className='d-flex justify-content-center align-items-center order-detail-product-card'>
      <figure>
        <img src='images/items/P0001.png' />
      </figure>
      <ul>
        <li>
          BYREDO<br />
          北國之春 淡香精<br />
          P00000<br />
          100ml
        </li>
      </ul>
      <p>1</p>
      <p>4800</p>
      <p>4800</p>
    </div>
  )
}

export default OrderProductCard

