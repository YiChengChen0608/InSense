import React from 'react'
import './indexMenuItem.scss'
import { FiChevronRight } from 'react-icons/fi'


const IndexMenuItem = (props) => {
  return (
    <li onClick={props.func} data-name={props.menuItem.name} className='d-flex align-items-center'>{props.menuItem.itemName}<FiChevronRight className='chevron-right' /></li>
  )
}
export default IndexMenuItem