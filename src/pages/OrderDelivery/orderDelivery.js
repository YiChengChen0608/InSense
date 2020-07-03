import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import MainContainer from "../../components/mainContainer";
import FormInput from "../../components/FormInput/FormInput";
import Address from "../../components/Address/address";
import "./orderDelivery.scss";
import { withRouter } from "react-router-dom";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/cart/cartSelectors";

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
import { FaPhone } from "react-icons/fa";

const OrderDelivery = (props) => {
  //Redux
  const { user, userLogin, history } = props;

  //gender
  const [gender, setGender] = useState("");

  //input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailName] = useState("");
  const [phone, setPhone] = useState("");
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
      case "phone":
        setPhone(event.target.value);
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
      // 會員帳號
      userAccount: email,
      userEmail: email,
      userPhone: phone,
      userFirstName: firstName,
      userLastName: lastName,
      userGender: gender,
      userCity: cities,
      userDistrict: districts,
      userAddress: address,
      userPostCode: postCode,
      userBirthday: selectedDate.toLocaleDateString().split("/").join("-"),
    };
    history.push("/orders/orderpayment", {
      data: data,
    });
  };

  return (
    <>
      <MainContainer>
        <div className="registration-container">
          <div className="text-center position-relative order-payment-head">
            <div className="position-absolute order-payment-title registration-title">
              寄送資訊
            </div>
            <div className="order-payment-step">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="delivery-step"
              >
                寄送資訊{" "}
              </a>{" "}
              ＞
              <a href="#" onClick={(e) => e.preventDefault()}>
                付款資訊{" "}
              </a>{" "}
              ＞
              <a href="#" onClick={(e) => e.preventDefault()}>
                訂單明細
              </a>
            </div>
          </div>
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
                    htmlFor="registration-radio-woman"
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
                    htmlFor="registration-radio-man"
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
                  type="tel"
                  name="phone"
                  value={phone}
                  handleChange={handleChange}
                  label="手機"
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
              前往付款
            </Button>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps, null)(OrderDelivery));
