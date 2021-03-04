import React from "react";
import { Link } from "react-router-dom";
import defaultPic from "../../img/neuftek.png";

export default function AboutBoard() {
  return (
    <div className="about-board">
      <div className="board-title">
        關於<span>諾客</span>
      </div>
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
      <div className="about-board-btn">
        <Link to='/about'>
          <button>了解更多</button>
        </Link>
      </div>
    </div>
  );
}
