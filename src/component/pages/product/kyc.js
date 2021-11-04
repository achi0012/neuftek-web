import React,{useState} from 'react';
import {topo,popkeyword,diffiusion,alert_demo,resultList,author} from '../../../img/index'
import Solution from './component/solution';
import Feature from "./component/feature";
import DetailFeature from "./component/detailFeature";
import Contact from './component/contact';

export default function Kyc() {
    const solutions = [
        {title:'概念拓墣',describe:'某個事件或話題的全貌，對於完全未知的訊息快速歸納出概念',img:topo},
        {title:'熱門關鍵字',describe:'快速歸納各大社群體正在發生的議題',img:popkeyword},
        {title:'作者查詢',describe:'針對 KOL 相關分析',img:author},
        {title:'預警設定',describe:'24 小時預警監視，自動通報異常問題',img:alert_demo},
        {title:'文章列表',describe:'快速檢視口碑內容，彈性篩選查詢結果，摘要顯示討論內容、標題和作者等重要內容。',img:resultList},
        {title:'主題擴散路徑',describe:'掌握擴散成效及頻道分布 ',img:diffiusion},
      ]

      const techList = [
        {title:'語意演算技術 判讀文章情緒', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''},
        {title:'概念探詢 聚焦事件觀點', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''},
        {title:'影響力不及 擴散度來補', describe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo ipsum at ullam ad eaque illo, accusamus corrupti sunt fugiat doloremque possimus quibusdam deserunt ducimus facilis culpa, maxime, debitis ut numquam. Atque accusantium neque excepturi. Tenetur, fugit obcaecati ipsa ipsum numquam quos velit quia officiis id culpa aut minima sed?' ,img:''}
      ]

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

    return (
        <div className="kyc">
            <div className="kyc-banner">
                <div className="banner-title">關係人分析系統</div>
                <hr className="banner-underline" />
                <div className="banner-describe">快速找出利益關係人</div>
            </div>
            <div className="kyc-body">
                <section className="kyc-intro first-container container-layout">
                    <div className="row flex-column">
                        <p className="section-title title-gap">從「關聯性」出發</p>
                        <hr className='underline'/>
                        <p className="section-subtitle subtitle-gap">
                            關係人分析系統能描繪公司與公司、公司與人、公司與事件、人與事件的 mesh 關係，協助業主更全面的了解客戶 。
                        </p>
                    </div>
                    <div className="row flex-row flex-space-around">
                        <div className="intro-item">
                            <figure className="item-img">
                                {/* <img src="" alt="" /> */}
                                <div className="fake-content-circle"></div>
                            </figure>
                            <article className="item-content">
                                <p className="detail-title">找出實際受益人</p>
                            </article>
                        </div>
                        <div className="intro-item">
                            <figure className="item-img">
                                <div className="fake-content-circle"></div>
                            </figure>
                            <article className="item-content">
                                <p className="detail-title">找到利益關聯公司</p>
                            </article>
                        </div>
                        <div className="intro-item">
                            <figure className="item-img">
                                <div className="fake-content-circle"></div>
                            </figure>
                            <article className="item-content">
                                <p className="detail-title">瞭解客戶實際需求</p>
                            </article>
                        </div>
                    </div>

                    <div className="row flex-column">
                        <figure className="intro-example">
                            <div className="fake-content"></div>
                        </figure>
                        <div className="intro-content">
                            <p className="article-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus nostrum nam magni porro! Quod?</p>
                        </div>
                    </div>
                </section>

                <Feature title='Know Your Customer' subtitle="藉由關聯找出實質受益人" features={techList} />

                <DetailFeature features={features} title="還有其他功能" />

                <Solution title='特色功能' solutions={solutions}/>
                
                {/* todo pricing */}
                {/* <section className="kyc-situation container-layout">
                    <div className="row flex-row"></div>
                </section> */}

                <Contact />
            </div>
        </div>
    );
}
