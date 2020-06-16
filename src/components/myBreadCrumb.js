import React from "react";
import { Link, withRouter } from "react-router-dom";

function MyBreadcrumb(props) {
    const pathlist = [
        "/",
        "/categories/byredo",
        "/categories/chanel",
        "/categories/diptyque",
        "/categories/jomalonelondon",
        "/categories/lelabo",
        "/categories/homescents",
        "/categories/bodywash",
        "/categories/lotionsandoils",
        "/categories/handcare",
        "/categories/perfume",
        "/categories/hairmist",
        "/categories/travelsize",
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
        "髮香噴霧",
        "隨身香水",
        "體驗課程",
        "LFP 客製化香水課程預約",
    ];

    // 先找出對應的中文詞
    let locationPathname = props.location.pathname;
    // `/product/xxxx` 轉為 `/product`
    if (locationPathname.includes("/categories/byredo"))
        locationPathname = "/categories/byredo";

    const index = pathlist.findIndex((v) => v === locationPathname);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">首頁</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {pathnames[index]}
                    </li>
                </ol>
            </nav>
        </>
    );
}

export default withRouter(MyBreadcrumb);
