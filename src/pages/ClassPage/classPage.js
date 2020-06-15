import React from 'react';
import MainContainer from '../../components/mainContainer'
import AccountSideBar from '../../components/AccountSideBar/accountSideBar'
import Classes from '../../components/Classes/classes'
import './classPage.scss'

const ClassPage = () => {
  return (
    <MainContainer>
      <div className='d-flex my-class-wrapper'>
        <AccountSideBar />
        <Classes />
      </div>
    </MainContainer>
  )
}

export default ClassPage