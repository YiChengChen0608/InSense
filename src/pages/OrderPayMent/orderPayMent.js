import React, { useState, useEffect } from "react";
import MainContainer from "../../components/mainContainer";
import "./orderPayMent.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Input, FormControl, InputLabel } from "@material-ui/core";
import CreditCardNumber from '../../components/CreditCardNumber/creditCardNumber'
import CreditCardExpiration from '../../components/CreditCardExpiration/creditCardExpiration'
import CreditCardAssociation from "../../components/CreditCardAssociation/creditCardAssociation";
import Address from '../../components/Address/address'
import axios from "axios";

//radio checkbox icon
import {
  FiCircle,
  FiCheckCircle,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";

//redux selector
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
  console.log(selectCartItems)
  console.log("selectUserLogin", UserInfo.userId);
  console.log("上一張表單傳的值", history.location.state);
  const orderDelivery = history.location.state;

  const [payment, setPayment] = useState("Credit");
  const [saveCreditCard, setSaveCreditCard] = useState(false);
  const [agree, setAgree] = useState(false);
  //持卡人
  const [cdHolder, setcdHolder] = useState("");

  //信用卡號
  const [cardNumberFirst, setCardNumberFirst] = useState("");
  const [cardNumberSecond, setCardNumberSecond] = useState("");
  const [cardNumberThird, setCardNumberThird] = useState("");
  const [cardNumberForth, setCardNumbeForth] = useState("");

  //期限
  const [cdMonth, setcdMonth] = useState("");
  const [cdYear, setcdYear] = useState("");

  //安全碼
  const [safeCode, setSafeCode] = useState("");

  //卡別
  const [association, setassociation] = useState("VISA");

  //地址
  const [billCity, setBillCity] = useState("");
  const [billDistrict, setBillDistrict] = useState("");
  const [billPostCode, setBillPostCode] = useState("");
  const [billAddress, setBillAddress] = useState("");

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
      case "cdHolder":
        setcdHolder(event.target.value);
        break;
      case "isDefault":
        setisDefault(event.target.value);
        break;
    };
  }
  const changeSafeCode = (e) => {
    //先取出數字陣列
    const inputNumList = e.target.value.match(/\d+/g);
    // console.log("inputNumList", inputNumList);

    //將陣列合併成字串
    const insertRawNum = !!inputNumList ? inputNumList.join("") : "";
    // console.log("insertRawNum", insertRawNum);

    //取出前四個數字
    const insertNum = !!insertRawNum.match(/\d{1,3}/g)
      ? insertRawNum.match(/\d{1,3}/g)[0]
      : "";
    setSafeCode(insertNum)
  }
  const paymentdata = {
    payment: payment,
    // saveCreditCard: saveCreditCard,
    // safeCode: safeCode,
    userId: UserInfo.userId,
    // !! missing userId !!
    cdHolder: cdHolder,
    cdMonth: cdMonth,
    cdYear: cdYear,
    cdNumber: `${cardNumberFirst}-${cardNumberSecond}-${cardNumberThird}-${cardNumberForth}`,
    association: association,
    billAddressCity: billCity,
    billAddressPostCode: billPostCode,
    billAddressDistrict: billCity,
    billAddressStreet: billAddress,
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
    // history.push('/orders/orderdetail')
  };

  return (
    <MainContainer>
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

          {/* 卡別 */}
          <CreditCardAssociation
            association={association}
            setAssociation={setassociation}
          />

          <CreditCardNumber
            cardNumberFirst={cardNumberFirst}
            cardNumberSecond={cardNumberSecond}
            cardNumberThird={cardNumberThird}
            cardNumberForth={cardNumberForth}
            setCardNumberFirst={setCardNumberFirst}
            setCardNumberSecond={setCardNumberSecond}
            setCardNumberThird={setCardNumberThird}
            setCardNumbeForth={setCardNumbeForth}
          />
          <div className='d-flex align-items-center payment-safe-code'>
            <FormControl>
              <InputLabel htmlFor="my-input">安全碼*</InputLabel>
              <Input id="my-input" value={safeCode} onChange={changeSafeCode} aria-describedby="my-helper-text" />
            </FormControl>
            <p> (3碼) </p>
          </div>

          <div className='subcontent-date'>到期日期
            <div className='credit-card-date'>
              <CreditCardExpiration
                cdMonth={cdMonth}
                cdYear={cdYear}
                setCdMonth={setcdMonth}
                setCdYear={setcdYear}
              />
            </div>
          </div>
        </div>
        <div className='order-payment-subcontent subcontent-right'>
          <FormControl>
            <InputLabel htmlFor="my-input">持有人*</InputLabel>
            <Input
              name="cdHolder"
              onChange={handleChange}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Address
            myCity={billCity}
            myPostCode={billPostCode}
            myAddress={billAddress}
            setCities={setBillCity}
            setDistricts={setBillDistrict}
            setPostCode={setBillPostCode}
            setAddress={setBillAddress}
          />
          <div className='credit-card-checkedBtn d-flex align-items-center' onClick={() => setSaveCreditCard(!saveCreditCard)}>
            {saveCreditCard ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <p>使用已儲存的信用卡資訊</p>
          </div>
          <div className='credit-card-checkedBtn d-flex align-items-center' onClick={() => setAgree(!agree)}>
            {agree ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <p>我確認上述資訊完整無誤並同意上述資訊<br />可以被InSense作為商業用途使用</p>
          </div>
          <a
            className="confirm-btn"
            href="#"
            onClick={(e) => (e.preventDefault(), addordersToSever())}
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
