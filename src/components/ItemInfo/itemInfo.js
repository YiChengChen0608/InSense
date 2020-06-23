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
                    <h2 className="item-title">BYREDO 北國之春淡香精</h2>
                    {/* <h2 className="item-title">{props.itemName}</h2> */}

                    {/* <SavedItems
                        className="saved-icon"
                        itemId={props.itemId}
                        itemWishList={props.itemWishList}
                        setitemWishList={props.setitemWishList}
                    /> */}
                    <div className="size-label-container">
                        <h3 className="size-label">50ml</h3>
                    </div>
                    <div className="price-wrapper">
                        <h3 className="item-price">NT$ 3900</h3>
                        {/* <h3 className="item-price">{props.itemPrice}</h3> */}
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
                            乾淨的木質香，乾燥冷冽，富有深度。雪松讓人回想起兒時削鉛筆的氣味，回憶起剛開始學習，那快樂而簡單的生活，雪松與玫瑰花瓣的清甜，添增了溫暖的現代感，透過調香師的氣味堆疊，創造出深度的香氣。
                        </p>
                        <p className="item-fragance">
                            香調：玫瑰花瓣、維吉尼亞雪松、絲絨麝香、海地岩蘭草。
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemInfo;
