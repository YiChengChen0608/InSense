import React from "react";
import "./itemHead.scss";
// import { withRouter } from "react-router-dom";

const ItemHead = (props) => {
  return (
    <>
      <div className="item-head">
        <div className="item-head-banner">
          <img className="object-fit-cover" src={props.src} />
        </div>
        <h1 className="brand-name">BYREDO</h1>
        <p className="brand-content">
          Byredo 成立於 2006 年，設計充滿北歐時尚簡約的質感，
          品牌統一以白色作設計主調，予人清淡、純淨的感覺。
                </p>
      </div>
    </>
  );
};

export default ItemHead;
// export default withRouter(ItemHead);
