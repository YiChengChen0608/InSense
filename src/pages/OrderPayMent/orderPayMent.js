import React, { useState } from 'react'
import MainContainer from '../../components/mainContainer'
import './orderPayMent.scss'
import { Input, FormControl, InputLabel } from '@material-ui/core';

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
  const [cardName, setCardName] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [safeCode, setSafeCode] = useState('')

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
          <FormControl>
            <InputLabel htmlFor="my-input">卡號*</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <div className='subcontent-date'>到期日期
            <div className='d-flex credit-card-date'>
              <FormControl>
                <InputLabel htmlFor="my-input">Month*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="my-input">Year*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </div>
          </div>
        </div>
        <div className='order-payment-subcontent subcontent-right'>
          <FormControl>
            <InputLabel htmlFor="my-input">安全碼*</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <div className='credit-card-checkedBtn d-flex align-items-center' onClick={() => setSaveCreditCard(!saveCreditCard)}>
            {saveCreditCard ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <span>使用已儲存的信用卡資訊</span>
          </div>
          <div className='credit-card-checkedBtn' onClick={() => setAgree(!agree)}>
            {agree ? <FiCheckSquare className='order-payment-square' /> : <FiSquare className='order-payment-square' />}
            <span>我確認上述資訊完整無誤,並同意上述資訊可以被InSense作為商業用途使用</span>
          </div>
          <a className='confirm-btn' href='#' onClick={e => e.preventDefault()}>確認付款</a>
        </div>
      </div>
    </MainContainer>
  )
}

export default OrderPayMent