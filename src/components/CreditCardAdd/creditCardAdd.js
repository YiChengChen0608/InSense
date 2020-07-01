import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

//scss
import "./creditCardAdd.scss";

//Dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

//Redux
import { userLogin, userLogOut } from "../../Redux/user/userAction";

//component
import Address from "../../components/Address/address";
import CreditCardNumber from "../../components/CreditCardNumber/creditCardNumber";
import CreditCardAssociation from "../../components/CreditCardAssociation/creditCardAssociation";
import CreditCardExpiration from "../../components/CreditCardExpiration/creditCardExpiration";

const FormDialog = function (props) {
  // const [open, setOpen] = React.useState(false);
  const { user, open, handleClose } = props;

  //card association
  const [association, setAssociation] = useState("");

  //信用卡號
  const [cardNumberFirst, setCardNumberFirst] = useState("");
  const [cardNumberSecond, setCardNumberSecond] = useState("");
  const [cardNumberThird, setCardNumberThird] = useState("");
  const [cardNumberForth, setCardNumbeForth] = useState("");

  //持有人
  const [cardHolder, setCardHolder] = useState("");

  //期限
  const [cdMonth, setCdMonth] = useState("");
  const [cdYear, setCdYear] = useState("");

  //帳單地址
  const [billCity, setBillCity] = useState("");
  const [billDistrict, setBillDistrict] = useState("");
  const [billPostCode, setBillPostCode] = useState("");
  const [billAddress, setBillAddress] = useState("");

  const [errMessage, setErrMessage] = useState("")

  //card holder
  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  //新增付款方式
  const creditCardAddSent = () => {

    const cardNum = [cardNumberFirst, cardNumberSecond, cardNumberThird, cardNumberForth].join("-")

    if(user.logInStatus){
      // console.log("cdAddSent")
      if(!!association.length && cardNum.length === 19){
        console.log('sent')
      }else{
        console.log("not sent")
      }


    }else{
      console.log("not log in")
    }
    // handleClose();
  };

  useEffect(() => {
    console.log(
      cardNumberFirst,
      "-",
      cardNumberSecond,
      "-",
      cardNumberThird,
      "-",
      cardNumberForth
    );
  });

  useEffect(() => {
    // console.log(billCity, billDistrict, billPostCode, billAddress);
  });
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="credit-card-add-dialog-title">新增信用卡</DialogTitle>
        <DialogContent>
          <DialogContentText className="credit-card-add-dialog-content-text">
            請務必填妥所有資訊*
          </DialogContentText>
          <div className="credit-card-add-form d-flex flex-wrap">
            <div className="credit-card-add-block credit-card-add-association flex-grow">
              <CreditCardAssociation
                association={association}
                setAssociation={setAssociation}
              />
            </div>
            <div className="credit-card-add-block credit-card-add-card-number">
              <CreditCardNumber
                open={open} //為了再看看要不要清空
                cardNumberFirst={cardNumberFirst}
                cardNumberSecond={cardNumberSecond}
                cardNumberThird={cardNumberThird}
                cardNumberForth={cardNumberForth}
                setCardNumberFirst={setCardNumberFirst}
                setCardNumberSecond={setCardNumberSecond}
                setCardNumberThird={setCardNumberThird}
                setCardNumbeForth={setCardNumbeForth}
              />
            </div>
            <div className="credit-card-add-block credit-card-add-card-holder">
              <FormControl>
                <InputLabel htmlFor="card-holder" className="input-card-holder">
                  持有人
                </InputLabel>
                <Input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  value={cardHolder}
                  onChange={handleCardHolderChange}
                />
              </FormControl>
            </div>
            <div className="credit-card-add-block credit-card-add-expiration">
              <CreditCardExpiration
                cdMonth={cdMonth}
                cdYear={cdYear}
                setCdMonth={setCdMonth}
                setCdYear={setCdYear}
              />
            </div>
            <div className="credit-card-add-block credit-card-add-bill-address">
              <Address
                myCity={billCity}
                myPostCode={billPostCode}
                myAddress={billAddress}
                setCities={setBillCity}
                setDistricts={setBillDistrict}
                setPostCode={setBillPostCode}
                setAddress={setBillAddress}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="credit-card-add-btns">
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={creditCardAddSent} color="primary">
            確定新增
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
