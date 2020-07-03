import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./wishList.scss";

//Redux
import { userLogin, userLogOut } from "../../Redux/user/userAction";

//引入component
import WishListCard from "../WishListCard/wishListCard";

const WishList = (props) => {
    const { user } = props;
    const [myWishList, setMyWishList] = useState([]);

    //取得願望清單
    const fetchAllWishList = async (brandOrCategory, name) => {
        const res = await fetch(`http://localhost:3030/users/wishlist`, {
            credentials: "include",
        });
        const dataWish = await res.json();

        // console.log("dataWish", dataWish);
        return dataWish;
    };

    useEffect(() => {
        if (user.logInStatus) {
            (async () => {
                const wishList = await fetchAllWishList();
                console.log("itemsWished", wishList.itemsWished);

                // reset user
                wishList.logInStatus
                    ? userLogin(wishList.userInfo)
                    : userLogOut();

                if (wishList.logInStatus) {
                    setMyWishList(wishList.itemsWished);
                }
            })();
        } else {
            setMyWishList([]);
        }
    }, [user.logInStatus]);

    return (
        <>
            <div className="list-container">
                <h2 className="list-title ">我的願望清單</h2>
                <div className="card-group-container d-flex flex-wrap">
                    {myWishList.length ? (
                        myWishList.map((el) => {
                            return (
                                <WishListCard
                                    key={el.itemId}
                                    itemId={el.itemId}
                                    itemimg={`http://localhost:3030/images/items/${el.itemImg}.png`}
                                    itemName={el.itemName}
                                    itemPrice={el.itemPrice}
                                />
                            );
                        })
                    ) : (
                        <p>沒有收藏商品</p>
                    )}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store) => {
    return { user: store.user, userToggle: store.nav };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userLogin, userLogOut }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
