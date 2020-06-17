import React from "react";
import ClassHead from "../components/ClassHead/classHead";
import MainContainer from "../components/mainContainer";
import DetailContent from "../components/ClassDetailContent/detailContent";
import DetailFooter from "../components/ClassDetailFooter/detailFooter";

const ClassDetail = () => {
    const storeInfo = {
        title: "台北松菸門市",
        address: "台北市信義區忠孝東路四段553巷12號",
        phone: "連絡電話: 02-27657272",
    };
    const classService = {
        price: "客製化香水服務 NTD$1500",
        info:
            "客製化香水服務包含：客製化100ml香水乙瓶.材料費及專人服務調香課程",
    };
    const classDescription = {
        content1:
            "客製化香水等待製作時間約21個工作天(不含假日)，工廠按照您的配方等比單瓶製作",
        content2:
            "一般件約需一個月的等待時間若有送禮或出國須指定日期的顧客，建議使用加價$500 的急件服務",
        content3: "約五到七個工作天(不含假日)可至門市取貨。",
    };
    return (
        <>
            <ClassHead
                title={"LFP 客製化香水課程預約"}
                src="/images/banner/class1.jpg"
            />
            <MainContainer>
                <DetailContent
                    info={storeInfo}
                    service={classService}
                    description={classDescription}
                />
                <DetailFooter />
            </MainContainer>
        </>
    );
};

export default ClassDetail;
