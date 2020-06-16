import React from "react";
import ItemHead from "../../components/ItemHead/itemHead";
// import ItemFilter from "../../components/ItemFilter/itemFilter";
// import itemBanner from "../../images/byredo-banner.png";
import MyBreadcrumb from "../../components/myBreadCrumb";
import MainContainer from "../../components/mainContainer";
import ItemCard from "../../components/ItemCard/itemCard";
import "./itemList.scss";
const ItemList = () => {
    return (
        <>
            <ItemHead src="/images/banner/byredo-banner.png" />
            {/* <ItemFilter /> */}
            <MainContainer otherClass="item-list-container d-flex flex-wrap justify-content-center">
                <ItemCard
                    src="/images/items/P0001.png"
                    Name={"BYREDO 詩性既視淡香精"}
                    Price={"NT$3900"}
                />
                <ItemCard
                    src="/images/items/P0002.png"
                    Name={"BYREDO 光合假期淡香精"}
                    Price={"NT$3900"}
                />
                <ItemCard
                    src="/images/items/P0003.png"
                    Name={"BYREDO 無人之境淡香精"}
                    Price={"NT$3900"}
                />
                <ItemCard
                    src="/images/items/P0004.png"
                    Name={"BYREDO 北國之春淡香精"}
                    Price={"NT$3900"}
                />
                <ItemCard
                    src="/images/items/P0005.png"
                    Name={"BYREDO 週日之香淡香精"}
                    Price={"NT$6200"}
                />
                <ItemCard
                    src="/images/items/P0006.png"
                    Name={"BYREDO 吉普賽之水淡香精"}
                    Price={"NT$6200"}
                />
                <ItemCard
                    src="/images/items/P0007.png"
                    Name={"BYREDO 夜幕玫瑰淡香精"}
                    Price={"NT$6200"}
                />
                <ItemCard
                    src="/images/items/P0008.png"
                    Name={"BYREDO 鬱金香淡香精"}
                    Price={"NT$6200"}
                />
            </MainContainer>
        </>
    );
};

export default ItemList;
