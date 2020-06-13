import React from 'react'
import '../styles/style.scss'

const MainContent = (props) => {
  return (
    <div className='main-container d-flex'>
      <div className='contain'>
        {props.children}
      </div>
    </div>
  )
}

export default MainContent