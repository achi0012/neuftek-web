import React from "react";
import { createSlides } from "../helper/slides";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Slider() {
  return (
    <div className="slider-board container-layout">
        
      <section className="board-title">
        <div className="row">
          <div className="title">
            <span>新聞</span>報導
          </div>
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
          {createSlides().map((slide) => (
            <SplideSlide key={slide.src}>
              <div className="news-container">
                <div className="news-title"> Lorem ipsum dolor sit amet. </div>
                <div
                  className="news-img"
                  style={{ "background-image": `url(${slide.src})` }}
                ></div>
                {/* <div className="news-img" style={{'background-image': "url(" + slide.src + ")"}} ></div> */}
                {/* <img src={ slide.src } alt={ slide.alt } /> */}
                <div className="news-time">2021-0x-yy</div>
                <div className="news-contain">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet aliquam nihil quas quia dolorum veniam rem, minima
                  tempora cumque velit!
                </div>
              </div>
              <button className="slide__btn">了解更多</button>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </div>
  );
}

export default Slider;
