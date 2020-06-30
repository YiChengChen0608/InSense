import React from "react";
import "./itemCard.scss";
// import { withRouter } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import SavedItems from "../SavedItems/savedItems";
import SubmitButton from "../SubmitButton/submitButton";

import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cartAction";
// import { addItemToCart } from '../../Redux/cart/cartUtils';

const ItemCard = (props) => {
  const {
    name,
    itemName,
    itemimg,
    itemPrice,
    itemId,
    itemWishList,
    setitemWishList,
    addItem,
    wish,
  } = props;

  return (
    <>
      <div className="card-wrapper">
        <div className="card-img">
          <img src={itemimg} alt="" />
          <div className="item-button-container">
            <a className="cart-anchor" onClick={() => addItem(props)}>
              <FiShoppingCart className="cart-button" />
            </a>
          </div>
        </div>
        <div className="card-content d-flex justify-content-evenly align-items-center">
          <p className="card-name text-center">{itemName}</p>
        </div>
        <p className="card-price text-center">{`NT$ ${itemPrice}`}</p>
        <div className="saved-btn">
          <SavedItems
            className="saved-icon"
            itemId={itemId}
            name={name}
            wish={wish}
            // itemWishList={itemWishList}
            // setitemWishList={setitemWishList}
          />
        </div>
      </div>
    </>
  );
};

// console.log(item);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemCard);
