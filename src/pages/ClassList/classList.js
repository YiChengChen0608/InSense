import React from 'react';
import ClassHead from '../../components/ClassHead/classHead'
import classBanner from '../../images/classBanner.jpeg'
import ClassCard from '../../components/ClassCard/classCard'
import classImg from '../../images/class1.jpg'
import MainContainer from '../../components/mainContainer'
import './classList.scss'
const ClassList = () => {
  return (
    <>
      <ClassHead src={classBanner} title={'課程體驗'} content={`InSense提供客製化香水體驗課程`} content2={'與您一起感受香氛'} />
      <MainContainer otherClass="class-list-container d-flex flex-wrap justify-content-center">
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
        <ClassCard src={classImg} date={'2020/12/31'} Name={'LFP 客製化香水課程預約'} />
      </MainContainer>
    </>
  )
}

export default ClassList