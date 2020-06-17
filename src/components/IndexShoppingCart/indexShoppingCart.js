import React from 'react'
import './indexShoppingCart.scss'

const IndexShoppingCart = () => {
  return (
    <div className='index-shopping-cart-container'>
      <p className='index-shopping-cart-title'>購物車</p>
      <div className='index-shopping-cart-content'></div>
      <a role='button'>確認購買</a>
    </div>
  )
}

export default IndexShoppingCart