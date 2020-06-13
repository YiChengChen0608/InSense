import React from 'react';
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'
import '../styles/nav.scss'

const Nav = () => {
  return (
    <>
      <nav className='nav d-flex justify-content-between align-items-center'>
        <div className='leftItem'>
          <a href='javascript:;' role='button'><FiMenu /></a>
          <a href='javascript:;' role='button'><FiSearch /></a>
        </div>
        <p>InSense</p>
        <div className='rightItem'>
          <a href='javascript:;' role='button'><FiUser /></a>
          <a href='javascript:;' role='button'><FiShoppingCart /></a>
        </div>
      </nav>
    </>
  )
}

export default Nav