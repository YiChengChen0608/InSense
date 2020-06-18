import React from 'react'
import './indexMenuSideBar.scss'
import IndexMenuItem from '../IndexMenuItem/indexMenuItem'
const IndexMenuSideBar = (props) => {
  return (
    <div className='position-absolute sub-menu d-flex align-items-center justify-content-around'>
      <ul className='position-absolute'>
        {props.array.map((item, index) => {
          return <IndexMenuItem key={index} menuItem={item} func={props.func} />
        })}
        {/* <li className='d-flex align-items-center'>代理品牌 <FiChevronRight className='chevron-right' /></li> */}
        {/* <li className='d-flex align-items-center'>身體保養 <FiChevronRight className='chevron-right' /></li>
        <li className='d-flex align-items-center'>個人香氛 <FiChevronRight className='chevron-right' /></li>
        <li className='d-flex align-items-center'>室內香氣 <FiChevronRight className='chevron-right' /></li> */}
        {/* <li className='d-flex align-items-center'>尋找禮物 <FiChevronRight className='chevron-right' /></li> */}
        {/* <li className='d-flex align-items-center'>體驗課程 <FiChevronRight className='chevron-right' /></li> */}
      </ul>
    </div>
  )
}

export default IndexMenuSideBar