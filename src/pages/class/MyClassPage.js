import React from 'react';
import Container from '../../components/Container'
import MyAccountSideBar from '../../components/MyAccountSideBar'
import MyClass from '../../components/class/MyClass'
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