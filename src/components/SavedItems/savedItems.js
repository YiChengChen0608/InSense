import React, { useState } from "react";
import "./savedItems.scss";
import { FiBookmark } from "react-icons/fi";

function SavedItems(props) {
    const [savedStatus, setIconStatus] = useState(false);
    //點擊收藏按鈕
    // const savedStatusData = (event, props) => {
    //     setIcoStatus(!savedStatus);
    // };
    return (
        <>
            <FiBookmark
                className={`saved-icon ${
                    savedStatus ? "saved-icon saved-filled" : "saved-icon"
                } `}
                onClick={(event) => {
                    // console.log("itemId", props.itemId);
                    setIconStatus(!savedStatus);
                    // console.log("itemWishList", props.itemWishList);

                    //尋找儲存陣列props.itemWishList中有無該itemId
                    // console.log(props.itemWishList)
                    const findId = props.itemWishList.findIndex((el, index) => {
                        return el === props.itemId;
                    });
                    console.log(findId);

                    //如果陣列props.itemWishList中有該itemId則刪除，反之若無則增加該itemId
                    if (findId < 0) {
                        //把原本的陣列，再加上剛剛點的itemId
                        // console.log(props.itemWishList)
                        const newArray = [...props.itemWishList, props.itemId];
                        // console.log(newArray);
                        props.setitemWishList(newArray);
                    } else {
                        //只取陣列中itemId不符合props.itemId的
                        const newArray = props.itemWishList.filter(
                            (el, index) => {
                                return el !== props.itemId;
                            }
                        );
                        props.setitemWishList(newArray);
                    }
                }}
            />
        </>
    );
}
export default SavedItems;
