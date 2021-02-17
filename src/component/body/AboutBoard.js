import React from "react";
import aboutpic from "../../img/about-pic.jpg";
import defaultPic from "../../img/neuftek.png";

export default function AboutBoard() {
  return (
    <div className="about-board">
      <div className="board-title">關於</div>
      <div className="about-board-content">
        <div className="about-board-item">
          <div className="item-title">#1</div>
          <img src={defaultPic} alt=""/>
          <div className="item-describe">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            molestiae!
          </div>
        </div>
        <div className="about-board-item">
          <div className="item-title">#2</div>
          <img src={defaultPic} alt=""/>
          <div className="item-describe">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            molestiae!
          </div>
        </div>
        <div className="about-board-item">
          <div className="item-title">#3</div>
          <img src={defaultPic} alt=""/>
          <div className="item-describe">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
            molestiae!
          </div>
        </div>
      </div>
      <button className="about-board-btn">了解更多</button>
    </div>
  );
}