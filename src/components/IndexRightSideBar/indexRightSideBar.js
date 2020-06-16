import React, { Children } from 'react'
import './indexRightSideBar.scss'
import { FiX } from 'react-icons/fi'


const IndexRightSideBar = ({ state, btnClose, children }) => {
  return (
    <div className={`position-absolute right-side-bar d-flex align-items-center justify-content-around ${state ? 'right-side-bar-open' : ''}`}>
      <div className='menu-title position-absolute d-flex align-items-center'>
        <span onClick={btnClose}><FiX /></span>
      </div>
      {children}
    </div>
  )
}

export default IndexRightSideBar