import React from 'react';
import MainContainer from '../../components/mainContainer'
import AccountSideBar from '../../components/accountSideBar'
import Classes from '../../components/class/classes'
import '../../styles/class/myClass/classPage.scss'

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