import React from "react";
import "./itemInfo.scss";
// import { FiBookmark } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const ItemInfo = (props) => {
    return (
        <>
            <div className="item-info-container">
                <div className="item-info">
                    <h2 className="item-title">{props.itemName}</h2>

                    {/* <SavedItems
                        className="saved-icon"
                        itemId={props.itemId}
                        itemWishList={props.itemWishList}
                        setitemWishList={props.setitemWishList}
                    /> */}
                    <div className="size-label-container">
                        <h3 className="size-label">{props.itemSize}</h3>
                    </div>
                    <div className="price-wrapper">
                        <h3 className="item-price">{props.itemPrice}</h3>
                    </div>
                    <div className="add-item-wrapper d-flex justify-content-between">
                        <div className="qty">
                            <p className="label">數量</p>
                            <div className="qty-control d-flex align-items-center">
                                <FiMinus className="minus "></FiMinus>
                                <input
                                    type="number"
                                    className="qty-input"
                                ></input>
                                <FiPlus className="plus "></FiPlus>
                            </div>
                        </div>
                        <div className="item-add-cart">
                            <button
                                type="submit"
                                title="Add to Cart"
                                className="btn-cart"
                            >
                                加入購物車
                            </button>
                        </div>
                    </div>
                    <div className="item-discription-container">
                        <p className="item-discription">
                            {props.itemDiscription}
                        </p>
                        <p className="item-fragance">
                            {props.fragranceDiscription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemInfo;
