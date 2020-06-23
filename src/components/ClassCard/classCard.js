import React from "react";
import { FiShare2 } from "react-icons/fi";
import { Link } from 'react-router-dom'
import "./classCard.scss";

const ClassCard = ({ classImg, classTime, className, classId }) => {

  return (
    <>
      <div className="class-card-wrapper">
        <div className="card-img">
          <img src={`http://localhost:3030/images/class/${classImg}.png`} />
        </div>
        <div className="card-content d-flex justify-content-between align-items-center">
          <p>{classTime}</p>
          <FiShare2 className="share-icon" />
        </div>
        <p className="card-name">{className}</p>
        <Link to={`/classdetail/${classId}`}
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
