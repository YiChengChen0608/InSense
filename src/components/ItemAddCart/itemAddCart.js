import React, { useState, useEffect } from "react";
import "./itemAddCart.scss";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const ItemAddCart = () => {
    const [total, setTotal] = useState(1);
    useEffect(() => {
        // 得到值(字串)
        const initTotal = localStorage.getItem("total") || "1";
        // 設定到total，轉為數字
        setTotal(+initTotal);
    }, []);

    useEffect(() => {
        // 設定值
        localStorage.setItem("total", total);
    }, [total]);

    const QtyDisplay = (
        <>
            <div>
                <FiMinus
                    className="minus"
                    onClick={() => {
                        setTotal(total - 1 < 1 ? 1 : total - 1);
                    }}
                ></FiMinus>
            </div>
            <p className="qty-input">{total}</p>
            <div>
                <FiPlus
                    className="plus"
                    onClick={() => {
                        setTotal(total + 1);
                    }}
                ></FiPlus>
            </div>
        </>
    );
    return (
        <>
            <div className="add-item-wrapper d-flex justify-content-between">
                <div className="qty">
                    <p className="label">數量</p>
                    <div className="qty-control d-flex align-items-center">
                        {QtyDisplay}
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
