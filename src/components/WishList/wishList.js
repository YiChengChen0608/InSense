import React, { useState, useEffect } from "react";
import "./wishList.scss";

//引入component
import WishListCard from "../WishListCard/wishListCard";

const WishList = (props) => {
    const { user } = props;
    const [myWishList, setMyWishList] = useState([]);

    //取得願望清單
    // const fetchWishList1 = async (brandOrCategory, name) => {
    //     const res = await fetch(
    //         `http://localhost:3030/itemlist/wishlist/${brandOrCategory}/${name}`,
    //         { credentials: "include" }
    //     );
    //     const dataWish = await res.json();
    //     console.log("dataWish", dataWish);
    //     return dataWish;
    // };

    return (
        <>
            <div className="list-container">
                <h2 className="list-title ">我的願望清單</h2>
                <div className="card-group-container d-flex justify-content-center">
                    <WishListCard />
                    {/* {myWishList.length ? (
                    myWishList.map((el, index) => {
                        return (
                            <WishListCard
                                key={el.id}
                                id={el.id}
                                association={el.association}
                                cdMonth={el.cdMonth}
                                cdYear={el.cdYear}
                                billAddressCity={el.billAddressCity}
                                billAddressPostCode={el.billAddressPostCode}
                                billAddressDistrict={el.billAddressDistrict}
                                billAddressStreet={el.billAddressStreet}
                                cdLastFourNumber={el.cdLastFourNumber}
                                isDefault={el.isDefault}
                                setCreditCardList={setCreditCardList}
                            />
                        );
                    })
                ) : (
                    <p>沒有收藏的商品</p>
                )} */}
                </div>
            </div>
        </>
    );
};
export default WishList;
