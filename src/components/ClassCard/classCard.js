import React from "react";
import { FiShare2 } from "react-icons/fi";
import { Link } from 'react-router-dom'
import "./classCard.scss";

const ClassCard = (props) => {
  return (
    <>
      <div className="class-card-wrapper">
        <div className="card-img">
          <img src={props.src} />
        </div>
        <div className="card-content d-flex justify-content-between align-items-center">
          <p>{props.date}</p>
          <FiShare2 className="share-icon" />
        </div>
        <p className="card-name">{props.Name}</p>
        <Link to='/classdetail'
          className="card-btn text-center"
          role="button"
        >
          參加
        </Link>
      </div>
    </>
  );
};

export default ClassCard;
