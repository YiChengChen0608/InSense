import React from "react";
import "../IndexProductIntroR/indexProductIntroR.scss";
import { Link } from "react-router-dom";
const IndexProductIntroR = (props) => {
    return (
        <div className="product-intro-container-R d-flex">
            <div className="product-content-container-R">
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
            <div className="img-container">
                <img
                    className={props.imgBright ? props.imgBright : ""}
                    src={props.src}
                />
            </div>
        </div>
    );
};
export default IndexProductIntroR;
