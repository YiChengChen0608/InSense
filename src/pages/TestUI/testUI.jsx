import React from "react";
import "./testUI.scss";
import FormSignIn from "../../components/FormSignIn/FormSignIn ";
import SubmitButton from "../../components/SubmitButton/submitButton";
import CartIcon from "../../components/CartIcon/cartIcon";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { clearCart } from "../../Redux/cart/cartAction";
import {
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
} from "../../Redux/cart/cartSelectors";

const TestUI = (item, quantity, clearCart) => (
  <div className="SignIn-page">
    <h2>Input UI 測試頁面</h2>
    <FormSignIn />
    <SubmitButton type="submit" value="Submit Form">
      {" "}
      送出
    </SubmitButton>
    <CartIcon style={{ color: "white" }} />
    <button onClick={() => clearCart(item, quantity)}></button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  userSelect: selectUserLogin,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: (item, quantity) => dispatch(clearCart(item, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestUI);
