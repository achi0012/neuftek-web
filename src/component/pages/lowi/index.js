import React,{useState} from "react";
import alert from '../../../img/lowi/alert.jpg'
import brand from '../../../img/lowi/brand.jpg'
import marketing from '../../../img/lowi/marketing.jpg'
import textAnalysis from '../../../img/lowi/textanalysis.jpg'
import voteThing from '../../../img/lowi/votething.jpg'
import topo from '../../../img/lowi/demo_topo.jpg'
import popkeyword from '../../../img/lowi/demo_popkeyword.jpg'
import diffiusion from '../../../img/lowi/demo_ diffusion.jpg'
import alert_demo from '../../../img/lowi/demo_alert.jpg'
import resultList from '../../../img/lowi/demo_resultList.jpg'
import author from '../../../img/lowi/demo_authorSearch.jpg'
import { Link } from "react-router-dom";

export default function Lowi() {

  const [tab,setTab]= useState('m')

  const features = [
    [
      {title:'不限定主題搜索',describe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus recusandae ipsa iusto ullam fugit quis, tempore natus. Laudantium, ipsa.',icon:'fas fa-atlas'},
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
    {type:'m',title:'數位行銷', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''},
    {type:'mr',title:'輿情分析', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''},
    {type:'r',title:'選戰策略', subtitle:'Lorem ipsum dolor sit amet', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita.',img:''}
  ]


  const techList = [
    {title:'語意演算技術 判讀文章情緒', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''},
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

  return (
    <div className="lowi">
      <div className="lowi-banner">
        <div className="banner-title">LOWI-輿情監測系統</div>
        <hr className="banner-underline" />
        <div className="banner-describe">洞悉顧客價值需求，掌握議題創造商機</div>
      </div>
      <div className="lowi-body">
        <div className="product-intro first-container container-layout">       
          <section className="intro-describe">
            <div className="row flex-column item-center">
              <div className="section-title title-bottom">社群媒體時代變動快速，如何更有效率的掌握資訊？</div>
              <hr className='underline'/>
              <div className="section-subtitle subtitle-bottom">LOWI 讓您能夠從大量多樣化、跨格式和語言的外部網路資訊當中，截取您需要的重要資訊，掌握數據提升效率，大幅領先競爭對手。</div>
            </div>
          </section>
          <section className="intro-sol">
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
                          <div className="tab-title">
                            {item.title}
                          </div>
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
                 })}
              </div>
            </div>
          </section>
        </div>

        <div className="product-tech container-layout">

          <section className="tech-title">
            <div className="row flex-column">
              <div className="section-title title-bottom">
                數據 ≠ 有效的資訊，沒有整理過的大數據就是一團狗屎爛蛋 (之類的)
              </div>
              <hr className='underline'/>
              <div className="section-subtitle subtitle-bottom">
                LOWI 具備多樣且有深度的分析系統，將資訊有效歸納，讓您能快速的找到解答。
              </div>
            </div>
          </section>

          <section className="tech-container">
            <div className="row flex-column">
              {techList.map((item,i)=>{
                return(
                <div className={ parseInt(i) === (techList.length-1) ? " tech-item lastest-item"  : " tech-item "} key={i}>
                  <div className="tech-img">
                    <div className="fake"></div>
                  </div>
                  <div className="tech-content">
                    <div className="article-title bottom-gap-mg">
                      {item.title}
                    </div>
                    <div className="article-content">
                      {item.describe}
                    </div>
                  </div>
                </div>) 
              })}
            </div> 
          </section>

          <section className="tech-feature">
            <div className="row flex-row">
              <div className="describe">
                <div className="title"> 還有其他功能</div>
                <div className="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nemo!</div>
              </div>
              <div className="feature">
                {features.map((item,i)=>{
                  return(
                    <div className={parseInt(i) === (features.length-1) ? "feature-list lastest-list" : "feature-list"} key={i}>
                      {item.map((obj,index)=>{
                        return(
                          <div className="feature-item" key={index}>
                            <i className={obj.icon}></i>
                            <div className="item-content">
                              <div className="detail-title">{obj.title}</div>
                              <div className="detail-content">{obj.describe}</div>
                            </div>
                          </div>)
                      })}
                    </div>)
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="product-demo container-layout">
          <section className="demo-title">
            <div className="row flex-column">
              <div className="section-title title-bottom">
                功能演示
              </div>
              <hr className='underline'/>
              {/* <div className="subtitle">
                就是 demo 的東東啦
              </div> */}
            </div>
          </section>
          <section className="demo-container">
            <div className="row flex-column">
              {demoList.map((item,i)=>{
                return(
                  <div key={i} className="demo-list">
                    {item.map((obj,index)=>{
                      return(
                        <div className="demo-item" key={index}>
                          <div className="demo-title">
                            {obj.title}
                          </div>
                          <div className="demo-img">
                            <img src={obj.img} alt=""/>
                            {/* <div className="fake-img"></div> */}
                          </div>
                          <div className="demo-describe">
                            {obj.describe}
                          </div>
                        </div>
                      )
                    })}  
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <div className="product-contact">
          <div className="contact-layout">
            <div className="contact-content">
              <Link onClick={()=>{window.scrollTo(0,0)}} to='/contact'>
                <button>立即使用</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
