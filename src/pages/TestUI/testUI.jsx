import React from 'react';
import './testUI.scss';
import FormSignIn from "../../components/FormSignIn/FormSignIn ";
import SubmitButton from '../../components/SubmitButton/submitButton';
import CartIcon from '../../components/CartIcon/cartIcon'

const TestUI = () => (
    <div className="SignIn-page">
         <h2>Input UI 測試頁面</h2>
       <FormSignIn />
       <SubmitButton type="submit" value="Submit Form"> 送出</SubmitButton>
       <CartIcon style={{ color: 'white' }}/>
    </div>
);

export default TestUI;