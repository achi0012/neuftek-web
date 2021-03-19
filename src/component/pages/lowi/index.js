import React,{useState} from "react";
import alert from '../../../img/lowi/alert.jpg'
import brand from '../../../img/lowi/brand.jpg'
import marketing from '../../../img/lowi/marketing.jpg'
import textAnalysis from '../../../img/lowi/textanalysis.jpg'
import voteThing from '../../../img/lowi/votething.jpg'

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

  return (
    <div className="lowi">
      <div className="lowi-banner">
        <div className="banner-title">LOWI-輿情監測系統</div>
        <div className="banner-describe">洞悉顧客價值需求，掌握議題創造商機</div>
      </div>
      <div className="lowi-body">
        <div className="product-intro container-layout">       
          <section className="intro-describe">
            <div className="row flex-column">
              <div className="intro-subtitle">社群媒體時代變動快速，如何更有效率的掌握資訊？</div>
              <hr className='underline'/>
              <div className="intro-content">LOWI 讓您能夠從大量多樣化、跨格式和語言的外部網路資訊當中，截取您需要的重要資訊，掌握數據提升效率，大幅領先競爭對手。</div>
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
              <div className="title">
                數據 ≠ 有效的資訊，沒有整理過的大數據就是一團狗屎爛蛋 (之類的)
              </div>
              <hr className='underline'/>
              <div className="subtitle">
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
                    <div className="title">
                      {item.title}
                    </div>
                    <div className="describe">
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
                <div className="title"> 更多狂屌酷拽炫功能</div>
                <div className="describe"> 都在 ＬＯＷＩ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam omnis reiciendis reprehenderit architecto fugit temporibus placeat ullam eveniet magni inventore itaque ipsa eius, fugiat praesentium harum eum facilis provident tenetur debitis veniam tempore! Laborum minima, eos porro tempora ducimus repudiandae quae iusto incidunt maiores dicta obcaecati id, labore necessitatibus adipisci! </div>
              </div>
              <div className="feature">
                {features.map((item,i)=>{
                  return(
                    <div className="feature-list">
                      {item.map((obj,index)=>{
                        return(
                          <div className="feature-item" key={index}>
                            <i className={obj.icon}></i>
                            <div className="item-content">
                              <div className="item-title">{obj.title}</div>
                              <div className="item-describe">{obj.describe}</div>
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
              <div className="title">
                功能 DEMO
              </div>
              <hr className='underline'/>
              <div className="subtitle">
                就是 demo 的東東啦
              </div>
            </div>
          </section>
        </div>

        <div className="product-contact container-layout">

        </div>
      </div>
    </div>
  );
}
