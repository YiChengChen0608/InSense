import React, { useEffect } from 'react'
import './detailFooter.scss'
import Swal from 'sweetalert2'

const DetailFooter = ({ date }) => {

  const popUp = ({ name, gender, }) => {
    Swal.fire({
      title: name ? `感謝Eric 先生的預約` : '預約失敗',
      icon: name ? 'success' : 'error',
      html: name ?
        `<p>人數：2<br/>
         日期：${date}<br/>
         時間：14:00<br/></p>
        `: '<br/>請先登入在做預約的服務<br/>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        name ? '<i class="fa fa-thumbs-up"></i> 查看預約' : '請先登入',
      customClass: {
        popup: 'popup-class',
        title: 'title-class',
        content: name ? 'content-class' : 'content-sub-class',
        confirmButton: 'confirm-button-class',
        closeButton: 'close-button-class'
      }
    })
  }


  return (
    <>
      <p className='reservation-date'>預約日期：{date}</p>
      <div className='reservation-wrapper d-flex'>
        <select>
          <option value="" disabled selected hidden>預約人數</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select>
          <option value="" disabled selected hidden>預約時間</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16">16:00</option>
          <option value="17">17:00</option>
          <option value="18">18:00</option>
        </select>
      </div>
      <a className='reservation-btn text-center' onClick={popUp} role='button'>預約</a>
    </>
  )
}

export default DetailFooter