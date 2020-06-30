import React, { useState } from 'react'
import MainContainer from '../../components/mainContainer'
import './orderPayMent.scss'
import FormInput from '../../components/FormInput/FormInput'
const OrderPayMent = () => {
  const [cardName, setCardName] = useState('')
  const [cardNum, setCardNum] = useState('')
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
        <div>
          <img src='/images/class/class1.jpg' />
        </div>
        <div>
          <div>付款方式*：</div>
          <div className='d-flex flex-grow'>
            <label>
              <input name='payment' type='radio' value='Credit' />
              Credit
            </label>
            <label>
              <input name='payment' type='radio' value='Paypal' />
              Paypal
            </label>
            <label>
              <input name='payment' type='radio' value='Stripe' />
              Stripe
            </label>
          </div>
          <FormInput type='text' value={cardName} label='持卡人姓名*' required />
          <FormInput type='text' value={cardNum} label='卡號*' required />
          <div>到期日期</div>
          <div className='d-flex align-items-center'>
            <FormInput type='text' name='month' value='' label='Month' required />
            <FormInput type='text' name='year' value='' label='Year' required />
          </div>
        </div>
        <div></div>
      </div>
    </MainContainer>
  )
}

export default OrderPayMent