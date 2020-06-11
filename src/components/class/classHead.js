import React from 'react'
import classBaner from '../../images/classBanner.jpeg'
import '../../styles/class/classHead.scss'

const ClassHead = () => {
  return (
    <>
      <div className='class-head d-flex align-items-center'>
        <div className='headLeft'>
          <img className='object-fit-cover' src={classBaner} />
        </div>
        <div className='headRight'>
          <p className='headTitle'>課程體驗</p>
          <p className='headContent'>InSense提供客製化香水<br />
            體驗課程，與您一起感受香氛</p>
        </div>
      </div>
    </>
  )
}

export default ClassHead