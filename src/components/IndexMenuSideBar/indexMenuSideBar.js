import React from 'react'
import './indexMenuSideBar.scss'
import IndexMenuItem from '../IndexMenuItem/indexMenuItem'
const IndexMenuSideBar = ({ subMenu, state }) => {
  return (
    <div className={`position-absolute sub-menu d-flex align-items-center justify-content-around ${state ? 'left-sub-menu-open' : ''}`}>
      <ul className='position-absolute'>
        {subMenu.map((item, index) =>
          <IndexMenuItem key={index} menuItem={item} />
        )}
      </ul>
    </div>
  )
}

export default IndexMenuSideBar