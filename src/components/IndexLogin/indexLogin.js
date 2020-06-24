import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./indexLogin.scss";

import Button from "@material-ui/core/Button";
import FormInput from "../FormInput/FormInput";

//Redux
import { userLogInAsync } from "../../Redux/user/userAction";

const IndexLogin = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //引入Redux
  const { user, userLogInAsync } = props;

  //帳號
  const changeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  //密碼
  const changePassword = (event) => {
    setUserPassword(event.target.value);
  };

  //登入function
  const handleLogin = () => {
    userLogInAsync(userEmail, userPassword);
  };

  //redirect to Registration
  const redirectRegister = () => {
    props.history.push('/account/registration')
  };

  useEffect(() => {
    // console.log("changed");
  }, [user]);

  return (
    <>
      <div className="loginHeader d-flex">
        <p>會員登入</p>
        <FormInput
          type="email"
          name="email"
          value={userEmail}
          handleChange={changeEmail}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userPassword}
          handleChange={changePassword}
          label="password"
          required
        />
      </div>
      <div className="loginFooter text-center">
        <Button onClick={handleLogin}>登入</Button>
        <Button onClick={redirectRegister}>註冊</Button>
        <Button>忘記密碼</Button>
      </div>
    </>
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
  return bindActionCreators({ userLogInAsync }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexLogin));
