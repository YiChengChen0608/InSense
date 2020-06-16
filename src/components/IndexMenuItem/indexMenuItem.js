import React from 'react'
import './indexMenuItem.scss'
import { FiChevronRight } from 'react-icons/fi'


const IndexMenuItem = ({ changeState, menuItem }) => {
  return (
    <li onClick={changeState} data-name={menuItem.name} className='d-flex align-items-center sub-menu-li'>{menuItem.itemName}<FiChevronRight className='chevron-right' /></li>
  )
}
export default IndexMenuItem