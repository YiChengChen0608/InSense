import React from "react";
import "./itemCard.scss";
import { withRouter } from "react-router-dom";
// import { FiBookmark } from "react-icons/fi";
import SavedItems from "../SavedItems/savedItems";
import SubmitButton from "../SubmitButton/submitButton";

import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cartAction';
import {FiShoppingCart} from 'react-icons/fi';


const ItemCard = (props, addItem) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img">
          <img src={props.itemimg} />
      
        </div>
        <div className="card-content d-flex justify-content-evenly align-items-center">
          <p className="card-name text-center">{props.itemName}</p>
        </div>
        <p className="card-price text-center">{props.itemPrice}</p>
        <div className="item-button-container">
            <SubmitButton>加入購物車</SubmitButton>
            
        </div>
      </div>
      <div className="saved-btn">
        <SavedItems
          className="saved-icon"
          itemId={props.itemId}
          itemWishList={props.itemWishList}
          setitemWishList={props.setitemWishList}
        />
       
      </div>
    </>
  );
};

// export default ItemCard;

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(ItemCard);