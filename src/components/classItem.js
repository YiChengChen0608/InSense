import React from 'react'
import '../components/Classes/classes'

const ClassItem = (props) => {
  return (
    <div className='d-flex class-item text-center'>
      <p>{props.classInfo.classTime}</p>
      <p>{props.classInfo.bookTime}</p>
      <p>{props.classInfo.classCategoryName}</p>
      <p>{props.classInfo.className}</p>
      <p>{props.classInfo.classPrice}</p>
      <p>{props.classInfo.bookQty}</p>
    </div>
  )
}

export default ClassItem