import React from "react";
import "./itemImg.scss";

const ItemImg = (props) => {
  return (
    <>
      <div className="item-gallery-container">
        <div className="item-gallery">
          <div className="detail-img-big">
            <img src={props.itemimg} />
          </div>
          <div className="d-flex">
            <div className="detail-img-small">
              <img src={props.itemimg1} />
            </div>
            {props.itemimg2 ? (
              <div className="detail-img-small img-second">
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
