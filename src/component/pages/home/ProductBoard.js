import React from "react";
import {logo} from "../../../img"
import { Link } from "react-router-dom";

export default function ProductBoard() {
  return (
    <div className="product-board container-layout">

      <section className="board-title">
        <div className="row flex-column">
          <div className="section-title title-gap">產品服務</div>
          <hr className='underline'/>
        </div>
      </section>

      <section className="product-board-item">
        <div className="row flex-column">
            <div className="product bottom-gap-mg">
              <div className="product-img">
                <img src={logo} alt="" />
              </div>
              <div className="product-content">
                <div className="product-content-title">
                  這是標題這是標題這是標題這是標題這是標題這是標題
                  {/* LOWI Social media intelligence 3.0  */}
                </div>
                <div className="product-content-describe">
                社群媒體時代，消費者的喜好快速變動，如何在茫茫網海中，快速有效地挖掘客戶關心的議題與需求? 想要即時洞悉時事、精準掌握消費者喜好，透過分析大數據與語意運算的方式，能協助業主快速蒐集網路輿情
    LOWI Social media intelligence 3.0 讓您能夠從大量多樣化、跨格式和語言的外部網路資訊當中，瞭解和獲取可做為行動依據的深入資訊，進而從資訊中獲取價值，洞悉消費者
                </div>
                <div className="product-content-btn">
                  <Link onClick={()=>{window.scrollTo(0,0)}} to="/lowi">
                    <button >了解更多</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-img">
                <img src={logo} alt="" />
              </div>
              <div className="product-content">
                <div className="product-content-title">
                  KYC 利害關係人分析
                </div>
                <div className="product-content-describe">
                社群媒體時代，消費者的喜好快速變動，如何在茫茫網海中，快速有效地挖掘客戶關心的議題與需求? 想要即時洞悉時事、精準掌握消費者喜好，透過分析大數據與語意運算的方式，能協助業主快速蒐集網路輿情
    LOWI Social media intelligence 3.0 讓您能夠從大量多樣化、跨格式和語言的外部網路資訊當中，瞭解和獲取可做為行動依據的深入資訊，進而從資訊中獲取價值，洞悉消費者
                </div>
                <div className="product-content-btn">
                  <Link onClick={()=>{window.scrollTo(0,0)}} to="/kyc">
                    <button >了解更多</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
