import React, { useEffect } from "react";
import ClassHead from "../components/ClassHead/classHead";
import MainContainer from "../components/mainContainer";
import DetailContent from "../components/ClassDetailContent/detailContent";
import DetailFooter from "../components/ClassDetailFooter/detailFooter";
import { withRouter } from "react-router-dom";

const ClassDetail = ({ match }) => {
  console.log(match.params.classid)
  const storeInfo = [
    {
      classId: 'C_0001',
      classTitle: 'LFP 客製化香水課程預約',
      imgSrc: '/images/class/class1.jpg',
      title: "台北松菸門市",
      address: "台北市信義區忠孝東路四段553巷12號",
      phone: "連絡電話: 02-27657272",
      price: "客製化香水服務 NTD$1500",
      info: "客製化香水服務包含：客製化100ml香水乙瓶.材料費及專人服務調香課程",
      content: `客製化香水等待製作時間約21個工作天(不含假日)，工廠按照您的配方等比單瓶製作\n
    ,一般件約需一個月的等待時間若有送禮或出國須指定日期的顧客，建議使用加價$500 的急件服務,
    約五到七個工作天(不含假日)可至門市取貨。`,
      date: '2020/12/01'
    },
    {
      classId: 'C_0002',
      classTitle: 'LFP 客製化香水課程預約',
      imgSrc: '/images/class/class2.jpg',
      title: "台北松菸門市",
      address: "台北市信義區忠孝東路四段553巷12號",
      phone: "連絡電話: 02-27657272",
      price: "客製化香水服務 NTD$2500",
      info: "客製化香水服務包含：客製化100ml香水乙瓶.材料費及專人服務調香課程",
      content: `客製化香水等待製作時間約21個工作天(不含假日)，工廠按照您的配方等比單瓶製作\n
    ,一般件約需一個月的等待時間若有送禮或出國須指定日期的顧客，建議使用加價$500 的急件服務,
    約五到七個工作天(不含假日)可至門市取貨。`,
      date: '2020/12/02'
    },
    {
      classId: 'C_0003',
      classTitle: 'LFP 客製化香水課程預約',
      imgSrc: '/images/class/class3.jpg',
      title: "台北松菸門市",
      address: "台北市信義區忠孝東路四段553巷12號",
      phone: "連絡電話: 02-27657272",
      price: "客製化香水服務 NTD$3500",
      info: "客製化香水服務包含：客製化100ml香水乙瓶.材料費及專人服務調香課程",
      content: `客製化香水等待製作時間約21個工作天(不含假日)，工廠按照您的配方等比單瓶製作\n
    ,一般件約需一個月的等待時間若有送禮或出國須指定日期的顧客，建議使用加價$500 的急件服務,
    約五到七個工作天(不含假日)可至門市取貨。`,
      date: '2020/12/03'
    }]

  return (
    <>
      {storeInfo.filter(info => info.classId === match.params.classid).map((classInfo, index) => {
        return (
          <>
            <ClassHead
              key={index}
              title={classInfo.classTitle}
              src={classInfo.imgSrc}
            />
            <MainContainer>
              <DetailContent storeInfo={classInfo} />
              <DetailFooter date={classInfo.date} />
            </MainContainer>
          </>
        )
      })}
    </>

  );
};

export default withRouter(ClassDetail);
