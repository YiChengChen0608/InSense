import React from "react";
import "./itemHead.scss";

const ItemHead = (props) => {
  return (
    <>
      <div className="item-head">
        <img className="object-fit-cover" src={props.src} />
      </div>
      <p className="brand-name">BYREDO</p>
      <p className="brand-content">
        Byredo 成立於 2006 年，設計充滿北歐時尚簡約的質感，
        品牌統一以白色作設計主調，予人清淡、純淨的感覺。
            </p>
    </>
  );
};

export default ItemHead;
