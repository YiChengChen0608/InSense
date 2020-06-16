import React from 'react'
import '../IndexProductIntroL/indexProductIntroL.scss'
const IndexProductIntroR = (props) => {
  return (
    <div className='product-intro-container'>
      <div className='text-center product-title-container'>
        <h3>{props.title}</h3>
        <p>{props.intro}</p>
      </div>
      <div className='d-flex product-content-container'>
        <div>
          <p className="sub-intro">代表作：</p>
          <h3>{props.subTitle}</h3>
          <div className='intro-content-container'>
            <p>{props.subContent}</p>
          </div>
          <a className='text-center' role='button'>立即選購</a>
        </div>
        <div className='img-container'>
          <img src={props.src} />
        </div>
      </div>
    </div>
  )
}
export default IndexProductIntroR