import React from 'react'
import '../styles/style.scss'

const MainContainer = (props) => {
  return (
    <div className={`${props.otherClass ? props.otherClass : ""} container`}>
      {props.children}
    </div>
  )
}

export default MainContainer