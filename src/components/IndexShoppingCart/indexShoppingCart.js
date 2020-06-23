import React, { useState, useEffect } from 'react'
import './indexShoppingCart.scss'
import IndexShoppingCartItem from '../IndexShoppingCartItem/indexShoppingCartItem'

const cartItem = [
  {
    id: 1,
    imgName: 'P0001',
    brand: 'Byredo',
    name: 'Slow Dance 詩性既視淡香精',
    size: '50ml',
    qty: 3,
    price: 4400,
  },
  {
    id: 2,
    imgName: 'P0002',
    brand: 'Byredo',
    name: 'Slow Dance 詩性既視淡香精',
    size: '50ml',
    qty: 3,
    price: 4400,
  },
  {
    id: 3,
    imgName: 'P0003',
    brand: 'Byredo',
    name: 'Slow Dance 詩性既視淡香精',
    size: '50ml',
    qty: 4,
    price: 4400,
  },
  {
    id: 4,
    imgName: 'P0004',
    brand: 'Byredo',
    name: 'Slow Dance 詩性既視淡香精',
    size: '50ml',
    qty: 5,
    price: 4400,
  }
]


const IndexShoppingCart = () => {
  let total = 0
  const [newCartItem, setNewCartItem] = useState(cartItem)

  const remove = (id) => {
    let index = newCartItem.findIndex(item => item.id === id)
    if (index !== -1) {
      const newArray = [...newCartItem]
      newArray.splice(index, 1)
      setNewCartItem(newArray)
    }
  }

  return (
    <div className='index-shopping-cart-container d-flex flex-direction-column align-items-center' >
      <p className='index-shopping-cart-title'>購物車</p>
      <div className='index-shopping-cart-content'>
        {newCartItem ? newCartItem.map((info, index) => <IndexShoppingCartItem key={index} info={info} remove={remove} />) : <p className='text-center'>no items</p>}
      </div>
      <div className="d-flex total-container">
        <p>總價</p>
        {newCartItem.forEach(info => total += info.qty * info.price)}
        <p>{total}</p>
      </div>
      <a className='text-center buy-link' role='button'>確認購買</a>
    </div >
  )
}

export default IndexShoppingCart