import React from "react";
import ItemHead from "../../components/item/itemHead";
import itemBanner from "../../images/byredo-banner.png";
import ItemCard from "../../components/item/itemCard";
import itemImg1 from "../../images/P0001.png";
import itemImg2 from "../../images/P0002.png";
import itemImg3 from "../../images/P0003.png";
import itemImg4 from "../../images/P0004.png";
import Container from "../../components/container";
import "../../styles/item/itemList/itemList.scss";
const itemList = () => {
    return (
        <>
            <ItemHead src={itemBanner} />
            <Container otherClass="class-list-container d-flex flex-wrap justify-content-center">
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
            </Container>
        </>
    );
};

export default itemList;
