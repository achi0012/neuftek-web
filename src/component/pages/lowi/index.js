import React,{useState} from "react";

export default function Lowi() {

  const [features,setFeatures]=useState([
    {title:'語意分析技術',describe:'',icon:'fas fa-user-tie'},
    {title:'不限定主題搜索',describe:'',icon:'fas fa-atlas'},
    {title:'收錄超過上萬資料',describe:'',icon:'fas fa-cloud-download-alt'},
    {title:'智慧導覽 操作直觀',describe:'',icon:'fas fa-lightbulb'},
    {title:'24 小時 隋時監控',describe:'',icon:'fas fa-rocket'},
    {title:'概念探詢 聚焦事件觀點',describe:'',icon:'fas fa-search-plus'},
    {title:'自定義分析面板 超過40+ 圖表類型',describe:'',icon:'fas fa-th'},
    {title:'議題擴散 預警設定',describe:'',icon:'fas fa-bell'},
    {title:'語意演算技術 判讀文章情緒',describe:'',icon:'fas fa-head-side-virus'},
  ])

  return (
    <div className="lowi">
      <div className="lowi-banner">
        <div className="banner-title">LOWI-輿情分析系統</div>
        <div className="banner-describe">洞悉顧客價值需求，掌握議題創造商機</div>
      </div>
      <div className="lowi-body">
        <div className="product-intro container-layout">

          <section className="lowi-title">
            <div className="row">
              <div className="product-title">
                <span>關於</span>LOWI
              </div>
            </div>
          </section>
          
          <section className="intro-describe">
            <div className="row flex-column">
              <div className="intro-subtitle">擴展視野，掌握流向(或其他可以彰顯資訊需求的標語)</div>
              <div className="intro-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iste modi perspiciatis minima quo veniam tempore quas necessitatibus aliquid sed distinctio, accusamus et voluptate esse minus perferendis quasi facilis? Magni praesentium aperiam omnis earum iure? Ullam ea illo, nobis incidunt hic iste eum totam explicabo natus tempore consequuntur error ipsam?</div>
              <div className="intro-icon-list">
                <div className="icon-item">
                  <i className="far fa-chart-bar"></i>
                  <div className="icon-title">
                    快速歸納分析
                  </div>
                </div>
                <div className="icon-item">
                  <i className="fas fa-crosshairs"></i>
                  <div className="icon-title">
                    精準行銷 分析型銷效益
                  </div>
                </div>
                <div className="icon-item">
                  <i className="fas fa-headset"></i>
                  <div className="icon-title">
                    即時傳遞資訊
                  </div>
                </div>
                <div className="icon-item">
                  <i className="fas fa-users"></i>
                  <div className="icon-title">
                    市場聲量分析
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="product-feature container-layout">
          <section className="lowi-title">
            <div className="row">
              <div className="product-title">
              <span>產品</span>特色
              </div>
            </div>
          </section>

          <section className="independent-title">
            LOWI 輿情分析系統...(簡短講述 lowi 如何監控輿情以及如何幫助客戶)
          </section>
          <section className="feature-list">
            <div className="row flex-row">
              {features.map((item,i)=>{
                return(
                  <div className="feature-item" key={i}>
                    <i className={item.icon}></i>
                    <div className="item-content">
                      <div className="title">{item.title}</div>
                      <div className="item-describe">{item.describe}</div>
                    </div>
                  </div>)
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
