import React from "react";
import "./indexSubscribe.scss";
import { Link } from "react-router-dom";

const indexSubscribe = () => {
    return (
        <div className="index-subscribe-container text-center">
            <p>訂閱我們</p>
            <input type="text" placeholder="your email address*" />
            <Link className="button-link" role="button">
                SUBSCRIBE
            </Link>
        </div>
    );
};
export default indexSubscribe;
