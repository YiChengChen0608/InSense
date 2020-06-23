import React from "react";
import { Link, withRouter } from "react-router-dom";
import MyBreadcrumb from "./myBreadCrumb.scss";

function MyBreadcrumb(props) {
    const pathlist = [
        "/",
        "/itemlist/brand/byredo",
        "/itemlist/brand/chanel",
        "/itemlist/brand/diptyque",
        "/itemlist/brand/jomalone",
        "/itemlist/brand/lelabo",
        "/itemlist/category/home-scents",
        "/itemlist/category/body-wash",
        "/itemlist/category/lotions-oils",
        "/itemlist/category/hands-care",
        "/itemlist/category/perfume",
        "/itemlist/category/hair-mist-travel-size",
        "/classlist",
        "/classdetails",
        "/about",
    ];
    const pathnames = [
        "BYREDO",
        "CHANEL",
        "diptyque",
        "Jo Malone London",
        "Le Labo",
        "室內香氛",
        "沐浴清潔",
        "乳液＆保養油",
        "香水",
        "髮香噴霧與隨身香水",
        "體驗課程",
        "LFP 客製化香水課程預約",
    ];

    // 先找出對應的中文詞
    let locationPathname = props.location.pathname;
    // `/product/xxxx` 轉為 `/product`
    if (locationPathname.includes("/itemlist/brand/byredo"))
        locationPathname = "/itemlist/brand/byredo";

    const index = pathlist.findIndex((v) => v === locationPathname);

    return (
        <>
            <nav aria-label="breadcrumb-wrapper">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">InSense</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {pathnames[index]}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default withRouter(MyBreadcrumb);
