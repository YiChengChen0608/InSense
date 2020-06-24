import React, { useState, useEffect, useCallback } from "react";
import { withRouter, useParams, Link } from "react-router-dom";
import ItemHead from "../../components/ItemHead/itemHead";
// import MyBreadcrumb from "../../components/MyBreadCrumb/myBreadCrumb";
// import ItemFilter from "../../components/ItemFilter/itemFilter";
import MainContainer from "../../components/mainContainer";
import ItemCard from "../../components/ItemCard/itemCard";
import "./itemList.scss";
// import ItemCardData from "./itemCard.data";
const ItemList = (props) => {
    const [itemCardData, setItemCardData] = useState([]);
    const [itemHeadData, setItemHeadData] = useState([]);
    const [itemWishList, setitemWishList] = useState([]);
    //拿到網址上的 ":brandName"參數
    const brandOrCategory = useParams().brandOrCategory;
    const name = useParams().Name;

    //僅做擷取資料用途
    const fetchCardData = useCallback(async (brandOrCategory, name) => {
        // const brand = "chanel";
        // console.log(brand);
        const res = await fetch(
            `http://localhost:3030/itemlist/${brandOrCategory}/${name}`
        );
        const data = await res.json();
        console.log("data", data);
        return data;
    }, []);

    useEffect(() => {
        (async () => {
            //1. 獲得資料data
            const rawData = await fetchCardData(brandOrCategory, name);
            const headData = rawData[0]; //標題資料
            const cardData = rawData[1]; //卡片資料
            setItemHeadData(headData);
            setItemCardData(cardData);
            console.log("cardData", cardData);
            console.log("headData", headData);
        })();
        // console.log("born");
    }, [brandOrCategory, name]);

    useEffect(() => {
        console.log(itemWishList);
    }, [itemWishList]);

    return (
        <>
            <ItemHead
                Banner={`http://localhost:3030/images/banner/${
                    itemHeadData.length
                        ? itemHeadData[0].brandBanner
                            ? itemHeadData[0].brandBanner
                            : itemHeadData[0].itemCategoryBanner
                            ? itemHeadData[0].itemCategoryBanner
                            : ""
                        : ""
                }.png`}
                Name={
                    itemHeadData.length
                        ? itemHeadData[0].brandName
                            ? itemHeadData[0].brandName
                            : itemHeadData[0].itemCategoryName
                            ? itemHeadData[0].itemCategoryName
                            : ""
                        : ""
                }
                Discription={
                    itemHeadData.length
                        ? itemHeadData[0].brandDiscription
                            ? itemHeadData[0].brandDiscription
                            : ""
                        : ""
                }
            />
            {/* <ItemFilter /> */}
            <MainContainer>
                <div className="item-list-container d-flex flex-wrap justify-content-center">
                    {itemCardData.length
                        ? itemCardData.map((el, index) => {
                              return (
                                  <ItemCard
                                      itemId={el.itemId}
                                      itemimg={`http://localhost:3030/images/items/${el.itemImg}.png`}
                                      itemName={el.itemName}
                                      itemPrice={`NT$ ${el.itemPrice}`}
                                      itemWishList={itemWishList}
                                      setitemWishList={setitemWishList}
                                  />
                              );
                          })
                        : ""}
                    {/* {itemCardData[0].items.map((el, index) => {
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
                })} */}
                </div>
            </MainContainer>
        </>
    );
};

export default withRouter(ItemList);
