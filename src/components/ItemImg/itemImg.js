import React from "react";
import "./itemImg.scss";

const ItemImg = (props) => {
    return (
        <>
            <div className="item-gallery">
                <div className="detail-img">
                    <img src={props.itemimg} />
                </div>
            </div>
        </>
    );
};

export default ItemImg;
