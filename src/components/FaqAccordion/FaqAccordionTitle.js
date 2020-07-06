import React, { useState, useEffect } from "react";
import "./FaqAccordionTitle.scss";
import { FiChevronUp } from "react-icons/fi";

const FaqAccordionTitle = (props) => {
  const [titleDropDownToggle, setTitleDropDownToggle] = useState(false);
  // const [title, setTitle] = useState([]);
  // const [titleDropUpToggle, setTitleDropUpToggle] = useState(false);
  const [arrowIconActive, setArrowIconActive] = useState(false);
  const [value, setValue] = useState("");
  // const [subtitle, setSubtitle] = useState([]);
  const [contentDropDownToggle, setContentDropDownToggle] = useState("");
  const [aaa, setAaa] = useState(true);
  const clickTitle = (e) => {
    props.onClick(e);
  };

  return (
    <>
      <div className="wrapper">
        <button
          // key={item}
          // value = {props.id}
          id={props.titleId}
          onClick={(e) => (
            // setValue(e.target.value),
            // setAaa(!aaa),
            // setTitleDropDownToggle(!titleDropDownToggle),
            // setContentDropDownToggle(!contentDropDownToggle),
            setArrowIconActive(!arrowIconActive), clickTitle(e)
            // console.log(titleDropDownToggle, "65465465465")
          )}
          
          className="accordion-header"
        >
          {props.title}
          
          <FiChevronUp
            
            className={`arrow-icon-position arrow-icon ${
              arrowIconActive ? "arrow-icon-active" : ""
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default FaqAccordionTitle;
