import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './indexShoppingCartItem.scss'
const IndexShoppingCartItem = ({ info }) => {
  const [removeItem, setRemoveItem] = useState(false)
  return (
    <>
      {
        removeItem ? '' : <Link to='/classlist' >
          <div className='d-flex cart-item-card'>
            <figure>
              <img src={`/images/items/${info.imgName}.png`} />
            </figure>
            <div className='cart-item-card-info'>
              <h3>{info.brand}</h3>
              <p className='cart-item-card-name'>{info.name}</p>
              <div className='d-flex align-items-center cart-size-item'>
                <p>{info.size}</p>
                <a onClick={(e) => (console.log(e.currentTarget), e.preventDefault(), setRemoveItem(true))}>remove</a>
              </div>
              <p>{info.qty} x NT ${info.price}</p>
            </div>
          </div>
        </Link>
      }
    </>
  )
}

export default IndexShoppingCartItem