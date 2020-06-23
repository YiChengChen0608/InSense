import React from "react";
import ClassHead from "../../components/ClassHead/classHead";
import ClassCard from "../../components/ClassCard/classCard";
import MainContainer from "../../components/mainContainer";
import "./classList.scss";
const ClassList = () => {
  const classInfo = [
    {
      classId: 'C_0001',
      src: "/images/class/class1.jpg",
      date: '2020/12/01',
      Name: 'LFP 客製化香水課程預約',
    },
    {
      classId: 'C_0002',
      src: "/images/class/class2.jpg",
      date: '2020/12/02',
      Name: 'LFP 個人化香水調香工作坊',
    },
    {
      classId: 'C_0003',
      src: "/images/class/class3.jpg",
      date: '2020/12/03',
      Name: 'LFP星座幸運香味－門市小型工作坊',
    },
    {
      classId: 'C_0004',
      src: "/images/class/class4.jpg",
      date: '2020/12/04',
      Name: 'LFP 甜蜜情人節-門市小型工作坊',
    },
  ]

  return (
    <>
      <ClassHead
        src={"/images/banner/classBanner.jpeg"}
        title={"課程體驗"}
        content={`InSense提供客製化香水體驗課程`}
        content2={"與您一起感受香氛"}
      />
      <MainContainer otherClass="class-list-container d-flex flex-wrap justify-content-center">
        {classInfo.map((info, index) => <ClassCard key={index} src={info.src} date={info.date} Name={info.Name} classid={info.classId} />)}
      </MainContainer>
    </>
  );
};

export default ClassList;
