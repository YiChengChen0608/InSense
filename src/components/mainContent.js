import React from 'react'
import '../styles/style.scss'

const MainContent = (props) => {
  return (
    <div className='main-container'>
      {props.children}
    </div>
  )
}

export default MainContent