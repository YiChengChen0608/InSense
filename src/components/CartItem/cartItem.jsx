import React from "react";
import { connect } from "react-redux";
import "./cartItem.scss";

import { removeItem } from "../../Redux/cart/cartAction";

const CartItem = ({ cartItem: { itemimg, itemName, itemPrice, quantity } }) => {
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
