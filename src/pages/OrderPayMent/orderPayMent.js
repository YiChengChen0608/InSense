import React, { useState } from 'react'
import MainContainer from '../../components/mainContainer'
import './orderPayMent.scss'
import { Input, FormControl, InputLabel } from '@material-ui/core';
import CreditCardNumber from '../../components/CreditCardNumber/creditCardNumber'
import CreditCardExpiration from '../../components/CreditCardExpiration/creditCardExpiration'


import {
  FiCircle,
  FiCheckCircle,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";


const OrderPayMent = () => {
  const [payment, setPayment] = useState('')
  const [saveCreditCard, setSaveCreditCard] = useState(false)
  const [agree, setAgree] = useState(false)

  //信用卡號
  const [cardNumberFirst, setCardNumberFirst] = useState("");
  const [cardNumberSecond, setCardNumberSecond] = useState("");
  const [cardNumberThird, setCardNumberThird] = useState("");
  const [cardNumberForth, setCardNumbeForth] = useState("");

  //期限
  const [cdMonth, setCdMonth] = useState("");
  const [cdYear, setCdYear] = useState("");

  //安全碼
  const [safeCode, setSafeCode] = useState('')

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

  const changePayment = (e) => {
    setPayment(e.target.value)
  }
  return (
    <MainContainer>
      <div className='text-center position-relative order-payment-head'>
        <div className='position-absolute order-payment-title'>付款資訊</div>
        <div className='order-payment-step'>
          <a href='#' onClick={(e) => e.preventDefault()}>寄送資訊 </a> ＞
          <a href='#' onClick={(e) => e.preventDefault()}>付款資訊 </a> ＞
          <a href='#' onClick={(e) => e.preventDefault()}>訂單明細</a>
        </div>
      </div>
      <div className='d-flex order-payment-content'>
        <div className='order-payment-subcontent subcontent-left'>
          <img src='/images/class/class1.jpg' />
        </div>
        <div className='order-payment-subcontent subcontent-center'>
          <div className='d-flex subcontent-payment-title'>付款方式*：
            <label className='d-flex flex-grow align-items-center'>
              <input className="display-none" name='payment' type='radio' value='Credit' onChange={changePayment} />
              {payment === 'Credit' ? <FiCheckCircle className='order-payment-circle' /> : <FiCircle className='order-payment-circle' />}
              Credit
            </label>
            <label className='d-flex flex-grow align-items-center'>
              <input className="display-none" name='payment' type='radio' value='Paypal' onChange={changePayment} />
              {payment === 'Paypal' ? <FiCheckCircle className='order-payment-circle' /> : <FiCircle className='order-payment-circle' />}
              Paypal
            </label>
            <label className='d-flex flex-grow align-items-center'>
              <input className="display-none" name='payment' type='radio' value='Stripe' onChange={changePayment} />
              {payment === 'Stripe' ? <FiCheckCircle className='order-payment-circle' /> : <FiCircle className='order-payment-circle' />}
              Stripe
            </label>
          </div>
          <FormControl>
            <InputLabel htmlFor="my-input">持卡人姓名*</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
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
          <div className='subcontent-date'>到期日期
            <div className='credit-card-date'>
              <CreditCardExpiration
                cdMonth={cdMonth}
                cdYear={cdYear}
                setCdMonth={setCdMonth}
                setCdYear={setCdYear}
              />
            </div>
          </div>
        </div>
        <div className='order-payment-subcontent subcontent-right'>
          <div className='d-flex align-items-center payment-safe-code'>
            <FormControl>
              <InputLabel htmlFor="my-input">安全碼*</InputLabel>
              <Input id="my-input" value={safeCode} onChange={changeSafeCode} aria-describedby="my-helper-text" />
            </FormControl>
            <p> (3碼) </p>
          </div>
          <div className='credit-card-checkedBtn d-flex align-items-center' onClick={() => setSaveCreditCard(!saveCreditCard)}>
            {saveCreditCard ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <p>使用已儲存的信用卡資訊</p>
          </div>
          <div className='credit-card-checkedBtn d-flex align-items-center' onClick={() => setAgree(!agree)}>
            {agree ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <p>我確認上述資訊完整無誤並同意上述資訊<br />可以被InSense作為商業用途使用</p>
          </div>
          <a className='confirm-btn' href='#' onClick={e => e.preventDefault()}>確認付款</a>
        </div>
      </div>
    </MainContainer>
  )
}

export default OrderPayMent