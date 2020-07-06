import React, { useState } from "react";
import "./itemImg.scss";

const ItemImg = (props) => {
    const [pictureShown, setPictureShown] = useState(props.itemimg);

    const newPictureShow = (e) => {
        // console.log(e.currentTarget.dataset.picture);
        setPictureShown(e.currentTarget.dataset.picture);
    };
    return (
        <>
            <div className="item-gallery-container">
                <div className="item-gallery">
                    <div className="detail-img-big">
                        <img src={pictureShown} />
                    </div>
                    <div className="d-flex">
                        <div
                            className="detail-img-small"
                            data-picture={props.itemimg1}
                            onClick={newPictureShow}
                        >
                            <img src={props.itemimg1} />
                        </div>
                        {props.itemimg2 ? (
                            <div
                                className="detail-img-small img-second"
                                data-picture={props.itemimg2}
                                onClick={newPictureShow}
                            >
                                <img src={props.itemimg2} />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemImg;
