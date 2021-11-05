import React,{useState} from "react";
import {alert,brand,marketing,textAnalysis,voteThing,topo,popkeyword,diffiusion,alert_demo,resultList,author} from "../../../img"
import Solution from './component/solution';
import Feature from "./component/feature";
import DetailFeature from "./component/detailFeature";
import Pricing from "./component/pricing";
import Contact from "./component/contact";

export default function Lowi() {

  const [tab,setTab]= useState('m')

  const features = [
    [
      {title:'不限定主題搜索',describe:'內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少',icon:'fas fa-atlas'},
      {title:'智慧導覽 操作直觀',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-lightbulb'},
      {title:'24 小時 隋時監控',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-rocket'},
    ],
    [
      {title:'收錄超過上萬資料',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-cloud-download-alt'},
      {title:'自定義分析面板 超過40+ 圖表類型',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-th'},
      {title:'議題擴散 預警設定',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-bell'},
    ],
  ]

  const marketSol = [
    {type:'l',title:'公關預警', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''},
    {type:'ml',title:'品牌管理', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''},
    {type:'m',title:'數位行銷', subtitle:'副標題多少才好呢副標題多少才好呢副標題多少才', describe:'內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少',img:''},
    {type:'mr',title:'輿情分析', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''},
    {type:'r',title:'選戰策略', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''}
  ]


  const techList = [
    {title:'語意演算技術 判讀文章情緒', describe:'內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少內容可以多少' ,img:''},
    {title:'概念探詢 聚焦事件觀點', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''},
    {title:'影響力不及 擴散度來補', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''}
  ]

  const demoList = [
    [
      {title:'概念拓墣',describe:'某個事件或話題的全貌，對於完全未知的訊息快速歸納出概念',img:topo},
      {title:'熱門關鍵字',describe:'快速歸納各大社群體正在發生的議題',img:popkeyword},
      {title:'作者查詢',describe:'針對 KOL 相關分析',img:author},
    ],
    [
      {title:'預警設定',describe:'24 小時預警監視，自動通報異常問題',img:alert_demo},
      {title:'文章列表',describe:'快速檢視口碑內容，彈性篩選查詢結果，摘要顯示討論內容、標題和作者等重要內容。',img:resultList},
      {title:'主題擴散路徑',describe:'掌握擴散成效及頻道分布 ',img:diffiusion},
    ],
  ]

  const solutions = [
    {title:'概念拓墣',describe:'某個事件或話題的全貌，對於完全未知的訊息快速歸納出概念',img:topo},
    {title:'熱門關鍵字',describe:'快速歸納各大社群體正在發生的議題',img:popkeyword},
    {title:'作者查詢',describe:'針對 KOL 相關分析',img:author},
    {title:'預警設定',describe:'24 小時預警監視，自動通報異常問題',img:alert_demo},
    {title:'文章列表',describe:'快速檢視口碑內容，彈性篩選查詢結果，摘要顯示討論內容、標題和作者等重要內容。',img:resultList},
    {title:'主題擴散路徑',describe:'掌握擴散成效及頻道分布 ',img:diffiusion},
  ]

  const pricing = [
    {name:'中文最多幾個呢呢呢呢',describe:'擁有基本功能擁有擁有基本功能擁',detail:[{font:'fas fa-bullseye',content:'基本圖表表表表表表表表表表表'},{font:'fas fa-bullseye',content:'基本查詢'},{font:'fas fa-bullseye',content:'基本來源'}]},
    {name:'business',describe:'滿足您的基本商務需求',detail:[{font:'fas fa-bullseye',content:'基本圖表'},{font:'fas fa-bullseye',content:'進階查詢'},{font:'fas fa-bullseye',content:'進階功能'},{font:'fas fa-bullseye',content:'多數來源'}]},
    {name:'premium',describe:'擁有 lowi 諸多特色功能',detail:[{font:'fas fa-bullseye',content:'內容也可以到這麼多這麼長都沒關係'},{font:'fas fa-bullseye',content:'所有圖表'},{font:'fas fa-bullseye',content:'進階查詢'},{font:'fas fa-bullseye',content:'預警設定'},{font:'fas fa-bullseye',content:'所有功能'},{font:'fas fa-bullseye',content:'所有來源'}]}
  ]

  return (
    <div className="lowi">
      <div className="lowi-banner">
        <div className="banner-title">LOWI-輿情監測系統</div>
        <hr className="banner-underline" />
        <div className="banner-describe">洞悉顧客價值需求，掌握議題創造商機</div>
      </div>

      <div className="lowi-body">
        <section className="product-intro first-container container-layout">       
          <div className="intro-describe">
            <div className="row flex-column item-center">
              <div className="section-title title-gap">社群媒體時代變動快速，如何更有效率的掌握資訊？</div>
              <hr className='underline'/>
              <div className="section-subtitle subtitle-gap">LOWI 讓您能夠從大量多樣化、跨格式和語言的外部網路資訊當中，截取您需要的重要資訊，掌握數據提升效率，大幅領先競爭對手。</div>
            </div>
          </div>
          <div className="intro-sol">
            <div className="sol-tab row">
              <ul className="tab-list">
                <li className="tab-item" onClick={()=>setTab('l')}>
                  <img className='img-shorter' src={alert} alt=""/>
                  <div className="tab-content">
                    公關預警
                  </div>
                </li>
                <li className="tab-item" onClick={()=>setTab('ml')}>
                  <img src={brand} alt=""/>
                  <div className="tab-content">
                    品牌管理
                  </div>
                </li>
                <li className="tab-item" onClick={()=>setTab('m')} >
                  <img src={marketing} alt=""/>
                  <div className="tab-content">
                    數位行銷
                  </div>
                </li>
                <li className="tab-item" onClick={()=>setTab('mr')} >
                  <img src={textAnalysis} alt=""/>
                  <div className="tab-content">
                    輿情分析
                  </div>
                </li>
                <li className="tab-item" onClick={()=>setTab('r')} >
                  <img src={voteThing} alt=""/>
                  <div className="tab-content">
                    選戰策略
                  </div>
                </li>
              </ul>
            </div>
               
            <div className="sol-content">
              <div className="row flex-column">
                  <div className={`content-assign-${tab}`}>
                    <div className="arrow"></div>
                  </div>
              </div> 
              <div className="content-item">
                {marketSol.map((item,index) =>{
                   if(item.type === tab){
                    return (
                      // 為什麼需要輿情分析
                      <div className="row content-container" key={index}>
                        <div className="left-content">
                          <header className="tab-title">
                            {item.title}
                          </header>
                          <div className="tab-subtitle">
                            {item.subtitle}
                          </div>
                          <div className="tab-describe">
                            {item.describe}
                          </div>
                        </div>
                        <div className="right-content">
                          {/* something todo */}
                          <div className="fake"></div>
                        </div>
                      </div>)
                   }
                   return ''
                 })}
              </div>
            </div>
          </div>
        </section>

        <Feature title="數據 ≠ 有效的資訊，沒有整理過的大數據就是一團狗屎爛蛋 (之類的)" subtitle="LOWI 具備多樣且有深度的分析系統，將資訊有效歸納，讓您能快速的找到解答。" features={techList} />

        <DetailFeature features={features} title="還有其他功能" />

        <Solution title="特色功能" solutions={solutions} />

        <Pricing title="服務方案" pricing={pricing} />

        <Contact />
      </div>
    </div>
  );
}
