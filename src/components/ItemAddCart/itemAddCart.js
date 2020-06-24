import React, { useState, useEffect } from "react";
import "./itemAddCart.scss";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const ItemAddCart = (props) => {
    return (
        <>
            <div className="add-item-wrapper d-flex justify-content-between">
                <div className="qty">
                    <p className="label">數量</p>
                    <div className="qty-control d-flex align-items-center">
                        <FiMinus className="minus "></FiMinus>
                        <input type="number" className="qty-input"></input>
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
        </>
    );
};

export default ItemAddCart;
