import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import "./nav.scss";
import IndexMenuItem from "../IndexMenuItem/indexMenuItem";
import IndexMenuSideBar from "../IndexMenuSideBar/indexMenuSideBar";
import IndexRightSideBar from "../IndexRightSideBar/indexRightSideBar";
import AccountRightBar from "../AccountRightBar/accountRightBar";
import IndexLogin from "../IndexLogin/indexLogin";
import IndexShoppingCart from "../IndexShoppingCart/indexShoppingCart";

const Nav = ({ location, user }) => {
  // state change
  // test info
  const menuItem = [
    { itemName: "代理品牌", name: "brand" },
    { itemName: "身體保養", name: "body" },
    { itemName: "個人香氛", name: "self" },
    { itemName: "室內香氣", name: "indoor" },
    { itemName: "體驗課程", name: "class", pathUrl: "/classlist" },
  ];
  const brandItem = [
    { itemName: "BYREDO", name: "byredo", pathUrl: "/itemlist" },
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
    { itemName: "髮香噴霧與隨身香水", name: "" },
  ];

  const [subMenu, setSubMenu] = useState([]);
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [subMenuToggle, setSubMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", function () {
      this.scrollY > 0 ? setScrollTop(true) : setScrollTop(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`${
          location.pathname === "/" ? "position-fix" : "position-sticky"
        } nav d-flex justify-content-between align-items-center ${
          scrollTop || location.pathname !== "/" ? "scroll-down" : ""
        }`}
      >
        {/* Menu  */}
        <div
          className={`position-absolute menu-item d-flex align-items-center justify-content-around ${
            burgerToggle ? "left-side-bar-open" : ""
          }`}
        >
          <div className="menu-title position-absolute d-flex align-items-center">
            <span
              onClick={() => setBurgerToggle(false) || setSubMenuToggle(false)}
            >
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
        <p className="index-nav-title">InSense</p>
        <IndexRightSideBar
          btnClose={() => setUserToggle(false) || setCartToggle(false)}
          state={userToggle || cartToggle}
        >
          {userToggle ? (
            user.logInStatus ? (
              <AccountRightBar />
            ) : (
              <IndexLogin />
            )
          ) : cartToggle ? (
            <IndexShoppingCart />
          ) : (
            ""
          )}
        </IndexRightSideBar>
        <div className="rightItem">
          <a onClick={() => setUserToggle(true)} role="button" data-name="user">
            <FiUser />
          </a>
          <a onClick={() => setCartToggle(true)} role="button">
            <FiShoppingCart />
          </a>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (store) => {
  return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
