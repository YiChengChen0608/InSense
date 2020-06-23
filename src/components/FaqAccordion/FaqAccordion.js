import React, { useState, useEffect } from "react";
import "./FaqAccordion.scss";
import { FiChevronUp } from "react-icons/fi";


const FaqAccordion = (props) => {
  const [titleDropDownToggle, setTitleDropDownToggle] = useState(false);
  const [contentDropDownToggle, setContentDropDownToggle] = useState(false);
  const [plusMinusCollapsed, setPlusMinusCollapsed] = useState(true);
  const [arrowIconActive, setArrowIconActive] = useState(false);
  // const [faq, setFaq] = useState(false);

  // const fetchFaqData = async () => {
  //   const res = await fetch('http://localhost:3030/faq')
  //   const data = await res.json()
  //   return data
  // }

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchFaqData()
  //     setFaq(data)
  //   })()
  // }, [])

  // const faqTitle = (props) => {
  //   return (
  //     <div className='d-flex class-item text-center'>
  //       <p>{props.classInfo.classTime}</p>
  //       <p>{props.classInfo.bookTime}</p>
  //       <p>{props.classInfo.classCategoryName}</p>
  //       <p>{props.classInfo.className}</p>
  //       <p>{props.classInfo.classPrice}</p>
  //       <p>{props.classInfo.bookQty}</p>
  //     </div>
  //   )
  // }

  // const initialState = [false]
  // initialState.push(false)

  // return (
  //   <>

  //   {
  //     faq.map((item,index )=>{
  //       return
  //     })
  //   }

      <div className="wrapper">
        <h1
          onClick={() => (
            setTitleDropDownToggle(!titleDropDownToggle),
            setContentDropDownToggle(false),setArrowIconActive(!arrowIconActive)
          )}
          className="accordion-header"
        >
          我的帳號<FiChevronUp className={`arrow-icon-position arrow-icon ${
            arrowIconActive ? "arrow-icon-active" : ""
          }`}
          />
        </h1>



        

        <div className="content-title-position">
          <div
            onClick={() => (
              setContentDropDownToggle(!contentDropDownToggle),
              setPlusMinusCollapsed(!plusMinusCollapsed)
            )}
            className={`content-title-position content-hidden ${
              titleDropDownToggle ? "active" : ""
            }`}
          >

          
            <span
              className={`plus-minus-toggle content-title ${
                plusMinusCollapsed ? "collapsed" : ""
              }`}
            >
              如何變更您的密碼？
            </span>
          </div>
        </div>
        <div
          className={`content-position content content-hidden ${
            contentDropDownToggle ? "active" : ""
          }`}
        >
          <p>
            請點選『我的帳戶』中的『變更您的個人資料』即可重新設定，密碼更改完畢後，請再重新登入。
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
