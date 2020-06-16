import React from 'react'
import './accountSideBar.scss'

const AccountSideBar = () => {
  return (
    <div className='side-bar-wrapper'>
      <h2>我的帳戶</h2>
      <ul className='accountMenu'>
        <li>帳戶資訊</li>
        <li>我的訂單</li>
        <li>我的課程</li>
        <li>付款資訊</li>
        <li>我的優惠券</li>
        <li>願望清單</li>
        <li>客服留言</li>
        <li>登出</li>
      </ul>
    </div>
  )
}

export default AccountSideBar