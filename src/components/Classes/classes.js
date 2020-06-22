import React, { useState, useEffect } from 'react'
import './classes.scss'
import ClassItem from '../classItem'

const Classes = () => {
  const [myClassList, setMyClassList] = useState([])
  const [allClassList, setAllClassList] = useState([])
  const [myClassSelected, setMyClassSelected] = useState(true)
  const [allClassSelected, setAllClassSelected] = useState(false)
  const [classes, setClasses] = useState([])

  const changeSelectHandler = (e) => {
    switch (e.target.dataset.select) {
      case 'myClass':
        setMyClassSelected(true)
        setAllClassSelected(false)
        setClasses(myClassList)
        break
      case 'allClass':
        setAllClassSelected(true)
        setMyClassSelected(false)
        setClasses(allClassList)
        break
    }
  }

  const fetchMyClassData = async () => {
    const userInfo = {
      userId: 'U0001'
    }
    const res = await fetch('http://localhost:3002/users/classlist',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })

    const data = await res.json()
    return data
  }
  const fetchAllClassDate = async () => {
    const userInfo = {
      userId: 'U0001'
    }
    const res = await fetch('http://localhost:3002/users/allclasslist',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
    const data = await res.json()
    return data
  }

  useEffect(() => {
    (async () => {
      const classData = await fetchMyClassData()
      const allClassData = await fetchAllClassDate()
      setMyClassList(classData)
      setAllClassList(allClassData)
      setClasses(classData)
    })()
  }, [])


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