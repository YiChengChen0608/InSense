import React from "react";
import { connect } from "react-redux";
import "./cartItem.scss";

import { clearItemFromCart } from "../../Redux/cart/cartAction";

const CartItem = ({ cartItem, clearItemFromCart }) => {
  const { itemName, itemimg, itemPrice, quantity } = cartItem;
  return (
    <div className="cart-item">
      <figure>
        <img src={itemimg} alt="item" />
      </figure>
      <div className="item-details">
        <span className="name">{itemName}</span>
        <span className="price">
          {quantity} x NT$ {itemPrice}
        </span>
        <a className="arrow" onClick={() => clearItemFromCart(cartItem)}>
          &#10005;
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
