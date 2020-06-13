import React from 'react';
import '../../styles/class/myClass/myClass.scss'
import MyClassItem from '../class/MyClassItem'
const MyClass = () => {
  const myClass = {
    date: '2020/12/31',
    time: '14:00',
    category: '香水',
    name: 'LFP 客製化香水',
    price: 1500,
    people: 2
  }

  return (
    <div className='class-wrapper'>
      <div className='change-btn d-flex'>
        <a href='javascript:;' role='button'>已報名</a>
        <a href='javascript:;' role='button'>課程紀錄</a>
      </div>
      <div className='d-flex class-item text-center'>
        <p>日期</p>
        <p>時間</p>
        <p>課程分類</p>
        <p>課程名稱</p>
        <p>課程單價</p>
        <p>報名人數</p>
      </div>
      <MyClassItem classInfo={myClass} />
      <MyClassItem classInfo={myClass} />
      <MyClassItem classInfo={myClass} />
      <MyClassItem classInfo={myClass} />
      <MyClassItem classInfo={myClass} />
      <MyClassItem classInfo={myClass} />



    </div>
  )
}

export default MyClass