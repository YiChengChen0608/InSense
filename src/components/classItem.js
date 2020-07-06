import React, { useState } from 'react'
import '../components/Classes/classes'
import CancelReservation from './CancelReservation/cancelReservation'
import Button from '@material-ui/core/Button'

const ClassItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='d-flex class-item text-center align-items-center'>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.classTime}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookTime}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.classCategoryName}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.className}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>NT$ {props.classInfo.classPrice}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookQty}</p>
        <p className={props.cancelBtn ? 'cancelBtn' : 'noCancelBtn'}>{props.classInfo.bookStatus}</p>

        {props.cancelBtn ? <Button className='cancelBtn' onClick={handleClickOpen} role='button' >取消</Button> : ''}
      </div>
      <CancelReservation open={open} bookId={props.classInfo.bookId} handleClose={handleClose} confirmCancel={(e) => (props.confirmCancel(e), handleClose())} />
    </>
  )
}

export default ClassItem