import React, { useState, useEffect } from "react";
import ItemHead from "../../components/ItemHead/itemHead";
// import ItemFilter from "../../components/ItemFilter/itemFilter";
// import itemBanner from "../../images/byredo-banner.png";
import MyBreadcrumb from "../../components/myBreadCrumb";
import MainContainer from "../../components/mainContainer";
import ItemCard from "../../components/ItemCard/itemCard";
import "./itemList.scss";
import ItemCardData from "./itemCard.data";
const ItemList = () => {
    const [itemCardData, setItemCardData] = useState(ItemCardData);
    const [itemWishList, setitemWishList] = useState([]);

    // console.log(itemCardData);
    useEffect(() => {
        console.log(itemWishList);
    });

    return (
        <>
            <ItemHead src="/images/banner/byredo-banner.png" />
            {/* <ItemFilter /> */}
            <MainContainer otherClass="item-list-container d-flex flex-wrap ">
                {itemCardData[0].items.map((el, index) => {
                    return (
                        <ItemCard
                            id={el.id}
                            src={el.src}
                            Name={el.name}
                            Price={el.price}
                            itemWishList={itemWishList}
                            setitemWishList={setitemWishList}
                        />
                    );
                })}
            </MainContainer>
        </>
    );
};

export default ItemList;
