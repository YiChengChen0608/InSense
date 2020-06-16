import React from 'react'
import './detailFooter.scss'

const DetailFooter = () => {
  return (
    <>
      <p className='reservation-date'>預約日期：2020/12/01</p>
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
      <a className='reservation-btn text-center' href='' role='button'>預約</a>
    </>
  )
}

export default DetailFooter