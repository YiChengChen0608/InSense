import React from "react";
import ClassHead from "../../components/ClassHead/classHead";
import ClassCard from "../../components/ClassCard/classCard";
import MainContainer from "../../components/mainContainer";
import "./classList.scss";
const ClassList = () => {
    return (
        <>
            <ClassHead
                src={"/images/banner/classBanner.jpeg"}
                title={"課程體驗"}
                content={`InSense提供客製化香水體驗課程`}
                content2={"與您一起感受香氛"}
            />
            <MainContainer otherClass="class-list-container d-flex flex-wrap justify-content-center">
                <ClassCard
                    src={"/images/banner/class1.jpg"}
                    date={"2020/12/31"}
                    Name={"LFP 客製化香水課程預約"}
                />
                <ClassCard
                    src={"/images/banner/class1.jpg"}
                    date={"2020/12/31"}
                    Name={"LFP 客製化香水課程預約"}
                />
                <ClassCard
                    src={"/images/banner/class1.jpg"}
                    date={"2020/12/31"}
                    Name={"LFP 客製化香水課程預約"}
                />
                <ClassCard
                    src={"/images/banner/class1.jpg"}
                    date={"2020/12/31"}
                    Name={"LFP 客製化香水課程預約"}
                />
            </MainContainer>
        </>
    );
};

export default ClassList;
