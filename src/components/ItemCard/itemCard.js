import React from "react";
import "./itemCard.scss";
import { FiBookmark } from "react-icons/fi";
import { withRouter } from "react-router-dom";

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
      <div className="hover-wrapper">
        <FiBookmark className="saved-icon" />
      </div>
    </>
  );
};

export default ItemCard;
