import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/cartItem";
import SubmitButton from "../SubmitButton/submitButton";
import "./cartDropdown.scss";
import { toggleCartHidden } from '../../Redux/cart/cartAction'
import { bindActionCreators } from "redux";



const CartDropdwon = ({ cartItems, toggleCartHidden }) => (

  <div className="cart-dropdown">
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { toggleCartHidden },
    dispatch
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(CartDropdwon);
