import React, { useState, useEffect } from "react";
import MainContainer from "../../components/mainContainer";
import "./orderPayMent.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import CreditCardAssociation from "../../components/CreditCardAssociation/creditCardAssociation";
import axios from "axios";
import {
  FiCircle,
  FiCheckCircle,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";
import {
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
  selectUserInfo,
} from "../../Redux/cart/cartSelectors";

const OrderPayMent = ({
  history,
  selectCartItems,
  selectCartTotal,
  selectUserLogin,
  selectUserInfo,
}) => {
  const UserInfo = { ...selectUserInfo };

  console.log("selectUserLogin", UserInfo.userId);
  console.log("上一張表單傳的值", history.location.state);
  const orderDelivery = history.location.state;

  const [payment, setPayment] = useState("");
  const [saveCreditCard, setSaveCreditCard] = useState(false);
  const [agree, setAgree] = useState(false);
  const [cdFirstName, setcdFirstName] = useState("");
  const [cdLastName, setcdLastName] = useState("");
  const [cdNumber, setcdNumber] = useState("");
  const [cdMonth, setcdMonth] = useState("");
  const [cdYear, setcdYear] = useState("");
  const [safeCode, setSafeCode] = useState("");
  const [association, setassociation] = useState("VISA");
  const [billAddressCity, setbillAddressCity] = useState("");
  const [billAddressPostCode, setbillAddressPostCode] = useState("");
  const [billAddressDistrict, setbillAddressDistrict] = useState("");
  const [billAddressStreet, setbillAddressStreet] = useState("");
  const [isDefault, setisDefault] = useState(0);

  // const changePayment = (e) => {
  //   setPayment(e.target.value);
  // };

  const handleChange = (event) => {
    // console.log(event.target.name);
    switch (event.target.name) {
      case "payment":
        setPayment(event.target.value);
        break;
      case "safeCode":
        setSafeCode(event.target.value);
        break;
      case "cdFirstName":
        setcdFirstName(event.target.value);
        break;
      case "cdLastName":
        setcdLastName(event.target.value);
        break;
      case "cdNumber":
        setcdNumber(event.target.value);
        break;
      case "cdMonth":
        setcdMonth(event.target.value);
        break;
      case "cdYear":
        setcdYear(event.target.value);
        break;
      case "association":
        setassociation(event.target.value);
        break;
      case "billAddressCity":
        setbillAddressCity(event.target.value);
        break;
      case "billAddressPostCode":
        setbillAddressPostCode(event.target.value);
        break;
      case "billAddressDistrict":
        setbillAddressDistrict(event.target.value);
        break;
      case "billAddressStreet":
        setbillAddressStreet(event.target.value);
        break;
      case "isDefault":
        setisDefault(event.target.value);
        break;

      default:
        break;
    }
  };

  const paymentdata = {
    payment: payment,
    // saveCreditCard: saveCreditCard,
    // safeCode: safeCode,
    userId: UserInfo.userId,
    // !! missing userId !!
    cdFirstName: cdFirstName,
    cdLastName: cdLastName,
    cdNumber: cdNumber,
    cdMonth: cdMonth,
    cdYear: cdYear,
    association: association,
    billAddressCity: billAddressCity,
    billAddressPostCode: billAddressPostCode,
    billAddressDistrict: billAddressDistrict,
    billAddressStreet: billAddressStreet,
    isDefault: isDefault,
  };

  console.log(
    "paymentdata",
    paymentdata,
    selectCartItems,
    selectCartTotal,
    orderDelivery
  );

  const addordersToSever = async () => {
    axios.post(`http://localhost:3030/orders/orderList`, {
      paymentdata: paymentdata,
      selectCartItems: selectCartItems,
      selectCartTotal: selectCartTotal,
      orderDelivery: orderDelivery,
    });
  };

  return (
    <MainContainer>
      <button onClick={() => addordersToSever()}>test</button>
      <div className="text-center position-relative order-payment-head">
        <div className="position-absolute order-payment-title">付款資訊</div>
        <div className="order-payment-step">
          <a href="#" onClick={(e) => e.preventDefault()}>
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
      <div className="d-flex order-payment-content">
        <div className="order-payment-subcontent subcontent-left">
          <img src="/images/class/class1.jpg" />
        </div>
        <div className="order-payment-subcontent subcontent-center">
          <div className="d-flex subcontent-payment-title">
            付款方式*：
            <label className="d-flex flex-grow align-items-center">
              <input
                className="display-none"
                name="payment"
                type="radio"
                value="Credit"
                onChange={handleChange}
              />
              {payment === "Credit" ? (
                <FiCheckCircle className="order-payment-circle" />
              ) : (
                <FiCircle className="order-payment-circle" />
              )}
              Credit
            </label>
            <label className="d-flex flex-grow align-items-center">
              <input
                className="display-none"
                name="payment"
                type="radio"
                value="Paypal"
                onChange={handleChange}
              />
              {payment === "Paypal" ? (
                <FiCheckCircle className="order-payment-circle" />
              ) : (
                <FiCircle className="order-payment-circle" />
              )}
              Paypal
            </label>
            <label className="d-flex flex-grow align-items-center">
              <input
                className="display-none"
                name="payment"
                type="radio"
                value="Stripe"
                onChange={handleChange}
              />
              {payment === "Stripe" ? (
                <FiCheckCircle className="order-payment-circle" />
              ) : (
                <FiCircle className="order-payment-circle" />
              )}
              Stripe
            </label>
          </div>

          {/* //油點問題 */}
          <CreditCardAssociation />

          <FormControl>
            <InputLabel htmlFor="my-input">cdFirstName*</InputLabel>
            <Input
              name="cdFirstName"
              onChange={handleChange}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">cdLastName*</InputLabel>
            <Input
              name="cdLastName"
              onChange={handleChange}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">cdNumber*</InputLabel>
            <Input
              name="cdNumber"
              onChange={handleChange}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <div className="subcontent-date">
            到期日期
            <div className="d-flex credit-card-date">
              <FormControl>
                <InputLabel onChange={handleChange} htmlFor="my-input">
                  cdMonth*
                </InputLabel>
                <Input
                  name="cdMonth"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">cdYear*</InputLabel>
                <Input
                  name="cdYear"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="my-input">billAddressCity*</InputLabel>
                <Input
                  name="billAddressCity"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">billAddressPostCode*</InputLabel>
                <Input
                  name="billAddressPostCode"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">billAddressDistrict*</InputLabel>
                <Input
                  name="billAddressDistrict"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">billAddressStreet*</InputLabel>
                <Input
                  name="billAddressStreet"
                  onChange={handleChange}
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="order-payment-subcontent subcontent-right">
          <FormControl>
            <InputLabel htmlFor="my-input">safeCode*</InputLabel>
            <Input
              onChange={handleChange}
              name="safeCode"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <div
            className="credit-card-checkedBtn d-flex align-items-center"
            onClick={() => setSaveCreditCard(!saveCreditCard)}
          >
            {saveCreditCard ? (
              <FiCheckSquare className="order-payment-square" />
            ) : (
              <FiSquare className="order-payment-square" />
            )}
            <span>使用已儲存的信用卡資訊</span>
          </div>
          <div
            className="credit-card-checkedBtn"
            onClick={() => setAgree(!agree)}
          >
            {agree ? (
              <FiCheckSquare className="order-payment-square" />
            ) : (
              <FiSquare className="order-payment-square" />
            )}
            <span>
              我確認上述資訊完整無誤,並同意上述資訊可以被InSense作為商業用途使用
            </span>
          </div>
          <a
            className="confirm-btn"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            確認付款
          </a>
        </div>
      </div>
    </MainContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  selectCartItems: selectCartItems,
  selectCartTotal: selectCartTotal,
  selectUserLogin: selectUserLogin,
  selectUserInfo: selectUserInfo,
});

export default withRouter(connect(mapStateToProps)(OrderPayMent));
