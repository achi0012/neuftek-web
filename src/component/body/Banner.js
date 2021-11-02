import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner main-banner-padding">
      <div className="banner-title bottom-gap-mg">協助您找到數據背後的真相</div>
      <div className="banner-describe bottom-gap-mg">
        {/* <p>諾客網科為一家從事大數據分析的新創公司</p>
        <p>利用 AI技術專門處理非結構化資料，包括︰社群媒體、影音、文字、網頁等</p> 
        <p>為以技術發展為核心，並提供客戶大數據應用等解決方案之服務的公司。</p> */}
        諾客網科為一家從事大數據分析的新創公司，利用 AI技術專門處理非結構化資料，包括︰社群媒體、影音、文字、網頁等。
        為以技術發展為核心，並提供客戶大數據應用等解決方案之服務的公司。
      </div>
      <div className="banner-btn">
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/lowi">
          <button >了解更多</button>
        </Link>
      </div>
    </section>
  );
}
