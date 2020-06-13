import React from 'react';
import '../styles/style.scss'

const mainContainer = (props) => {
  return (
    <div className={`${props.otherClass} container`}>
      {props.children}
    </div>
  )
}

export default mainContainer