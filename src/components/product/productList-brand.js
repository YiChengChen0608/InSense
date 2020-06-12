import React from "react";
import { FiShare2 } from "react-icons/fi";
import "../../styles/class/classCard.scss";

const ProductList = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={props.src} />
                </div>
                <div className="card-content d-flex justify-content-between align-items-center">
                    <p>{props.date}</p>
                    <FiShare2 className="share-icon" />
                </div>
                <p className="card-name">{props.className}</p>
                <a
                    className="card-btn text-center"
                    href="javascript:;"
                    role="button"
                >
                    參加
                </a>
            </div>
        </>
    );
};

export default ClassCard;
