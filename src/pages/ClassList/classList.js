import React, { useState, useEffect } from "react";
import ClassHead from "../../components/ClassHead/classHead";
import ClassCard from "../../components/ClassCard/classCard";
import MainContainer from "../../components/mainContainer";
import "./classList.scss";
const ClassList = () => {
  const [classInfo, setClassInfo] = useState([])

  const fetchClassData = async () => {
    const res = await fetch('http://localhost:3030/class')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    (async () => {
      const data = await fetchClassData()
      setClassInfo(data)
    })()
  }, [])


  return (
    <>
      <ClassHead
        classImgDir={'banner'}
        classImg={"banner-class-list"}
        title={"課程體驗"}
        content={`InSense提供客製化香水體驗課程`}
        content2={"與您一起感受香氛"}
      />
      <MainContainer otherClass="class-list-container d-flex flex-wrap justify-content-center">
        {classInfo.map((info, index) => <ClassCard key={index} classImg={info.classImg} classTime={info.classTime} className={info.className} classId={info.classId} />)}
      </MainContainer>
    </>
  );
};

export default ClassList;
