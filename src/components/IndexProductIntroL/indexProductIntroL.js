import React from "react";
import "./indexProductIntroL.scss";
import { Link } from "react-router-dom";
const IndexProductIntroL = (props) => {
    return (
        <div className="product-intro-container d-flex">
            <div className="img-container">
                <img
                    className={props.imgBright ? props.imgBright : ""}
                    src={props.src}
                />
            </div>
            <div className="product-content-container">
                <div className="product-box">
                    <div className="product-title">
                        <h3>{props.title}</h3>
                        <p>{props.intro}</p>
                    </div>

                    <div className="intro-content">
                        <h3>{props.subTitle}</h3>
                        <p>{props.subContent}</p>
                    </div>
                    <Link
                        to={`/itemdetail/${props.itemId}`}
                        className="button-link text-center"
                        type="button"
                    >
                        立即選購
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default IndexProductIntroL;
