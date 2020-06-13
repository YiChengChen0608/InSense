import React from 'react';
import '../styles/style.scss'

const Container = (props) => {
  return (
    <div className={`${props.otherClass} container`}>
      {props.children}
    </div>
  )
}

export default Container