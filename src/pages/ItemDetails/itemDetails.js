import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import MyBreadcrumb from "../../components/MyBreadCrumb/myBreadCrumb";
import MainContainer from "../../components/mainContainer";
import ItemImg from "../../components/ItemImg/itemImg";
import ItemInfo from "../../components/ItemInfo/itemInfo";
import ItemSuggest from "../../components/ItemSuggest/itemSuggest";
import "./itemDetails.scss";

const ItemDetails = (props) => {
    return (
        <>
            <div className="breadcrumb-wrapper"></div>
            {/* <MyBreadcrumb></MyBreadcrumb> */}
            <div className="item-details-main-content">
                <div className="item-details-container d-flex">
                    <ItemImg></ItemImg>
                    <ItemInfo></ItemInfo>
                </div>
                <div></div>
                <div>
                    <ItemSuggest></ItemSuggest>
                </div>
            </div>
        </>
    );
};

export default withRouter(ItemDetails);
