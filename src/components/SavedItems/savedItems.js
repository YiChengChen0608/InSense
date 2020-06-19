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
                    // console.log(props.id);
                    setIconStatus(!savedStatus);
                    console.log("itemWishList", props.itemWishList);

                    //尋找儲存陣列props.itemWishList中有無該id
                    // console.log(props.itemWishList)
                    const findId = props.itemWishList.findIndex((el, index) => {
                        return el === props.id;
                    });
                    console.log(findId);

                    //如果陣列props.itemWishList中有該id則刪除，反之若無則增加該id
                    if (findId < 0) {
                        //把原本的陣列，再加上剛剛點的id
                        // console.log(props.itemWishList)
                        const newArray = [...props.itemWishList, props.id];
                        props.setitemWishList(newArray);
                    } else {
                        //只取陣列中id不符合props.id的
                        const newArray = props.itemWishList.filter(
                            (el, index) => {
                                return el !== props.id;
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
