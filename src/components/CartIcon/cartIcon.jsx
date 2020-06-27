import React from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import './cartIcon.scss';

import {connect} from 'react-redux'; 
import { toggleCartHidden} from '../../Redux/cart/cartAction'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <FiShoppingCart className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

//get the dispatch
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
  null,
  mapDispatchToProps
)(CartIcon);