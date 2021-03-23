import React from "react";
import defaultPic from "../../img/neuftek.png"
import { Link } from "react-router-dom";

export default function ProductBoard() {
  return (
    <div className="product-board container-layout">

      <section className="board-title">
        <div className="row">
          <div className="title">
            <span>產品</span>服務
          </div>
        </div>
      </section>

      <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="product-content-title">
              LOWI輿情監測系統 
            </div>
            <div className="product-content-describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure nostrum, adipisci blanditiis sapiente ullam harum, commodi eveniet incidunt unde enim illum impedit voluptates fugiat animi placeat a corrupti! Harum dolorum eaque dignissimos eos tempore accusamus a commodi temporibus, unde sequi. Necessitatibus cumque deserunt consequatur, laborum velit tempora numquam dignissimos.
            </div>
            <div className="product-content-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/lowi">
                <button >了解更多</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <span></span>

      {/* <section className="product-board-item">
        <div className="row">
          <div className="product-img">
            <img src={defaultPic} alt="" />
          </div>
          <div className="product-content">
            <div className="product-content-title">
              關係人分析系統
            </div>
            <div className="product-content-describe">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nisi, nihil iure expedita minus dolorem sapiente? Eos commodi consequuntur in quas, enim ex distinctio repudiandae nisi, dignissimos numquam ipsa recusandae quibusdam. Odit et eos ratione alias iusto, ut officiis nesciunt! Laboriosam officiis doloremque vel aliquam illum corrupti labore hic ex!
            </div>
            <div className="product-content-btn">
              <Link onClick={()=>{window.scrollTo(0,0)}} to="/related">
                <button >了解更多</button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
