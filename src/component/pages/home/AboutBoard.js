import React from "react";
import { Link } from "react-router-dom";
import {logo} from "../../../img";

export default function AboutBoard() {
  return (
    <div className="about-board container-layout">
      <section className="board-title">
        <div className="row flex-column">
          <div className="section-title title-gap"> 關於諾客</div>
          <hr className='underline'/>
        </div>
      </section>
      <section className="row">
        <div className="about-board-content">
          <div className="about-board-item">
            <div className="section-title bottom-gap-mg">#1</div>
            <img src={logo} alt="" />
            <div className="item-describe">
              <div className="article-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae!
              </div>
            </div>
          </div>
          <div className="about-board-item">
            <div className="section-title bottom-gap-mg">#2</div>
            <img src={logo} alt="" />
            <div className="item-describe">
              <div className="article-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae!
              </div>
            </div>
          </div>
          <div className="about-board-item">
            <div className="section-title bottom-gap-mg">#3</div>
            <img src={logo} alt="" />
            <div className="item-describe">
              <div className="article-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
                molestiae!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-board-btn item-center">
        <Link onClick={()=>{window.scrollTo(0,0)}} to='/about'>
          <button>了解更多</button>
        </Link>
      </section>
    </div>
  );
}
