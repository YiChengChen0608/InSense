import React from "react";
import "./itemInfo.scss";
import SavedItems from "../SavedItems/savedItems";
import ItemAddCart from "../ItemAddCart/itemAddCart";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/cart/cartAction";

import {
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
} from "../../Redux/cart/cartSelectors";

const ItemInfo = (props) => {
  return (
    <>
      <div className="item-info-container">
        <div className="item-info">
          <div className="item-info-head d-flex">
            <h2 className="item-title">{props.itemName}</h2>
            <div className="btn-saved position-absolute">
              <SavedItems
                className="saved-icon"
                itemId={props.itemId}
                wish={props.wish}
              // itemWishList={props.itemWishList}
              // setitemWishList={props.setitemWishList}
              />
            </div>
          </div>
          <div className="size-label-container">
            <h3 className="size-label">{props.itemSize}</h3>
          </div>
          <div className="price-wrapper">
            <h3 className="item-price">NT$ {props.itemPrice}</h3>
          </div>
          <ItemAddCart
            itemId={props.itemId}
            itemName={props.itemName}
            itemPrice={props.itemPrice}
            itemimg={props.itemimg}
          />
          <div className="item-discription-container">
            <p className="item-discription">{props.itemDiscription}</p>
            <p className="item-fragance">{props.fragranceDiscription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  userSelect: selectUserLogin,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemInfo)
);
