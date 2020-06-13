import React from 'react';
import Container from '../../components/container'
import MyAccountSideBar from '../../components/myAccountSideBar'
import MyClass from '../../components/class/myClass'
import '../../styles/class/myClass/myClassPage.scss'

const MyClassPage = () => {
  return (
    <Container>
      <div className='d-flex my-class-wrapper'>
        <MyAccountSideBar />
        <MyClass />
      </div>
    </Container>
  )
}

export default MyClassPage