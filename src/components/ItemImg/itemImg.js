import React from "react";
import "./itemImg.scss";

const ItemImg = (props) => {
    return (
        <>
            <div className="item-gallery-container">
                <div className="item-gallery">
                    <div className="detail-img-big">
                        <img src="/images/items/P0004.png" />
                        {/* <img src={props.itemimg} /> */}
                    </div>
                    <div className="detail-img-small">
                        <img src={props.itemimg} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemImg;
