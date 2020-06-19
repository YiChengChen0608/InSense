import React from "react";
import "./itemCard.scss";
import { withRouter } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import SavedItems from "../SavedItems/savedItems";

const ItemCard = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={props.src} />
                </div>
                <div className="card-content d-flex justify-content-evenly align-items-center">
                    <p className="card-name text-center">{props.Name}</p>
                </div>
                <p className="card-price text-center">{props.Price}</p>
            </div>
            <div className="saved-btn">
                <SavedItems
                    className="saved-icon"
                    id={props.id}
                    itemWishList={props.itemWishList}
                    setitemWishList={props.setitemWishList}
                />
            </div>
        </>
    );
};

export default ItemCard;
