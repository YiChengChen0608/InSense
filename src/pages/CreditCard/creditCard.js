import React from "react";
import "./creditCard.scss";

//引入component
import MainContainer from "../../components/mainContainer";
import AccountSideBar from "../../components/AccountSideBar/accountSideBar";
import CreditCardInfo from "../../components/CreditCardInfo/creditCardInfo";

const Modify = (props) => {
  return (
    <>
      <MainContainer>
        <div className="d-flex credit-card-wrapper">
          <AccountSideBar />
          <CreditCardInfo />
        </div>
      </MainContainer>
    </>
  );
};

export default Modify;
