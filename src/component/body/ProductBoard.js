import React from "react";
import defaultPic from "../../img/neuftek.png"
import { Link } from "react-router-dom";

export default function ProductBoard() {
  return (
    <div className="product-board container-layout">

      <section className="product-board-title">
        <div className="row">
          <div className="board-title">
            <span>LOWI </span>輿情分析系統
          </div>
        </div>
      </section>
      
      <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="board-describe">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veritatis perspiciatis velit similique et ex a unde, mollitia quo provident.</div>
            <div className="board-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/lowi">
                <button >了解更多</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product-board-title">
        <div className="row">
          <div className="board-title">
            <span>關係人</span>分析系統
          </div>
        </div>
      </section>

      <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="board-describe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam sequi molestiae tenetur sint veniam ea eaque optio asperiores hic!</div>
            <div className="board-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/related">
                <button >了解更多</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
