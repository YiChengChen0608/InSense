import React from "react";
import "./indexProductIntroL.scss";
import { Link } from "react-router-dom";
const IndexProductIntroL = (props) => {
    return (
        <div className="product-intro-container">
            <div className="text-center product-title-container">
                <h3>{props.title}</h3>
                <p>{props.intro}</p>
            </div>
            <div className="d-flex product-content-container">
                <div className="img-container">
                    <img
                        className={props.imgBright ? props.imgBright : ""}
                        src={props.src}
                    />
                </div>
                <div className="product-title">
                    <p className="sub-intro">代表作：</p>
                    <h3>{props.subTitle}</h3>
                    <div className="intro-content-container">
                        <p>{props.subContent}</p>
                    </div>
                    <Link className="button-link text-center" role="button">
                        立即選購
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default IndexProductIntroL;
