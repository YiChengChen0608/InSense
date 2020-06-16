import React from 'react'
import '../components/Classes/classes'

const ClassItem = (props) => {
  return (
    <div className='d-flex class-item text-center'>
      <p>{props.classInfo.date}</p>
      <p>{props.classInfo.time}</p>
      <p>{props.classInfo.category}</p>
      <p>{props.classInfo.name}</p>
      <p>{props.classInfo.price}</p>
      <p>{props.classInfo.people}</p>
    </div>
  )
}

export default ClassItem