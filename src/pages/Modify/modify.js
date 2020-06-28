import React from "react";
import "./modify.scss";

//引入component
import MainContainer from "../../components/mainContainer";
import AccountSideBar from "../../components/AccountSideBar/accountSideBar";
import AccountModify from "../../components/AccountModify/accountModify";

const Modify = (props) => {
  return (
    <>
      <MainContainer>
        <div className="d-flex modify-wrapper">
          <AccountSideBar />
          <AccountModify />
        </div>
      </MainContainer>
    </>
  );
};

export default Modify;
