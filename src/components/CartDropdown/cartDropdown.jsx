import React from 'react';

import SubmitButton from '../SubmitButton/submitButton';
import './cartDropdown.scss';

const CartDropdwon = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <SubmitButton inverted={true}>結帳</SubmitButton>
  </div>
)

export default CartDropdwon;

