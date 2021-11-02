import React from "react";
import defaultPic from "../../img/neuftek.png"
import { Link } from "react-router-dom";

export default function ProductBoard() {
  return (
    <div className="product-board container-layout">

      <section className="board-title">
        <div className="row flex-column">
          <div className="section-title bottom-gap-mg">產品服務</div>
          <hr className='underline'/>
        </div>
      </section>

      <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="product-content-title">
              LOWI Social media intelligence 3.0 
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
      </section>

      <span></span>

      {/* <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="product-content-title">
              關係人分析系統
            </div>
            <div className="product-content-describe">
              Lorem ipsum dolor sit，amet consectetur adipisicing elit. Nobis nisi，nihil iure expedita minus dolorem sapiente? Eos commodi consequuntur in quas，enim ex distinctio repudiandae nisi，dignissimos numquam ipsa recusandae quibusdam. Odit et eos ratione alias iusto，ut officiis nesciunt! Laboriosam officiis doloremque vel aliquam illum corrupti labore hic ex!
            </div>
            <div className="product-content-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/related">
                <button >了解更多</button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
