import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img from '../../../img/neuftek.png'
import {createSlides} from '../../helper/slides';

export default function About() {
  return (
    <div className="about">
      <section className="about-banner">
        <div className="banner-title">
          快速掌握風向脈絡
          {/* 高科技 低風險 */}
        </div>
        <div className="banner-describe">
          some describe here e.g.,
          諾客是台灣最具洞悉力大數據平台,為您關注各大平台的社群風向，快速找到有用資訊．
          {/* Micro Focus 是全球最大的企業軟件供應商之一。我們提供值得信賴
和久經考驗的關鍵任務軟件，維持數字化世界的正常運轉。我們制定了實事求是、嚴於律己
和以客戶為中心的方針，使客戶能夠在快速發展的當今市場中大獲成功。 */}
        </div>
      </section>
      <div className="about-body">
        <div className="about-board container-layout">

          <section className="about-title">
            <div className="row">
              <div className="title">
                <span>關於</span>諾客
              </div>
            </div>
          </section>

          <section className="about-content">
            <div className="row flex-column">
              <div className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                animi quod inventore aut corporis! Ea earum iure autem accusamus
                ex a nihil pariatur suscipit unde? Natus, aspernatur. Omnis
                similique nostrum molestias voluptates tenetur asperiores eveniet
                eaque laborum, aut alias, repellendus fugiat assumenda blanditiis
                labore ut et commodi animi earum mollitia?
              </div>
              <div className="content-icon">
                <div className="icon-item">
                  <i className="fas fa-trophy"></i>
                  <div className="item-describe">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="icon-item">
                  <i className="fas fa-chart-line"></i>
                  <div className="item-describe">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className="icon-item">
                  <i className="far fa-comments"></i>
                  <div className="item-describe">
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="about-feature container-layout">

          <section className="about-title">
            <div className="row">
              <div className="title">
                技術<span>特點</span>
              </div>
            </div>
          </section>

          <section className='feature-group'>
            <div className="row">
              <div className="feature-item">
                <div className="feature-title">特點1</div>
                <div className="feature-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  magnam expedita doloribus itaque commodi quam quibusdam mollitia
                  quia praesentium harum.
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-title">特點2</div>
                <div className="feature-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
                  repudiandae explicabo excepturi voluptatem est laborum. Cupiditate
                  dignissimos quis corporis. Accusantium.
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-title">特點3</div>
                <div className="feature-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  corporis blanditiis tempore voluptatem voluptates sapiente sit
                  hic, laborum qui? Veniam.
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-title">特點4</div>
                <div className="feature-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem dolorem magnam, assumenda laboriosam soluta saepe
                  sint ipsum impedit? Tenetur, labore!
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-title">特點5</div>
                <div className="feature-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                  nemo dolore ad tempore ducimus incidunt provident asperiores iusto
                  quos ab!
                </div>
              </div>
            </div>
          </section>
        </div>
{/* 
        <div className="about-tech">
          <p>i don't know :(</p>
        </div> */}
        <div className="about-news container-layout">
          <section className="about-title">
            <div className="row">
              <div className="title">
                <span>新聞</span>報導
              </div>
            </div>
          </section>
          <section className="slider">
            <Splide
              options={ {
                focus    : 'center',
                type         : 'loop',
                // perPage      : 2,
                gap          : '1rem',
                autoplay     : true,
                pauseOnHover : true,
                resetProgress: false,
                arrows       : 'slider',
              } }
              hasSliderWrapper
              // hasAutoplayControls
              hasAutoplayProgress
            >
              { createSlides().map( slide => (
                <SplideSlide key={ slide.src }>
                  <div className="news-container">
                    <div className="news-title"> Lorem ipsum dolor sit amet. </div>
                    <div className="news-img" style= {{'background-image':`url(${slide.src})`}} ></div>
                    {/* <div className="news-img" style={{'background-image': "url(" + slide.src + ")"}} ></div> */}
                    {/* <img src={ slide.src } alt={ slide.alt } /> */}
                    <div className="news-time">
                      2021-0x-yy
                    </div>
                    <div className="news-contain">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam nihil quas quia dolorum veniam rem, minima tempora cumque velit!
                    </div>
                  </div>
                  <button className="slide__btn">Read More</button>
                </SplideSlide>
              ))}
            </Splide>
          </section>
        </div>
      </div>
    </div>
  );
}
