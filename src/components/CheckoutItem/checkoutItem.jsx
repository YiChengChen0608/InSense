import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/cart/cartAction";

import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { itemName, itemimg, itemPrice, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={itemimg} alt="item" />
      </div>
      <span className="name">{itemName}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{itemPrice}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

// export default CheckoutItem;

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
