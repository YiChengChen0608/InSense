import React from "react";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cartSelectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="title">購物車</div>
    <div className="checkout-header">
      <div className="header-block">
        <span>商品</span>
      </div>
      <div className="header-block">
        <span>商品名稱</span>
      </div>
      <div className="header-block">
        <span>數量</span>
      </div>
      <div className="header-block">
        <span>價格</span>
      </div>
      <div className="header-block">
        <span>小計</span>
      </div>
      <div className="header-block">
        <span>刪除</span>
      </div>
    </div>
    {/* {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))} */}
    <div className="total">總計: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
