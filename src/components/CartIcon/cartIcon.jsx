import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import './cartIcon.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <FiShoppingCart className='shopping-icon' />
    <span className='item-count'>10</span>
  </div>
);

export default CartIcon;