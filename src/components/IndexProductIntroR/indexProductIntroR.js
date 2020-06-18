import React from "react";
import "../IndexProductIntroL/indexProductIntroL.scss";
import { Link } from "react-router-dom";
const IndexProductIntroR = (props) => {
    return (
        <div className="product-intro-container">
            <div className="text-center product-title-container">
                <h3>{props.title}</h3>
                <p>{props.intro}</p>
            </div>
            <div className="d-flex product-content-container">
                <div className="product-title">
                    <p className="sub-intro">代表作：</p>
                    <h3>{props.subTitle}</h3>
                    <div className="intro-content-container">
                        <p>{props.subContent}</p>
                    </div>
                    <Link className="button-link  text-center" role="button">
                        立即選購
                    </Link>
                </div>
                <div className="img-container">
                    <img src={props.src} />
                </div>
            </div>
        </div>
    );
};
export default IndexProductIntroR;
