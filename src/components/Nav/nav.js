import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  FiMenu,
  FiSearch,
  FiX,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";
import { userToggleFunc, closeSideBar } from '../../Redux/nav/navAction'
import "./nav.scss";
import IndexMenuItem from "../IndexMenuItem/indexMenuItem";
import IndexMenuSideBar from "../IndexMenuSideBar/indexMenuSideBar";
<<<<<<< HEAD
import IndexRightSideBar from '../IndexRightSideBar/indexRightSideBar'
import IndexLogin from '../IndexLogin/indexLogin'


//import CartIcon to replace FiShoppingCart
import {connect} from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../Redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import CartIcon from '../CartIcon/cartIcon';
import CartDropdwon from '../CartDropdown/cartDropdown';

const Nav = ({ location , hidden}) => {
=======
import IndexRightSideBar from "../IndexRightSideBar/indexRightSideBar";
import AccountRightBar from "../AccountRightBar/accountRightBar";
import IndexLogin from "../IndexLogin/indexLogin";
import IndexShoppingCart from "../IndexShoppingCart/indexShoppingCart";

<<<<<<< HEAD
const Nav = ({ location, user }) => {
>>>>>>> 631d797f820437cc6593095924233a4a481ba207
=======
const Nav = ({ location, user, userToggleFunc, closeSideBar, userToggle }) => {
>>>>>>> 5d712789d7b272f280c8b419e8c7bb28dcf0ab02
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
<<<<<<< HEAD
        <IndexRightSideBar btnClose={() => setUserToggle(false)} state={userToggle}>
          <IndexLogin />
=======
        <IndexRightSideBar
          btnClose={() => closeSideBar() || setCartToggle(false)}
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
<<<<<<< HEAD
            ""
          )}
>>>>>>> 631d797f820437cc6593095924233a4a481ba207
        </IndexRightSideBar>
        <div className='rightItem'>
          <a onClick={() => setUserToggle(true)} role='button' data-name='user'><FiUser/></a>
=======
                ""
              )}
        </IndexRightSideBar>
        <div className="rightItem">
          {/* 會員登入 */}
          <a
            onClick={() => userToggleFunc()}
            role="button"
            data-name="user"
          >
            <FiUser />
          </a>
          {/* 購物車 */}
          <a onClick={() => setCartToggle(true)} role="button">
            <FiShoppingCart />
          </a>
>>>>>>> 5d712789d7b272f280c8b419e8c7bb28dcf0ab02
        </div>
        <CartIcon onClick={() => setCartToggle(true)} role='button'/>
      </nav>{
        hidden ? null:
      <CartDropdwon />
      }
    </>
  );
};

<<<<<<< HEAD



const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

//Use the connect function in react-redux project. To prevent update blocking issue, use compose, 看不懂去問peggy
const compose = (f, g) => x => f(g(x));

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Nav);
=======
const mapStateToProps = (store) => {
  return { user: store.user, userToggle: store.nav };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userToggleFunc, closeSideBar }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
>>>>>>> 631d797f820437cc6593095924233a4a481ba207
