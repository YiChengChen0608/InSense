import React from "react";
import "./itemHead.scss";
// import { withRouter } from "react-router-dom";

const ItemHead = (props) => {
    return (
        <>
            <div className="item-head">
                <div className="item-head-banner">
                    <img className="object-fit-cover" src={props.Banner} />
                </div>
                <h1 className="brand-name">{props.Name}</h1>
                {props.Discription ? (
                    <p className="brand-content">{props.Discription}</p>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default ItemHead;
// export default withRouter(ItemHead);
