// csContent = customerServiceContent
import React from "react";
import "../../styles/class/customerService/csContent.scss";

const CSContent = (props) => {
  return (
    <>
    <div className="container">
    <div className="background-bar">
        <h1>常見問題</h1>
    </div>
      
      <div className="faq-wrapper">
        <ul>
          <li>
            我的帳號
            <ul>
              如何變更您的密碼？
              <li>
                請點選『我的帳戶』中的『變更您的個人資料』即可重新設定，密碼更改完畢後，請再重新登入。
              </li>
            </ul>
            <ul>
              忘記密碼該怎麼辦？
              <li>
                請點選『會員登入』中的『忘記密碼』，並依指示進行操作，密碼更改完畢後，請再重新登入。
              </li>
            </ul>
            <ul>
              如何更改會員資料？
              <li>
                登入 InSense 會員中心 後，即可在『帳號資訊』中修改會員資料。
              </li>
            </ul>
          </li>
          <li>
            付款方式
            <ul>
              關於付款方式？
              <li>供線上信用卡刷卡、貨到付款和超商取貨付款三種方式。</li>
            </ul>
          </li>
          <li>
            配送
            <ul>
              如何計算運費？
              <li>
                每筆訂單的運費為新台幣80元。
                若單筆訂單金額達新台幣1,500元以上，即可免運費。
                請注意：必須要單筆訂單金額達新台幣1,500元以上才可享有免運費服務。
                如您當日完成多筆訂購，但各筆訂單金額未達1,500元以上，仍是無法享有免運費服務的。煩請諒解。
              </li>
            </ul>
            <ul>
            訂單成立後多久可以取消?
              <li>
                下單後隔日中午12點前皆可取消。
              </li>
            </ul> 
          </li>
          <li>
            退貨方式
            <ul>
            網路商店訂購可以退貨嗎？
              <li>
              由於香水屬於消耗性商品，在非商品瑕疵的情況下，若膠膜已經拆掉或是封口貼紙已拆開，因無法將包裝不完整或已使用過的香水轉賣他人，故恕無法退/換貨。
              </li>
            </ul>
          </li>




        </ul>
      </div>
      </div>
    </>
  );
};

export default CSContent;
