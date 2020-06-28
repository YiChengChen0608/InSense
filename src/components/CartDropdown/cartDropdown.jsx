import React, { useState } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/cartItem";
import SubmitButton from "../SubmitButton/submitButton";
import "./cartDropdown.scss";
import {
  FiX,
} from "react-icons/fi";
import { bindActionCreators } from "redux";
import { toggleCartHidden } from '../../Redux/cart/cartAction'

const CartDropdwon = ({ cartItems, hidden, toggleCartHidden }) => {
  return (
    <div className={`cart-dropdown ${hidden ? 'right-open' : ''}`}>
      <span onClick={() => toggleCartHidden()}>
        <FiX />
      </span>
      <div className="cart-items">
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.itemId} cartItem={cartItem} />
            ))}
          </>
        ) : (
            <span className="empty-message">購物車現在太空囉</span>
          )}
      </div>
      <SubmitButton inverted={true}>結帳</SubmitButton>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartItems, hidden } }) => ({
  cartItems, hidden
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { toggleCartHidden },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdwon);
