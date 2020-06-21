import React from 'react'
import './classHead.scss'

const ClassHead = ({ classImgDir, classImg, title, content, content2 }) => {
  return (
    <>
      <div className="class-head d-flex flex-wrap align-items-center">
        <div className="headLeft">
          <img className="object-fit-cover" src={`http://localhost:3002/images/${classImgDir}/${classImg}.png`} />
        </div>
        <div className="headRight">
          <p className="headTitle">{title}</p>
          <p className="headContent">{content}</p>
          <p className="headContent">{content2}</p>
        </div>
      </div>
    </>
  );
};

export default ClassHead;
