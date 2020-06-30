import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./creditCardBlock.scss";

//Redux
import { userLogin, userLogOut } from "../../Redux/user/userAction";

//material UI
import Button from "@material-ui/core/Button";

//react-icon
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcJcb,
  FaCcDiscover,
} from "react-icons/fa";

//component
import Address from "../../components/Address/address";

//destructor
const CreditCardBlock = (props) => {
  const {
    id,
    association,
    cdMonth,
    cdYear,
    billAddressCity,
    billAddressPostCode,
    billAddressDistrict,
    billAddressStreet,
    cdLastFourNumber,
    isDefault,
    setCreditCardList,
  } = props;

  //localstate
  const [inputOpen, setInputOpen] = useState(false);
  const [cities, setCities] = useState(billAddressCity);
  const [districts, setDistricts] = useState(billAddressDistrict);
  const [postCode, setPostCode] = useState(billAddressPostCode);
  const [address, setAddress] = useState(billAddressStreet);

  //變更資料
  const handleInputOpen = () => {
    setInputOpen(true);
  };

  //save
  const handleSave = () => {
    (async () => {
      const data = {
        id: id,
        billAddressCity: cities,
        billAddressPostCode: postCode,
        billAddressDistrict: districts,
        billAddressStreet: address,
      };
      // console.log("data", data);
      const res = await fetch(`http://localhost:3030/users/creditcardmodify`, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const rawData = await res.json();
      console.log(rawData);

      //reset user
      rawData.logInStatus ? userLogin(rawData.userInfo) : userLogOut();

      if (rawData.success) {
        if (rawData.logInStatus) {
          // 若有改變
          if (rawData.newCreditCardList) {
            setCreditCardList(rawData.newCreditCardList);
            // ================================ alert change made ================================ //
          }

          // 若無改變
          if (rawData.message && rawData.message === "NO_CHANGE") {
            console.log(rawData.message)
            // ================================ alert no change ================================ //
          }
        } else {
          // ================================ redirect to Hompage ================================ //
        }

        //不管如何，都要關閉
        setInputOpen(false);
      }
    })();
  };

  //close
  const handleInputClose = () => {
    setInputOpen(false);

    //重設
    setCities(billAddressCity);
    setDistricts(billAddressDistrict);
    setPostCode(billAddressPostCode);
    setAddress(billAddressStreet);
  };

  useEffect(() => {
    setCities(billAddressCity);
    setDistricts(billAddressDistrict);
    setPostCode(billAddressPostCode);
    setAddress(billAddressStreet);
  }, [
    billAddressCity,
    billAddressPostCode,
    billAddressDistrict,
    billAddressStreet,
  ]);

  return (
    <>
      <div className="credit-card-block-container d-flex align-items-center ">
        <div className="block-default d-flex justify-content-center">
          {isDefault ? <p>預設</p> : <Button>設為預設</Button>}
        </div>
        <div className="card-info">
          <h4 className="card-info-detail card-info-title">卡片資訊</h4>
          <div className="card-info-detail card-association d-flex align-items-center">
            {(() => {
              switch (association) {
                case "MasterCard":
                  return [<FaCcMastercard className="card-association-icon" />];
                case "VISA":
                  return <FaCcVisa className="card-association-icon" />;
                case "JCB":
                  return <FaCcJcb className="card-association-icon" />;
                case "Discover":
                  return <FaCcDiscover className="card-association-icon" />;
                default:
                  break;
              }
            })()}
            {/* <FaCcMastercard className="card-association-icon" /> */}
            <p>{association}</p>
          </div>
          <div className="card-info-detail last-four-number">
            末四碼 {cdLastFourNumber}
          </div>
          <div className="card-info-detail card-expiration">
            期限 {cdMonth}/{cdYear}
          </div>
        </div>
        <div className="bill-address flex-grow">
          <h4 className="bill-address-detail bill-address-title">帳單地址</h4>
          {/* districtInput */}
          {inputOpen ? (
            <Address
              myCity={cities}
              myPostCode={postCode}
              myAddress={address}
              setCities={setCities}
              setDistricts={setDistricts}
              setPostCode={setPostCode}
              setAddress={setAddress}
            />
          ) : (
            [
              <p className="bill-address-detail bill-address-district">
                {billAddressPostCode} {[billAddressCity, billAddressDistrict]}
              </p>,
              <p className="bill-address-detail bill-address-street">
                {billAddressStreet}
              </p>,
            ]
          )}
        </div>
        <div className="card-buttons d-flex align-items-center">
          {inputOpen ? (
            <Button className="card-modify-save" onClick={handleSave}>
              儲存變更
            </Button>
          ) : (
            <Button className="card-modify" onClick={handleInputOpen}>
              變更地址
            </Button>
          )}
          {inputOpen ? (
            <Button className="card-modify-cancel" onClick={handleInputClose}>
              取消
            </Button>
          ) : (
            <Button className="card-delete">刪除</Button>
          )}
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
export default connect(mapStateToProps, mapDispatchToProps)(CreditCardBlock);
