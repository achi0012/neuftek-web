import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-title">發掘數據的另一種面貌</div>
      <div className="banner-describe">
        <p>多樣化分析模組 自定義的圖表排版 40+圖表類型</p>
        <p>協助您找到數據背後的真向</p>
      </div>
      <div className="banner-btn">
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/lowi">
          <button >了解更多</button>
        </Link>
      </div>
    </section>
  );
}
