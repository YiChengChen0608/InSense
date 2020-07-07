import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/cartItem";
import "./cartDropdown.scss";
import { FiX } from "react-icons/fi";
import { bindActionCreators } from "redux";
import { toggleCartHidden } from "../../Redux/cart/cartAction";

import {
  selectCartItems,
  selectCartHidden,
} from "../../Redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const CartDropdwon = ({ cartItems, hidden, toggleCartHidden, history }) => {
  return (
    <div className={`cart-dropdown ${hidden ? "right-open" : ""}`}>
      <span onClick={() => toggleCartHidden()}>
        <FiX />
      </span>
      <div className="cart-items">
        <div className="dropdown-header">購物車</div>
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.itemId} cartItem={cartItem} />
            ))}
          </>
        ) : (
          <span className="empty-message">購物車現在太空囉~</span>
        )}
      </div>
      <div className="cart-button">
        <Button
          className="MuiButtonBase-root MuiButton-root MuiButton-outlined success-alert"
          tabindex="0"
          type="button"
          onClick={() => {
            history.push("/orders/checkout");
          }}
        >
          <span className="MuiButton-label">前往購物車</span>
          <span className="MuiTouchRipple-root"></span>
        </Button>
      </div>
    </div>
  );
};

//6/29
// const mapStateToProps = ({ cart: { cartItems, hidden } }) => ({
//   cartItems, hidden
// });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCartHidden }, dispatch);
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdwon)
);

// export default connect(mapStateToProps, mapDispatchToProps)(CartDropdwon);
