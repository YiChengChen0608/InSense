import React from "react";
import ItemHead from "../../components/ItemHead/itemHead";
import itemBanner from "../../images/byredo-banner.png";
import MyBreadcrumb from "../../components/myBreadCrumb";
import ItemCard from "../../components/ItemCard/itemCard";
import itemImg1 from "../../images/P0001.png";
import itemImg2 from "../../images/P0002.png";
import itemImg3 from "../../images/P0003.png";
import itemImg4 from "../../images/P0004.png";
import itemImg5 from "../../images/P0005.png";
import itemImg6 from "../../images/P0006.png";
import itemImg7 from "../../images/P0007.png";
import itemImg8 from "../../images/P0008.png";
import MainContainer from "../../components/mainContainer";
import "./itemList.scss";
const ItemList = () => {
  return (
    <>
      <ItemHead src={itemBanner} />
      <MainContainer otherClass="class-list-container d-flex flex-wrap justify-content-center">
        <ItemCard
          src={itemImg1}
          Name={"BYREDO 詩性既視淡香精"}
          Price={"NT$3900"}
        />
        <ItemCard
          src={itemImg2}
          Name={"BYREDO 光合假期淡香精"}
          Price={"NT$3900"}
        />
        <ItemCard
          src={itemImg3}
          Name={"BYREDO 無人之境淡香精"}
          Price={"NT$3900"}
        />
        <ItemCard
          src={itemImg4}
          Name={"BYREDO 北國之春淡香精"}
          Price={"NT$3900"}
        />
        <ItemCard
          src={itemImg5}
          Name={"BYREDO 週日之香淡香精"}
          Price={"NT$6200"}
        />
        <ItemCard
          src={itemImg6}
          Name={"BYREDO 吉普賽之水淡香精"}
          Price={"NT$3900"}
        />
        <ItemCard
          src={itemImg7}
          Name={"BYREDO 夜幕玫瑰淡香精"}
          Price={"NT$6200"}
        />
        <ItemCard
          src={itemImg8}
          Name={"BYREDO 鬱金香淡香精"}
          Price={"NT$6200"}
        />
      </MainContainer>
    </>
  );
};

export default ItemList;
