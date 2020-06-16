import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiUser, FiShoppingCart, FiX } from "react-icons/fi";
import "./nav.scss";

const Nav = () => {
    let leftClickBtn = (event) => {
        document.querySelector(".burger-item").classList.remove("burger-close");
        document.querySelector(".burger-item").classList.add("burger-open");
    };

    let burgerClose = (event) => {
        document.querySelector(".burger-item").classList.remove("burger-open");
        document.querySelector(".burger-item").classList.add("burger-close");
    };

    useEffect(() => {}, []);

    return (
        <>
            <nav className="nav d-flex justify-content-between align-items-center">
                <div className="position-absolute burger-item d-flex align-items-center justify-content-around">
                    <div className="menu-item position-absolute d-flex align-items-center">
                        <span className="burger-close" onClick={burgerClose}>
                            <FiX />
                        </span>
                        <p className="menu-char">MENU</p>
                    </div>
                    <ul>
                        <li>代理品牌</li>
                        <li>身體保養</li>
                        <li>個人香氛</li>
                        <li>居家生活</li>
                        <li>尋找禮物</li>
                        <li>體驗課程</li>
                    </ul>
                    <ul>
                        <li>關於我們</li>
                        <li>幫助中心</li>
                    </ul>
                </div>
                <div className="leftItem">
                    <a onClick={leftClickBtn} role="button">
                        <FiMenu />
                    </a>
                    <a onClick="" role="button">
                        <FiSearch />
                    </a>
                </div>
                <p>InSense</p>
                <div className="rightItem">
                    <a onClick="" role="button">
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
