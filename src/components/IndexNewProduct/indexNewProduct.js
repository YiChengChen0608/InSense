import React from 'react'
import MainContainer from '../mainContainer'
import ItemCard from '../ItemCard/itemCard'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import './indexNewProduct.scss'



const IndexNewProduct = () => {

  const ItemCardInfo = [
    {
      name: 'BYREDO 吉普賽之水淡香精',
      price: 'NT$ 3900',
      src: '/images/banner/newest1.png'
    },
    {
      name: 'diptyque 磨砂護膚潔手液',
      price: 'NT$ 2000',
      src: '/images/banner/newest2.png'
    },
    {
      name: 'BYREDO 逝去之愛香氛蠟燭',
      price: 'NT$ 2200',
      src: '/images/banner/newest3.png'
    },
    {
      name: 'BYREDO 逝去之愛香氛蠟燭',
      price: 'NT$ 2200',
      src: '/images/banner/newest3.png'
    }
  ]

  return (
    <MainContainer>
      <div className='text-center new-product-container'>
        <p>最新商品</p>
        <div className='d-flex align-items-center justify-content-center'>
          <FiChevronLeft className='icon-style' />
          {
            ItemCardInfo.map((info, index) => {
              return <ItemCard key={index} Name={info.name} Price={info.price} src={info.src} />
            })
          }
          {/* <ItemCard Name={'BYREDO 吉普賽之水淡香精'} Price={'NT$ 3900'} src={newest1} />
          <ItemCard Name={'diptyque 磨砂護膚潔手液'} Price={'NT$ 2000'} src={newest2} />
          <ItemCard Name={'BYREDO 逝去之愛香氛蠟燭'} Price={'NT$ 2200'} src={newest3} /> */}
          <FiChevronRight className='icon-style' />
        </div>
      </div>
    </MainContainer>
  )
}

export default IndexNewProduct