import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainContainer from "../../components/mainContainer";
import FormInput from "../../components/FormInput/FormInput";
import Address from "../../components/Address/address";
import "./registration.scss";
import { Redirect, withRouter } from "react-router-dom";

//Redux
import { userlogin, checkLogin } from "../../Redux/user/userAction";

//react-icon
import {
  FiCircle,
  FiCheckCircle,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";
// import { GiSquare } from "react-icons/gi";
//material UI
import Button from "@material-ui/core/Button";

//datepicker
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Registration = (props) => {
  //Redux
  const { user, userlogin } = props;

  //gender
  const [gender, setGender] = useState("");

  //input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");
  const [emailConfirmed, setEmailConfirmed] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [cities, setCities] = useState("");
  const [districts, setDistricts] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");

  //確認
  const [confirm, setConfirm] = useState(false);

  //datepicker
  const [selectedDate, setSelectedDate] = useState(
    new Date("2000-01-01T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //性別欄轉換
  const genderChange = (e) => {
    setGender(e.target.value);
  };

  //文字欄
  const handleChange = (event) => {
    // console.log(event.target.name);
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmailName(event.target.value);
        break;
      case "emailConfirmed":
        setEmailConfirmed(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "passwordConfirmed":
        setPasswordConfirmed(event.target.value);
        break;
      default:
        break;
    }
  };

  //聲明確認
  const confirmChange = () => {
    setConfirm(!confirm);
  };

  const registrationSent = async () => {
    const data = {
      userAccount: email,
      userEmail: email,
      userPassword: password,
      userFirstName: firstName,
      userLastName: lastName,
      userGender: gender,
      userCity: cities,
      userDistrict: districts,
      userAddress: address,
      userPostCode: postCode,
      userBirthday: selectedDate.toLocaleDateString().split("/").join("-"),
    };

    const response = await fetch("http://localhost:3030/users/registration", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const obj = await response.json();
    console.log(obj);

    //若成功註冊，則自動登入
    if (obj.logInStatus) userlogin(obj.userInfo);
  };

  useEffect(() => {
    // console.log("changed", cities.length);
    // console.log(
    //   "selectedDate",
    //   selectedDate.toLocaleDateString().split("/").join("-")
    // );
    // console.log("gender", gender);
    // console.log("firstName", firstName);
    // console.log("lastName", lastName);
    // console.log("email", email);
    // console.log("emailConfirmed", emailConfirmed);
    // console.log("password", password);
    // console.log("passwordConfirmed", passwordConfirmed);
    // console.log("cities", cities);
    // console.log("districts", districts);
    // console.log("postCode", postCode);
    // console.log("address", address);
  });

  console.log(user.logInStatus);
  if (user.logInStatus) {
    return <Redirect to="/" />;
  } else if (user.logInStatus === null) {
    console.log("loading");
    return "";
  } else {
    return (
      <>
        <MainContainer>
          <div className="registration-container">
            <h2 className="registration-title">註冊會員</h2>
            <div className="registration-grid-container">
              <div className="registration-grid-item registration-grid-gender">
                <div className="registration-item">
                  <h4>性別*</h4>
                  <div className="registration-gender-select d-flex align-items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="registration-radio-woman"
                      className="display-none"
                      value="woman"
                      onChange={genderChange}
                    ></input>
                    <label
                      for="registration-radio-woman"
                      className="d-flex align-items-center"
                    >
                      {gender === "woman" ? (
                        <FiCheckCircle className="registration-select-circle" />
                      ) : (
                        <FiCircle className="registration-select-circle" />
                      )}
                      <p>女性</p>
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="registration-radio-man"
                      className="display-none"
                      value="man"
                      onChange={genderChange}
                    ></input>
                    <label
                      for="registration-radio-man"
                      className=" d-flex align-items-center"
                    >
                      {gender === "man" ? (
                        <FiCheckCircle className="registration-select-circle" />
                      ) : (
                        <FiCircle className="registration-select-circle" />
                      )}
                      <p>男性</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="registration-grid-item registration-grid-birthday">
                <div className="registration-item">
                  <h4>生日</h4>
                  {/* datepicker */}
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="registration-grid-item registration-grid-last-name">
                <div className="registration-item">
                  <FormInput
                    type="text"
                    name="lastName"
                    value={lastName}
                    handleChange={handleChange}
                    label="姓氏"
                    required
                  />
                </div>
              </div>
              <div className="registration-grid-item registration-grid-first-name">
                <div className="registration-item">
                  <FormInput
                    type="text"
                    name="firstName"
                    value={firstName}
                    handleChange={handleChange}
                    label="名字"
                    required
                  />
                </div>
              </div>
              <div className="registration-grid-item registration-grid-email">
                <div className="registration-item">
                  <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required
                  />
                </div>
              </div>
              <div className="registration-grid-item registration-grid-email-confirm">
                <div className="registration-item">
                  <FormInput
                    type="email"
                    name="emailConfirmed"
                    value={emailConfirmed}
                    handleChange={handleChange}
                    label="確認 email"
                    required
                  />
                </div>
              </div>
              <div className="registration-grid-item registration-grid-password">
                <div className="registration-item">
                  <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="密碼"
                    required
                  />
                </div>
              </div>
              <div className="registration-grid-item registration-grid-password-confirm">
                <div className="registration-item">
                  <FormInput
                    type="password"
                    name="passwordConfirmed"
                    value={passwordConfirmed}
                    handleChange={handleChange}
                    label="確認密碼"
                    required
                  />
                </div>
              </div>
              {/* 地址 */}
              <div className="registration-grid-item registration-grid-address">
                <div className="registration-item">
                  <Address
                    setCities={setCities}
                    setDistricts={setDistricts}
                    setAddress={setAddress}
                    setPostCode={setPostCode}
                  />
                </div>
              </div>
            </div>
            <div
              className="d-flex registration-declaration"
              onClick={confirmChange}
            >
              {confirm ? <FiCheckSquare /> : <FiSquare />}
              <p>
                我確認上述資訊完整無誤，並同意上述資訊可以被 InSense
                作為商業用途使用
              </p>
            </div>
            <div className="">
              <Button
                className="registration-button"
                variant="outlined"
                onClick={registrationSent}
              >
                註冊
              </Button>
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
};

const mapStateToProps = (store) => {
  return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userlogin, checkLogin }, dispatch);
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Registration)
);
