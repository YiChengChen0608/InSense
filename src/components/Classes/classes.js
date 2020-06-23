import React, { useState } from 'react'
import './classes.scss'
import ClassItem from '../classItem'

const Classes = () => {
  const myClass = [{
    date: '2020/12/31',
    time: '14:00',
    category: '香水',
    name: 'LFP 客製化香水',
    price: 1500,
    people: 2
  }, {
    date: '2020/12/31',
    time: '14:00',
    category: '香水',
    name: 'LFP 客製化香水',
    price: 1500,
    people: 2
  }, {
    date: '2020/12/31',
    time: '14:00',
    category: '香水',
    name: 'LFP 客製化香水',
    price: 1500,
    people: 2
  }, {
    date: '2020/12/31',
    time: '14:00',
    category: '香水',
    name: 'LFP 客製化香水',
    price: 1500,
    people: 2
  }]
  const allMyClass = [
    {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    }, {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    }, {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    }, {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    }, {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    }, {
      date: '2020/12/31',
      time: '14:00',
      category: '香水',
      name: 'LFP 客製化香水',
      price: 1500,
      people: 2
    },
  ]
  const [myClassSelected, setMyClassSelected] = useState(true)
  const [allClassSelected, setAllClassSelected] = useState(false)
  const [classes, setClasses] = useState(myClass)

  const changeSelectHandler = (e) => {
    switch (e.target.dataset.select) {
      case 'myClass':
        setMyClassSelected(true)
        setAllClassSelected(false)
        setClasses(myClass)
        break
      case 'allClass':
        setAllClassSelected(true)
        setMyClassSelected(false)
        setClasses(allMyClass)
        break
    }
  }


  return (
    <div className='class-wrapper'>
      <div className='change-btn d-flex'>
        <a className={`${myClassSelected ? 'btn-selected' : ''}`} onClick={(event) => changeSelectHandler(event)} role='button' data-select='myClass'>已報名</a>
        <a className={`${allClassSelected ? 'btn-selected' : ''}`} onClick={(event) => changeSelectHandler(event)} role='button' data-select='allClass'>課程紀錄</a>
      </div>
      <div className='d-flex class-item text-center'>
        <p>日期</p>
        <p>時間</p>
        <p>課程分類</p>
        <p>課程名稱</p>
        <p>課程單價</p>
        <p>報名人數</p>
      </div>
      {classes.map((item, index) => <ClassItem key={index} classInfo={item} />)}
    </div>
  )
}

export default Classes