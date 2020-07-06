import React, { useState, useEffect } from "react";
import "./FaqAccordion.scss";
import { FiChevronUp } from "react-icons/fi";
// import { addBusinessDays } from "date-fns";

const FaqAccordion11 = (props) => {
  const [titleDropDownToggle, setTitleDropDownToggle] = useState(false);
  const [title, setTitle] = useState([]);
  // const [titleDropUpToggle, setTitleDropUpToggle] = useState(false);
  const [arrowIconActive, setArrowIconActive] = useState(false);
  const [value, setValue] = useState('');
  const [subtitle, setSubtitle] = useState([]);
  // -------------------------------------------
  const [contentDropDownToggle, setContentDropDownToggle] = useState(true);
  const [plusMinusCollapsed, setPlusMinusCollapsed] = useState(true);
  const[id,setId] = useState('');


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
    // console.log(data);
    return data;
  }

  useEffect(() => {
    (async () => {
      const data = await getData();
      setTitle(data[0]);
      setSubtitle(data[1]);
    })();
  }, []);

  return (
    <>
      {/* map(()=>()) */}
      <div className="faq-wrapper">
        { 
          title.map((data, item) => (
            <>
            {console.log(value + "test")}
           
            <button
              key={item}
              // handle={() => this.selectFold(i)}
              // active={i === this.state.active}
              value = {data.id}
              id={data.titleId}
              // onMouseDown={(e)=>{

              //   if(titleDropDownToggle) {
              //     setValue(e.target.value) 
              //   }
              //   // setId(e.target.id),
              //   // setTitleDropUpToggle(true),

              //  } }
              onClick={(e) => (
                
                setValue(e.target.value),
                setTitleDropDownToggle(!titleDropDownToggle),
                // setId(e.target.id),
                // setTitleDropUpToggle(true),
                setContentDropDownToggle(false),
                setArrowIconActive(!arrowIconActive)
                
                
                // console.log(e.target.value)
                // console.log(typeof value)
                
              )}
              className="accordion-header"
              
                
            >
            
              {data.title}

              <FiChevronUp id={data.titleId}
                className={`arrow-icon-position arrow-icon ${
                  // id ==data.titleId && 
                value == data.id && arrowIconActive ? "arrow-icon-active" : ""
                }`}
              />
            </button>
{/* ---------------------------------------- */}

            {value == data.id ? subtitle
              .filter((subData, item) => subData.titleId === data.titleId)
              .map((i, index) => (
                <React.Fragment key={index}>
                  <div className="content-title-position">
                    <div
                      onClick={() => (
                        setContentDropDownToggle(!contentDropDownToggle),
                        setPlusMinusCollapsed(!plusMinusCollapsed)
                        
                      )}
                      className={`content-title-position content-hidden ${
                        titleDropDownToggle ? "active" : ""
                        // titleDropUpToggle ? "" : ""
                      

                      
                      } `}
                      data-title={i.faqTitle}
                    
                    >
                      <span
                      
                        className={`plus-minus-toggle content-title ${
                          plusMinusCollapsed ? "collapsed" : ""
                        }`}
                      >
                        {i.subtitle}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`content-position content content-hidden ${
                      contentDropDownToggle ? "active" : "" 
                    }`}
                  >
                    <p>{i.subtitleContent} </p>
                  
                  </div>
                </React.Fragment>
              )):''}
          </>
        ))}
      </div>
    </>
  );
};

export default FaqAccordion11;
