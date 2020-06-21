import React from 'react'
import './detailContent.scss'

const DetailContent = ({ storeInfo }) => {
  return (
    <ul className='detail-content-wrapper'>
      <li>門市資訊
          <ul>
          <li>門市名稱：{storeInfo.shopName}<br />門市地址：{storeInfo.shopAddress}<br />聯絡電話：{storeInfo.shopPhone}</li>
        </ul>
      </li>
      <li>香水定價
        <ul>
          <li>價格：{storeInfo.classPrice}</li>
        </ul>
      </li>
      <li>客製化香水說明
        <ul className='class-content'>
          <li>{storeInfo.classContent}</li>
          {storeInfo.classContent1 !== 'null' ? <li>{storeInfo.classContent1}</li> : ''}
          {storeInfo.classContent2 !== 'null' ? <li>{storeInfo.classContent2}</li> : ''}
          {storeInfo.classContent3 !== 'null' ? <li>{storeInfo.classContent3}</li> : ''}
          {storeInfo.classContent4 !== 'null' ? <li>{storeInfo.classContent4}</li> : ''}
        </ul>
      </li>
      <li>注意事項
          <ul>
          <li>為確保調香品質，單日單時段調香人數以6位為上限，敬請把握預約。</li>
          <li>預約名額僅保留10分鐘，逾時將開放給現場客人。</li>
          <li>因空間考量，恕不開放陪同。</li>
          <li>不建議12歲以下兒童參與。</li>
          <li>現場請勿飲食或攜帶寵物。</li>
          <li>依各人選擇香料速度現場調香過程約30-60分鐘。</li>
        </ul>
      </li>
    </ul>
  )
}

export default DetailContent