import React from "react";
import "./itemCard.scss";
// import { withRouter } from "react-router-dom";
// import { FiBookmark } from "react-icons/fi";
import SavedItems from "../SavedItems/savedItems";
import SubmitButton from "../SubmitButton/submitButton";

import { connect } from 'react-redux';
import {addItem}  from '../../Redux/cart/cartAction';
// import { addItemToCart } from '../../Redux/cart/cartUtils';


const ItemCard = (props) => {
    const { itemName, itemimg, itemPrice, itemId, itemWishList, setitemWishList, addItem } = props;
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img">
          <img src={itemimg} alt=''/>
      
        </div>
        <div className="card-content d-flex justify-content-evenly align-items-center">
          <p className="card-name text-center">{itemName}</p>
        </div>
        <p className="card-price text-center">{itemPrice}</p>
        <div className="item-button-container">
            <SubmitButton onClick={() => addItem(itemId)} >加入購物車</SubmitButton>
        </div>
      </div>
      <div className="saved-btn">
        <SavedItems
          className="saved-icon"
          itemId={itemId}
          itemWishList={itemWishList}
          setitemWishList={setitemWishList}
        />
       
      </div>
    </>
  );
};


// console.log(item);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(ItemCard);