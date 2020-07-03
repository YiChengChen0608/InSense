import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import "./wishListCard.scss";

//react-icon
import { FiX } from "react-icons/fi";

//component
import SubmitButton from "../SubmitButton/submitButton";

const WishListCard = (props) => {
    return (
        <>
            <div className="list-card-container d-flex">
                <div className="list-card-img">
                    <img src="/images/items/P0001.png" alt="商品圖片" />
                    {/* <img src={itemimg} alt="商品圖片" /> */}
                </div>
                <div className="list-card-info flex-grow">
                    <div className="list-card-head d-flex">
                        <h4 className="list-card-title ">
                            BYREDO 詩性既視淡香精
                            {/* {props.itemName} */}
                        </h4>
                    </div>
                    <div className="list-card-size-container">
                        <p className="list-card-size ">
                            50ml{/* {props.itemSize} */}
                        </p>
                    </div>
                    <div className="list-card-price-container">
                        <p>
                            NT$ 4800
                            {/* {props.itemPrice} */}
                        </p>
                    </div>
                </div>
                <div className="btns">
                    <div className="btn-del d-flex justify-content-end">
                        <FiX className="del-icon" />
                    </div>
                    <div className="btn-add-cart">
                        <SubmitButton>加入購物車</SubmitButton>
                    </div>
                </div>
            </div>
            <div className="list-card-container d-flex">
                <div className="list-card-img">
                    <img src="/images/items/P0001.png" alt="商品圖片" />
                    {/* <img src={itemimg} alt="商品圖片" /> */}
                </div>
                <div className="list-card-info flex-grow">
                    <div className="list-card-head d-flex">
                        <h4 className="list-card-title ">
                            BYREDO 詩性既視 淡香精
                            {/* {props.itemName} */}
                        </h4>
                    </div>
                    <div className="list-card-size-container">
                        <p className="list-card-size ">
                            50ml{/* {props.itemSize} */}
                        </p>
                    </div>
                    <div className="list-card-price-container">
                        <p>
                            NT$ 4800
                            {/* {props.itemPrice} */}
                        </p>
                    </div>
                </div>
                <div className="btns">
                    <div className="btn-del d-flex justify-content-end">
                        <FiX className="del-icon" />
                    </div>
                    <div className="btn-add-cart">
                        <SubmitButton>加入購物車</SubmitButton>
                    </div>
                </div>
            </div>
        </>
    );
};

// const mapStateToProps = (store) => {
//     return { user: store.user };
// };

//Redux引入函式
//mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ userLogin, userLogOut }, dispatch);
// };
export default WishListCard;
