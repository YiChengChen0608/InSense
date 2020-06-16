import React from "react";
import "./accountSideBar.scss";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const AccountSideBar = () => {
  return (
    <div className="side-bar-wrapper">
      <h2>我的帳戶</h2>
      <ul className="accountMenu">
        <li className="d-flex align-item-center">
          <Link className="d-flex align-item-center">
            <p>帳戶資訊</p>
            <FiChevronRight className="icon" />
          </Link>
        </li>
        <li className="d-flex align-item-center">
          <span>我的訂單</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>我的課程</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>付款資訊</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>我的優惠券</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>願望清單</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>客服留言</span>
          <FiChevronRight className="icon" />
        </li>
        <li className="d-flex align-item-center">
          <span>登出</span>
          <FiChevronRight className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
