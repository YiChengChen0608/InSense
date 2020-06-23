import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./accountRightBar.scss";
import { FiChevronRight } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//Redux
import { userLogOutAsync } from "../../Redux/user/userAction";

const AccountRightBar = (props) => {
  //引入Redux
  const { user, userLogOutAsync } = props;

  const handleLogOut = () => {
    userLogOutAsync()
  };

  return (
    <div className="right-bar-wrapper">
      <h2>{user.userInfo.userFirstName} 你好</h2>
      <div className="menu-bar">
        <ul className="accountMenu">
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>帳戶資訊</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link
              to="/account/classpage"
              className="d-flex align-item-center account-link"
            >
              <FiChevronRight className="icon" />
              <p>我的課程</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>付款資訊</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>我的優惠券</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>願望清單</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>帳戶資訊</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Link to="" className="d-flex align-item-center account-link">
              <FiChevronRight className="icon" />
              <p>客服留言</p>
            </Link>
          </li>
          <li className="d-flex align-item-center">
            <Button onClick={handleLogOut}>登出</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
//Redux引入狀態
//mapStateToProps
const mapStateToProps = (store) => {
  return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userLogOutAsync }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountRightBar);
