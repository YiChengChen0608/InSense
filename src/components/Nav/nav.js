import React, { useState, useEffect } from "react";
import {
    FiMenu,
    FiSearch,
    FiUser,
    FiShoppingCart,
    FiX,
    FiChevronRight,
} from "react-icons/fi";
import "./nav.scss";
import IndexMenuItem from "../IndexMenuItem/indexMenuItem";
import IndexMenuSideBar from "../IndexMenuSideBar/indexMenuSideBar";
import IndexRightSideBar from "../IndexRightSideBar/indexRightSideBar";
import IndexLogin from "../IndexLogin/indexLogin";

const Nav = () => {
    const [subMenu, setSubMenu] = useState([]);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [subMenuToggle, setSubMenuToggle] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const [userToggle, setUserToggle] = useState(false);
    // test info
    const menuItem = [
        { itemName: "代理品牌", name: "brand" },
        { itemName: "身體保養", name: "body" },
        { itemName: "個人香氛", name: "self" },
        { itemName: "室內香氣", name: "indoor" },
    ];
    const brandItem = [
        { itemName: "BYREDO", name: "byredo" },
        { itemName: "CHANEL", name: "chanel" },
        { itemName: "DIPTYQUE", name: "diptyque" },
        { itemName: "Jo Malone London", name: "jomalonelondon" },
        { itemName: "LeLabo", name: "lelabo" },
    ];
    const bodyItem = [
        { itemName: "沐浴清潔", name: "" },
        { itemName: "乳液與保養油", name: "" },
        { itemName: "手部保養", name: "" },
    ];
    const selfItem = [
        { itemName: "香水", name: "" },
        { itemName: "髮香噴霧", name: "" },
        { itemName: "隨身香水", name: "" },
    ];

    //  event handler

    let SideBar = (event) => {
        switch (event.currentTarget.dataset.name) {
            case "brand":
                setSubMenu(brandItem);
                setSubMenuToggle(true);
                break;
            case "body":
                setSubMenu(bodyItem);
                setSubMenuToggle(true);
                break;
            case "self":
                setSubMenu(selfItem);
                setSubMenuToggle(true);
                break;
        }
    };

    let closeLeftSideBar = () => {
        setSubMenuToggle(false);
        setBurgerToggle(false);
    };

    return (
        <>
            <nav className="nav d-flex justify-content-between align-items-center">
                {/* Menu  */}
                <div
                    className={`position-absolute menu-item d-flex align-items-center justify-content-around ${
                        burgerToggle ? "left-side-bar-open" : ""
                    }`}
                >
                    <div className="menu-title position-absolute d-flex align-items-center">
                        <span onClick={() => closeLeftSideBar()}>
                            <FiX />
                        </span>
                        <p className="menu-char">MENU</p>
                    </div>
                    <ul>
                        {menuItem.map((item, index) => {
                            return (
                                <IndexMenuItem
                                    menuItem={item}
                                    key={index}
                                    changeState={(e) => SideBar(e)}
                                />
                            );
                        })}
                    </ul>
                    <ul>
                        <li className="d-flex align-items-center">
                            <FiChevronRight className="chevron-right" />
                            關於我們
                        </li>
                        <li className="d-flex align-items-center">
                            <FiChevronRight className="chevron-right" />
                            幫助中心
                        </li>
                    </ul>
                </div>
                <IndexMenuSideBar subMenu={subMenu} state={subMenuToggle} />
                {/* Search */}
                <div
                    className={`position-absolute search-block ${
                        searchToggle ? "left-side-bar-open" : ""
                    }`}
                >
                    <div className="search-title position-absolute d-flex align-items-center">
                        <span onClick={() => setSearchToggle(false)}>
                            <FiX />
                        </span>
                        <p className="menu-char">Search</p>
                    </div>
                    <div className="d-flex serach-input position-absolute">
                        <input type="text" placeholder="search" />
                        <FiSearch />
                    </div>
                </div>
                <div className="leftItem">
                    <a onClick={() => setBurgerToggle(true)} role="button">
                        <FiMenu />
                    </a>
                    <a
                        onClick={() => setSearchToggle(true)}
                        role="button"
                        data-name="search"
                    >
                        <FiSearch />
                    </a>
                </div>
                <p>InSense</p>
                <IndexRightSideBar
                    btnClose={() => setUserToggle(false)}
                    state={userToggle}
                >
                    <IndexLogin />
                </IndexRightSideBar>
                <div className="rightItem">
                    <a
                        onClick={() => setUserToggle(true)}
                        role="button"
                        data-name="user"
                    >
                        <FiUser />
                    </a>
                    <a onClick="" role="button">
                        <FiShoppingCart />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;
