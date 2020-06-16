import React from 'react'
import './indexNewClass.scss'

const IndexNewClass = (props) => {
  return (
    <div className='index-class-container d-flex'>
      <img src={props.src} />
      <div>
        <p>最新課程</p>
        <a className='text-center' role='button'>立即預約</a>
      </div>
    </div>
  )
}

export default IndexNewClass