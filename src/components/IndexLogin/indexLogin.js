import React from 'react'
import './indexLogin.scss'
const IndexLogin = () => {
  return (
    <>
      <div className='loginHeader d-flex'>
        <p>註冊會員 /  會員登入</p>
        <input type='text' placeholder='email*' />
        <input type='password' placeholder='password*' />
      </div>
      <div className='loginFooter text-center'>
        <a role='button'>登入</a>
        <a role='button'>註冊</a>
        <a role='button'>忘記密碼</a>
      </div>
    </>
  )
}

export default IndexLogin