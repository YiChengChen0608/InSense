import React from 'react'
import '../components/Classes/classes'

const ClassItem = (props) => {
  return (
    <div className='d-flex class-item text-center align-items-center'>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.classTime}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookTime}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.classCategoryName}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.className}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>NT$ {props.classInfo.classPrice}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookQty}</p>
      <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookStatus}</p>
      {props.cancelBtn ? <a className='cancelBtn' onClick={props.cancel} role='button' data-bookid={props.classInfo.bookId}>取消</a> : ''}
    </div>
  )
}

export default ClassItem