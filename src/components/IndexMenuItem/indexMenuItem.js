import React from 'react'
import './indexMenuItem.scss'
import { FiChevronRight } from 'react-icons/fi'
import { Link, withRouter } from 'react-router-dom'

const IndexMenuItem = ({ changeState, menuItem }) => {
  return (
    <Link to={menuItem.pathUrl} ><li onClick={changeState} data-name={menuItem.name} className='d-flex align-items-center sub-menu-li'>{menuItem.itemName}<FiChevronRight className='chevron-right' /></li></Link>
  )
}
export default withRouter(IndexMenuItem)