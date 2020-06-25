import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./accountModify.scss";

//Redux
import { user } from "../../Redux/user/userAction";

//component
import FormInput from "../../components/FormInput/FormInput";
import Address from "../../components/Address/address";

//react-icon
import {
  FiCircle,
  FiCheckCircle,
  FiCheckSquare,
  FiSquare,
} from "react-icons/fi";

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

const AccountModify = (props) => {
  //destructor
  const { user } = props;
  //gender
  const [gender, setGender] = useState("");

  //input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");
  const [cities, setCities] = useState("");
  const [districts, setDistricts] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");

  //確認
  const [confirm, setConfirm] = useState(false);

  //性別欄轉換
  const genderChange = (e) => {
    setGender(e.target.value);
  };

  //datepicker
  const [selectedDate, setSelectedDate] = useState(
    new Date("2000-01-01T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
        setEmail(event.target.value);
        break;
      case "mobile":
        setMobile(event.target.value);
        break;
      case "oldPassword":
        setOldPassword(event.target.value);
        break;
      case "newPassword":
        setNewPassword(event.target.value);
        break;
      case "newPasswordConfirmed":
        setNewPasswordConfirmed(event.target.value);
        break;
      default:
        break;
    }
  };

  //聲明確認
  const confirmChange = () => {
    setConfirm(!confirm);
  };

  //送出更改要求
  const modificationSent = async () => {
    if (confirm) {
      console.log("sent");
      const data = {
        userAccount: email,
        userEmail: email,
        userFirstName: firstName,
        userLastName: lastName,
        userMobile: mobile,
        userGender: gender,
        userCity: cities,
        userDistrict: districts,
        userAddress: address,
        userPostCode: postCode,
        userBirthday: selectedDate.toLocaleDateString().split("/").join("-"),
      };

    //   console.log(data);

        const response = await fetch("http://localhost:3030/users/infomodify", {
          method: "PATCH",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        });

        const obj = await response.json();
        console.log(obj);
    } else {
      console.log("not sent");
    }
  };

  //送出密碼更改要求
  const passwordSent = () => {
    if (confirm) {
      console.log("password changed");
    } else {
      console.log("password not changed");
    }
  };

  useEffect(() => {
    // console.log("user", user);
    console.log('redux')
    if (user.logInStatus) {
      setGender(user.userInfo.userGender);
      setSelectedDate(new Date(user.userInfo.userBirthday));
      setLastName(user.userInfo.userLastName);
      setFirstName(user.userInfo.userFirstName);
      setEmail(user.userInfo.userEmail);
      setMobile(user.userInfo.userMobile);
      //   setPassword(user.userInfo.userPassword);
      setCities(user.userInfo.userCity);
      setDistricts(user.userInfo.userDistrict);
      setPostCode(user.userInfo.userPostCode);
      setAddress(user.userInfo.userAddress);
    }
  }, [user]);

  useEffect(() => {
    //   console.log(oldPassword)
    //   console.log(newPassword)
    //   console.log(newPasswordConfirmed)
    //   console.log(confirm)
  });

  return (
    <>
      <div className="account-modify-container">
        <h2 className="modify-title">會員資料修改</h2>
        {/* 基本資料更改 */}
        <div className="modify-grid-container">
          <div className="modify-grid-item modify-grid-gender">
            <div className="modify-item">
              <h4>性別*</h4>
              <div className="modify-gender-select d-flex align-items-center">
                <input
                  type="radio"
                  name="gender"
                  id="modify-radio-woman"
                  className="display-none"
                  value="woman"
                  onChange={genderChange}
                ></input>
                <label
                  for="modify-radio-woman"
                  className="d-flex align-items-center"
                >
                  {gender === "woman" ? (
                    <FiCheckCircle className="modify-select-circle" />
                  ) : (
                    <FiCircle className="modify-select-circle" />
                  )}
                  <p>女性</p>
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="modify-radio-man"
                  className="display-none"
                  value="man"
                  onChange={genderChange}
                ></input>
                <label
                  for="modify-radio-man"
                  className=" d-flex align-items-center"
                >
                  {gender === "man" ? (
                    <FiCheckCircle className="modify-select-circle" />
                  ) : (
                    <FiCircle className="modify-select-circle" />
                  )}
                  <p>男性</p>
                </label>
              </div>
            </div>
          </div>
          <div className="modify-grid-item modify-grid-birthday">
            <div className="modify-item">
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
          <div className="modify-grid-item modify-grid-last-name">
            <div className="modify-item">
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
          <div className="modify-grid-item modify-grid-first-name">
            <div className="modify-item">
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
          <div className="modify-grid-item modify-grid-email">
            <div className="modify-item">
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
          <div className="modify-grid-item modify-grid-mobile">
            <div className="modify-item">
              <FormInput
                type="text"
                name="mobile"
                value={mobile}
                handleChange={handleChange}
                label="手機"
                required
              />
            </div>
          </div>
          <div className="modify-grid-item modify-grid-address">
            <div className="modify-item">
              <Address
                setCities={setCities}
                setDistricts={setDistricts}
                setAddress={setAddress}
                setPostCode={setPostCode}
              />
            </div>
          </div>
        </div>
        <div className="d-flex modify-declaration" onClick={confirmChange}>
          {confirm ? <FiCheckSquare /> : <FiSquare />}
          <p>確認更改</p>
        </div>
        <div className="">
          <Button
            className="modify-button"
            variant="outlined"
            onClick={modificationSent}
          >
            會員資料更改
          </Button>
        </div>
        {/* 更改密碼 */}
        <h2 className="modify-title password-title">密碼更改</h2>
        <div className="password-grid-container">
          <div className="password-grid-item password-grid-old-password">
            <div className="password-item">
              <FormInput
                type="password"
                name="oldPassword"
                value={oldPassword}
                handleChange={handleChange}
                label="舊密碼"
                required
              />
            </div>
          </div>
          <div className="password-grid-item password-grid-new-password">
            <div className="password-item">
              <FormInput
                type="password"
                name="newPassword"
                value={newPassword}
                handleChange={handleChange}
                label="新密碼"
                required
              />
            </div>
          </div>
          <div className="password-grid-item password-grid-new-password-confirm">
            <div className="password-item">
              <FormInput
                type="password"
                name="newPasswordConfirmed"
                value={newPasswordConfirmed}
                handleChange={handleChange}
                label="確認新密碼"
                required
              />
            </div>
          </div>
        </div>
        <div className="">
          <Button
            className="modify-button"
            variant="outlined"
            onClick={passwordSent}
          >
            密碼更改
          </Button>
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AccountModify);
