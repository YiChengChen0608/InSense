import React from "react";
import "../../styles/item/itemList/itemCard.scss";
import { FiBookmark } from "react-icons/fi";
import { withRouter } from "react-router-dom";

const ItemCard = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={props.src} />
                </div>
                <p className="card-name">{props.Name}</p>
                <div className="card-content d-flex justify-content-between align-items-center"></div>
                <p className="card-price">{props.Price}</p>
                <FiBookmark className="saved-icon" />
            </div>
        </>
    );
};

export default ItemCard;
