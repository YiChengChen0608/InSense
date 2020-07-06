import React, { useState, useEffect } from "react";
import "./FaqAccordion.scss";
import { FiChevronUp } from "react-icons/fi";
import FaqAccordionTitle from "./FaqAccordionTitle";
import FaqAccordionSubtitle from "./FaqAccordionSubtitle";
import FaqAccordionHead from "../FaqAccordionHead/FaqAccordionHead"
import Nav from "../Nav/nav"
import Footer from "../Footer/footer"


// import { addBusinessDays } from "date-fns";

const FaqAccordion = (props) => {
  const [titleDropDownToggle, setTitleDropDownToggle] = useState({});
  const [title, setTitle] = useState([]);
  // const [titleDropUpToggle, setTitleDropUpToggle] = useState(false);
  // const [arrowIconActive, setArrowIconActive] = useState(false);
  const [value, setValue] = useState("");
  const [subtitle, setSubtitle] = useState([]);
  const [id, setId] = useState("");
  const [allClose, setAllClose] = useState([]);
  const [display, setDisplay] = useState("");
  // -------------------------------------------
  console.log(titleDropDownToggle,"test");

  // const [contentDropDownToggle, setContentDropDownToggle] = useState(true);
  // const [plusMinusCollapsed, setPlusMinusCollapsed] = useState(true);




  const titleAccordion = (e) => {
    

    //重設state
    const newObj ={...titleDropDownToggle}
    newObj[e.target.id] = !titleDropDownToggle[e.target.id]

    setTitleDropDownToggle(newObj)
    setAllClose(Object.values(titleDropDownToggle))
    console.log(Object.values(titleDropDownToggle))
    // setValue(e.target.id)
    // switch()
    // setTitleDropDownToggle(!titleDropDownToggle);
  };

  const subtitleAccordion = (e) =>{
  
    // const newObj ={...titleDropDownToggle}
    // newObj[e.target.id] = !titleDropDownToggle[e.target.id]

    // setTitleDropDownToggle(newObj)
    
  }

  async function getData() {
    const request = new Request("http://localhost:3001/faq", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "appliaction/json",
      }),
    });
    const res = await fetch(request);
    const data = await res.json();
    // 設定資料
    console.log(data[1],"data");
   const test = data[1]
    setDisplay(test)
    return data;
  }

  useEffect(() => {
    (async () => {
      const data = await getData();
      setTitle(data[0]);

      //initially false
      const newObj = {};
      data[0].forEach((el) => {
        const titleId = el.titleId;
        newObj[titleId] = false;
      });
      setTitleDropDownToggle(newObj);
      console.log("newObj", newObj);
// 
      setSubtitle(data[1]);
    })();
  }, []);

  return (
    <>
    <Nav />

    <FaqAccordionHead />
      <div className="faq-wrapper">
        {title.map((el, item) => [
          <FaqAccordionTitle
            onClick={(e) => titleAccordion(e)}
            key={item}
            value={el.id}
            id={el.id}
            titleId={el.titleId}
            title={el.title}
          />,
          subtitle
            .filter((subData, item) => subData.titleId === el.titleId)
            .map(
              (props, index) => (
                console.log(value, "+++++1"),
                (
                  <FaqAccordionSubtitle
                    onClickSub={(e)=>subtitleAccordion(e)}
                    key={index}
                    allClose={allClose}
                    subtitle={props.subtitle}
                    data-title={props.faqTitle}
                    subtitleContent={props.subtitleContent}
                    active={titleDropDownToggle[props.titleId]}
                    value={props.id}
                    id={props.id}
                    // test={display}
                  />
                )
              )
            ),
        ])}
      </div>
      <div className="white-space"></div>

      <div className="bottom d-flex">
        <div className="email">
          <p className="text">與我們聯繫</p>
          <a className="button" href="insenseofficial2020@gmail.com">
          <p >
          通過電子郵件
          </p>
          </a>
        </div>

        <div className="tel ">
          <p className="text">透過電話
          </p>

          <p className="tel-number">
          0800-067-15
          </p>

        </div>
      </div>

      <Footer />
      </>
    
  );
};

export default FaqAccordion;
