import React, { useState, useEffect } from 'react'
import './orderDetail.scss'
import MainContainer from '../../components/mainContainer'
import OrderProductCard from '../../components/OrderProductCard/orderProductCard'
const OrderDeatil = () => {
  const [orderDetail, setOrderDetail] = useState([])

  const fetchOrderDetailData = async () => {
    const response = await fetch(`http://localhost:3030/order/orderdetail`, {
      credentials: 'include'
    })
    const data = await response.json()
    return data
  }
  useEffect(() => {
    (async () => {
      const data = await fetchOrderDetailData()
      setOrderDetail(data)
    })()
  }, [])
  console.log(orderDetail)
  return (
    <MainContainer>
      <a className='go-back-btn' onClick={(e) => (e.preventDefault())} href='' role='button'>回到訂單紀錄</a>
      <h2 className='order-title'>訂單編號：9487945</h2>
      <div className='d-flex order-detail-container'>
        <div className='order-detail-subContainer'>
          <ul>配送方式
            <li>黑貓宅急便</li>
          </ul>
          <ul>配送地址
            <li>王小明<br />
                10648<br />
                台北市大安區<br />
                泰順街38巷26號4F</li>
          </ul>
          <ul>聯絡電話
            <li>0900000000</li>
          </ul>
        </div>
        <div className='order-detail-subContainer'>
          <ul>付款方式
            <li>信用卡<br />
            MasterCard 1234<br />
            期限:12/2022</li>
          </ul>
        </div>
        <div className='order-detail-subContainer'>
          <ul>帳單地址
            <li>王小明<br />
                10648<br />
                台北市大安區<br />
                泰順街38巷26號4F</li>
          </ul>
        </div>
        <div className='order-detail-subContainer'>
          <h2>金額</h2>
          <div className='order-price-cotainer'>
            <div className='d-flex justify-content-between order-price-content'>
              <p>商品小計</p>
              <p>6800</p>
            </div>
            <div className='d-flex justify-content-between order-price-content'>
              <p>運費</p>
              <p>80</p>
            </div>
            <div className='d-flex justify-content-between order-price-content'>
              <p>折扣</p>
              <p>-60</p>
            </div>
          </div>
          <div className='order-totalPrice-container'>
            <div className='d-flex justify-content-between order-price-content'>
              <p>總金額</p>
              <p>6800</p>
            </div>
            <div className='d-flex justify-content-between order-price-content'>
              <p>刷卡金額</p>
              <p>6800</p>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center order-detail-product-title'>
        <p>商品照片</p>
        <span>商品敘述</span>
        <p>數量</p>
        <p>單價</p>
        <p>小計</p>
      </div>
      <OrderProductCard />
      <a className='go-back-btn' onClick={(e) => (e.preventDefault())} href='' role='button'>回到訂單紀錄</a>
    </MainContainer>
  )
}

export default OrderDeatil