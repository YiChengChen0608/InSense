import React from 'react'

const MainContent = (props) => {
  return (
    <div className='contain'>
      {props.children}
    </div>
  )
}

export default MainContent