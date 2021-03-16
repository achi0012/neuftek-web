import React from "react";
import { Link } from "react-router-dom";
import defaultPic from "../../img/neuftek.png";

export default function AboutBoard() {
  return (
    <div className="about-board container-layout">
      <section className="about-board-title">
        <div className="row">
          <div className="board-title">
            關於<span>諾客</span>
          </div>
        </div>
      </section>

      <section className="row">
        <div className="about-board-content">
          <div className="about-board-item">
            <div className="item-title">#1</div>
            <img src={defaultPic} alt="" />
            <div className="item-describe">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              molestiae!
            </div>
          </div>
          <div className="about-board-item">
            <div className="item-title">#2</div>
            <img src={defaultPic} alt="" />
            <div className="item-describe">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              molestiae!
            </div>
          </div>
          <div className="about-board-item">
            <div className="item-title">#3</div>
            <img src={defaultPic} alt="" />
            <div className="item-describe">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
              molestiae!
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
