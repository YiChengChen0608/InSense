import React from 'react'
import './indexShoppingCart.scss'
import IndexShoppingCartItem from '../IndexShoppingCartItem/indexShoppingCartItem'

const IndexShoppingCart = ({ cartItem }) => {
  let total = 0
  return (
    <div className='index-shopping-cart-container d-flex flex-direction-column align-items-center'>
      <p className='index-shopping-cart-title'>購物車</p>
      <div className='index-shopping-cart-content'>
        {cartItem.map((info, index) => <IndexShoppingCartItem key={index} info={info} />)}
      </div>
      <div className="d-flex total-container">
        <p>總價</p>
        {cartItem.forEach(info => total += info.qty * info.price)}
        <p>{total}</p>
      </div>
      <a className='text-center buy-link' role='button'>確認購買</a>
    </div>
  )
}

export default IndexShoppingCart