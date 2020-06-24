import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
// import MyBreadcrumb from "../../components/MyBreadCrumb/myBreadCrumb";
import MainContainer from "../../components/mainContainer";
import ItemImg from "../../components/ItemImg/itemImg";
import ItemInfo from "../../components/ItemInfo/itemInfo";
import ItemSuggest from "../../components/ItemSuggest/itemSuggest";
import "./itemDetails.scss";

const ItemDetails = (props) => {
    const itemId = props.match.params.itemId;
    // console.log(itemId);
    const [itemImgData, setItemImgData] = useState([]);
    const [itemInfosData, setItemInfosData] = useState({});
    const [itemWishList, setitemWishList] = useState([]);

    //僅做擷取資料用途
    const fetchItemData = async (itemId) => {
        const res = await fetch(`http://localhost:3030/itemdetail/${itemId}`);
        const data = await res.json();
        console.log("data", data);
        return data;
    };

    useEffect(() => {
        (async () => {
            // 獲得資料data
            const rawData = (await fetchItemData(itemId))[0];
            console.log(rawData);

            //img
            const newArray = [rawData.itemImg];
            if (rawData.itemImg2 && rawData.itemImg2 != "null") {
                newArray.push(rawData.itemImg2);
            }
            //info
            // const infoData = rawData;

            setItemImgData(newArray);
            setItemInfosData(rawData);
        })();
    }, []);

    useEffect(() => {
        console.log(itemWishList);
    }, [itemWishList]);

    return (
        <>
            <div className="item-details-main-content">
                <div className="breadcrumb-wrapper"></div>
                {/* <MyBreadcrumb></MyBreadcrumb> */}
                <div className="item-details-container d-flex">
                    {itemImgData.length ? (
                        <ItemImg
                            itemimg={`http://localhost:3030/images/items/${itemImgData[0]}.png`}
                            itemimg1={`http://localhost:3030/images/items/${itemImgData[0]}.png`}
                            itemimg2={
                                itemImgData[1]
                                    ? `http://localhost:3030/images/items/${itemImgData[1]}.png`
                                    : false
                            }
                        />
                    ) : (
                        ""
                    )}
                    <ItemInfo
                        itemName={itemInfosData.itemName}
                        itemSize={itemInfosData.itemSize}
                        itemPrice={`NT$ ${itemInfosData.itemPrice}`}
                        itemDiscription={itemInfosData.discription}
                        fragranceDiscription={itemInfosData.fragranceDetails}
                    />
                </div>
                <div></div>
                <div>
                    <ItemSuggest></ItemSuggest>
                </div>
            </div>
        </>
    );
};

export default withRouter(ItemDetails);
