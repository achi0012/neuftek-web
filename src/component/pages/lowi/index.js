import React,{useState} from "react";

export default function Lowi() {

  const [features,setFeatures]=useState([
    {title:'',describe:'',icon:'fas fa-user-tie'}
  ])

  return (
    <div className="lowi">
      <div className="lowi-banner">
        <div className="banner-title">LOWI-輿情分析系統</div>
        <div className="banner-describe">洞悉顧客價值需求，掌握議題創造商機</div>
      </div>
      <div className="lowi-body">
        <div className="product-intro">
          <div className="product-title"><span>關於</span>LOWI</div>
          <div className="intro-describe">
            <div className="intro-subtitle">擴展視野，掌握流向(或其他可以彰顯資訊需求的標語)</div>
            <div className="intro-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iste modi perspiciatis minima quo veniam tempore quas necessitatibus aliquid sed distinctio, accusamus et voluptate esse minus perferendis quasi facilis? Magni praesentium aperiam omnis earum iure? Ullam ea illo, nobis incidunt hic iste eum totam explicabo natus tempore consequuntur error ipsam?</div>
            <div className="intro-icon-list">
              <div className="icon-item">
                <i class="far fa-chart-bar"></i>
                <div className="icon-title">
                  快速歸納分析
                </div>
              </div>
              <div className="icon-item">
                <i class="fas fa-crosshairs"></i>
                <div className="icon-title">
                  精準行銷 分析型銷效益
                </div>
              </div>
              <div className="icon-item">
                <i class="fas fa-headset"></i>
                <div className="icon-title">
                  即時傳遞資訊
                </div>
              </div>
              <div className="icon-item">
                <i class="fas fa-users"></i>
                <div className="icon-title">
                  市場聲量分析
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-feature">
          <div className="product-title"><span>產品</span>特色</div>
          <div className="independent-title">
            LOWI 輿情分析系統...(簡短講述 lowi 如何監控輿情以及如何幫助客戶)
          </div>
          <div className="feature-list">
            {features.map(item=>{
              <div className="feature-item">
              <i class={item.icon}></i>
              <div className="item-content">
                <div className="title">{item.title}</div>
                <div className="item-describe">{item.describe}</div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
