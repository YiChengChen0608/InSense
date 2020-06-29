import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./creditCardInfo.scss";

//Redux
import { userLogin, userLogOut } from "../../Redux/user/userAction";

//material UI
import Button from "@material-ui/core/Button";

//react-icon
import {
  FaCreditCard,
  FaCcMastercard,
  FaCcVisa,
  FaCcJcb,
  FaCcDiscover,
} from "react-icons/fa";

//component
import CreditCardBlock from "../CreditCardBlock/creditCardBlock";

const CreditCardInfo = (props) => {
  const { user } = props;
  const [creditCardList, setCreditCardList] = useState([]);

  //fetch credit card info
  const fetchCreditCardInfo = async () => {
    const res = await fetch(`http://localhost:3030/users/creditcardinfo`, {
      credentials: "include",
    });
    const creditCardInfo = await res.json();
    return creditCardInfo;
  };

  useEffect(() => {
    (async () => {
      const rawData = await fetchCreditCardInfo();
      console.log(rawData);

      //reset user
      rawData.logInStatus ? userLogin(rawData.userInfo) : userLogOut();

      if (rawData.logInStatus) {
        setCreditCardList(rawData.creditCardList);
        
      }
    })();

    //以防萬一
    if (!user.logInStatus) {
      setCreditCardList([]);
    }
  }, [user.logInStatus]);

  return (
    <>
      <div className="credit-card-info-container">
        <h2 className="info-title">已儲存付款資訊</h2>
        {creditCardList.length ? (
          creditCardList.map((el, index) => {
            return (
              <CreditCardBlock
                key={el.id}
                id={el.id}
                association={el.association}
                cdMonth={el.cdMonth}
                cdYear={el.cdYear}
                billAddressCity={el.billAddressCity}
                billAddressPostCode={el.billAddressPostCode}
                billAddressDistrict={el.billAddressDistrict}
                billAddressStreet={el.billAddressStreet}
                cdLastFourNumber={el.cdLastFourNumber}
                isDefault={el.isDefault}
                setCreditCardList={setCreditCardList}
              />
            );
          })
        ) : (
          <p>沒有儲存的信用卡資訊</p>
        )}
        <div className="add-credit-card d-flex align-items-end justify-content-end">
          <div className="credit-card-icons d-flex align-items-center">
            <FaCreditCard className="card-association-icon" />
            <FaCcMastercard className="card-association-icon" />
            <FaCcVisa className="card-association-icon" />
            <FaCcJcb className="card-association-icon" />
            <FaCcDiscover className="card-association-icon" />
          </div>
          <div className="add-button">
            <Button>新增信用卡</Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  return { user: store.user };
};

//Redux引入函式
//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userLogin, userLogOut }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CreditCardInfo);
