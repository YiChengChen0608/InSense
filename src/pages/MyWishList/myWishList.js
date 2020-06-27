import React from "react";
import "./myWishList.scss";
import MainContainer from "../../components/mainContainer";
import AccountSideBar from "../../components/AccountSideBar/accountSideBar";
import WishList from "../../components/WishList/wishList";

const MyWishList = () => {
    return (
        <MainContainer>
            <div className="wish-list-wrapper d-flex">
                <AccountSideBar />
                <WishList />
            </div>
        </MainContainer>
    );
};
export default MyWishList;
