import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import MyBreadcrumb from "../../components/myBreadCrumb";
import MainContainer from "../../components/mainContainer";
import ItemImg from "../../components/ItemImg/itemImg";
import "./itemDetails.scss";

const ItemDetails = (props) => {
    return (
        <>
            <div className="item-details-main-content">
                <div className="item-details-container d-flex">
                    <ItemImg></ItemImg>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
};

export default withRouter(ItemDetails);
