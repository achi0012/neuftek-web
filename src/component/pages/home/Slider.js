import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const IMAGE_URL = 'https://source.unsplash.com/random/800x350'

const news = [
  {
    title:' LOWI輿情分析系統，為品牌洞悉線上的風吹草動',
    time:'2019-11-21',
    content:'面對多元、複雜又快速演變的線上社群與媒體，品牌該如何掌握話題、融入熱門討論、了解競品議題呢？',
    src:'https://www.brain.com.tw/news/articlecontent?ID=48322#dzcr8rZk'
  },{
    title:'掌握輿情就掌握先機！LOWI為企業把關話題動態',
    time:'2019-11-13',
    content:'在社群口碑的時代，網友的一句話，可能就會為品牌帶來莫大影響。當越來越多企業積極耕耘社群時，LOWI輿情監測系統，就為企業即時把關網路聲量，掌握輿情動向',
    src:'https://www.bnext.com.tw/article/55462/chief201911'
  },{
    title:'是方攜手諾客 LOWI 3.0輿情監測分析系統進化上線',
    time:'2019-10-25',
    content:'',
    src:'https://ctee.com.tw/livenews/aj/ctee/a79860002019102423262956'
  },{
    title:'諾客網科張聖彥：掌握大數據分析能有效達到目標',
    time:'2018-10-04',
    content:'',
    src:'https://mol.mcu.edu.tw/%E8%AB%BE%E5%AE%A2%E7%B6%B2%E7%A7%91%E5%BC%B5%E8%81%96%E5%BD%A5%EF%BC%9A%E6%8E%8C%E6%8F%A1%E5%A4%A7%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90%E8%83%BD%E6%9C%89%E6%95%88%E9%81%94%E5%88%B0%E7%9B%AE%E6%A8%99/'
  },{
    title:'最新消息- 歡迎「諾客網科」加入協會！',
    time:'2018-01-19',
    content:'諾客網科是一家專精於人工智慧、大數據之技術開發與應用的專業公司，能處理與分析各類非結構化資料，包括：社群網路、電子郵件、視訊、音訊、文字與網頁 。',
    src:'https://www.dma.org.tw/newsPost/212'
  },
]

function Slider() {
  return (
    <div className="slider-board container-layout">
        
      <section className="board-title">
      <div className="row flex-column">
          <div className="section-title title-gap">新聞報導</div>
          <hr className='underline'/>
        </div>
      </section>

      <section className="slider">
        <Splide
          options={{
            focus: "center",
            type: "loop",
            // perPage      : 2,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            resetProgress: false,
            arrows: "slider",
          }}
          hasSliderWrapper
          // hasAutoplayControls
          hasAutoplayProgress
        >
          {news.map((slide,index) => (
            <SplideSlide key={slide.src}>
              <div className="news-container">
                <div className="news-title"> {slide.title} </div>
                <div
                  className="news-img"
                  style={{ "background-image": `url(${ IMAGE_URL }?sig=${ index })` }}
                ></div>
                <div className="news-time">{slide.time}</div>
                <div className="news-contain">{slide.content}</div>
              </div>
              <button className="slide__btn">
                <a href={slide.src}>
                了解更多
                </a>
              </button>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </div>
  );
}

export default Slider;
