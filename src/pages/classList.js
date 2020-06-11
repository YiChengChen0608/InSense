import React from 'react'
import ClassHead from '../components/class/classHead'
import ClassCard from '../components/class/classCard'
import classImg from '../images/class1.jpg'
import '../styles/class/classList/classList.scss'
const ClassList = () => {
  return (
    <>
      <ClassHead title={'課程體驗'} content={`InSense提供客製化香水體驗課程`} content2={'與您一起感受香氛'} />
      <div className="container d-flex flex-wrap justify-content-center">
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
      </div>
    </>
  )
}

export default ClassList