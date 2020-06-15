import React, { useState, useEffect } from 'react'
import { FiMenu, FiSearch, FiUser, FiShoppingCart, FiX, FiChevronRight } from 'react-icons/fi'
import './nav.scss'
import IndexMenuItem from '../IndexMenuItem/indexMenuItem'
import IndexMenuSideBar from '../IndexMenuSideBar/indexMenuSideBar'
const Nav = () => {
  const [subMenu, setSubMenu] = useState([])
  // test info
  const menuItem = [
    { itemName: '代理品牌', name: 'brand' }, { itemName: '身體保養', name: 'body' },
    { itemName: '個人香氛', name: 'self' }, { itemName: '室內香氣', name: 'inside' }
  ]
  const brandItem = [
    { itemName: 'BYREDO', name: 'byredo' }, { itemName: 'DIPTYQUE', name: 'diptyque' }, { itemName: 'DIPTYQUE', name: 'diptyque' }
    , { itemName: 'DIPTYQUE', name: 'diptyque' }, { itemName: 'DIPTYQUE', name: 'diptyque' }, { itemName: 'DIPTYQUE', name: 'diptyque' }
  ]
  const bodyItem = [
    { itemName: '代理品牌', name: 'brand' }, { itemName: '代理品牌', name: 'brand' }
  ]
  const selfItem = [
    { itemName: 'BYREDO', name: 'byredo' }, { itemName: 'BYREDO', name: 'byredo' }, { itemName: 'BYREDO', name: 'byredo' }
  ]
  const insideItem = [
    { itemName: 'DIPTYQUE', name: 'diptyque' }, { itemName: 'DIPTYQUE', name: 'diptyque' }, { itemName: 'DIPTYQUE', name: 'diptyque' }
  ]

  //  event handler

  let changeSubMenu = (name) => {
    setSubMenu(name)
    document.querySelector('.sub-menu').style['left'] = '288px'
  }
  let leftSideBar = (event) => {
    switch (event.currentTarget.dataset.name) {
      case 'menu':
        document.querySelector('.menu-item').classList.remove('burger-close')
        document.querySelector('.menu-item').classList.add('burger-open')
        document.querySelector('.sub-menu').style['left'] = '0'
        break
      case 'search':
        document.querySelector('.search-block').classList.remove('burger-close')
        document.querySelector('.search-block').classList.add('burger-open')
        break
      case 'brand':
        changeSubMenu(brandItem)
        break
      case 'body':
        changeSubMenu(bodyItem)
        break
      case 'self':
        changeSubMenu(selfItem)
        break
      case 'inside':
        changeSubMenu(insideItem)
        break
    }
  }

  let burgerClose = (event) => {
    document.querySelector('.menu-item').classList.remove('burger-open')
    document.querySelector('.menu-item').classList.add('burger-close')
    document.querySelector('.search-block').classList.remove('burger-open')
    document.querySelector('.search-block').classList.add('burger-close')
    document.querySelector('.sub-menu').style['left'] = '-288px'
  }

  useEffect(() => {
  })

  return (
    <>
      <nav className='nav d-flex justify-content-between align-items-center'>
        {/* Menu  */}
        <div className='position-absolute menu-item d-flex align-items-center justify-content-around'>
          <div className='menu-title position-absolute d-flex align-items-center'>
            <span className='menu-close' onClick={burgerClose}><FiX /></span>
            <p className='menu-char'>MENU</p>
          </div>
          <ul>
            {menuItem.map((item, index) => {
              return <IndexMenuItem menuItem={item} key={index} func={leftSideBar} />
            })}
          </ul>
          <ul>
            <li className='d-flex align-items-center'><FiChevronRight className='chevron-right' />關於我們</li>
            <li className='d-flex align-items-center'><FiChevronRight className='chevron-right' />幫助中心</li>
          </ul>
        </div>
        <IndexMenuSideBar array={subMenu} />
        {/* Search */}
        <div className='position-absolute search-block'>
          <div className='search-title position-absolute d-flex align-items-center'>
            <span className='menu-close' onClick={burgerClose}><FiX /></span>
            <p className='menu-char'>Search</p>
          </div>
          <div className='d-flex serach-input position-absolute'>
            <input type='text' placeholder='search' />
            <FiSearch />
          </div>
        </div>
        <div className='leftItem'>
          <a onClick={leftSideBar} role='button' data-name='menu'><FiMenu /></a>
          <a onClick={leftSideBar} role='button' data-name='search'><FiSearch /></a>
        </div>
        <p>InSense</p>
        <div className='rightItem'>
          <a onClick='' role='button'><FiUser /></a>
          <a onClick='' role='button'><FiShoppingCart /></a>
        </div>
      </nav>
    </>
  )
}

export default Nav