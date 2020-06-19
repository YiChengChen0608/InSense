import React from 'react';
import './SignIn.scss';
import FormSignIn from "../../components/FormSignIn/FormSignIn ";
import SubmitButton from '../../components/SubmitButton/submitButton';

const SignIn = () => (
    <div className="SignIn-page">
         <h2>Input UI 測試頁面</h2>
       <FormSignIn />
       <SubmitButton type="submit" value="Submit Form"> 送出</SubmitButton>
    </div>
);

export default SignIn;