import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";

function SavedModel(props) {
    const [savedStatus, setIcoStatus] = useState(true);
    //點擊收藏按鈕
    const savedStatusData = (event, props) => {
        setIcoStatus(!savedStatus);
    };
    return (
        <>
            <span
                className={
                    savedStatus ? "saved-icon saved-filled" : "saved-icon"
                }
                onClick={(event) => savedStatusData(event, props)}
            ></span>
        </>
    );
}
export default SavedModel;
