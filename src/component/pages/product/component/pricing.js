import React from 'react';
import { Link } from "react-router-dom";

export default function Pricing(props) {
    return (
        <section className="product-pricing container-layout">
          <div className="row flex-column">
                 <header className="section-title title-gap">{props.title}</header>
                 <hr className="underline" />
          </div>
          <div className="row flex-row flex-center">
            {props.pricing.map((item,index)=>{
              return (
                <div key={index} className="pricing-item">
                  <div className="pricing-intro bottom-gap-mg">
                      <header className="article-title detail-title-gap">{item.name}</header>
                      <p className="detail-content">{item.describe}</p>
                  </div>
                  {item.detail.map((obj,i)=>{
                    return(
                      <div key={`d-${i}`} className="p-detail detail-gap">
                        {/* <div className="font">  </div>   */}
                        <i class={obj.font}></i>
                        <p className="detail-content">{obj.content}</p>
                      </div>
                    )
                  })}
                  <div className="mg-auto">
                    <Link onClick={()=>{window.scrollTo(0,0)}} to='/contact'>
                      <button className="mg-top">開始使用</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
    );
}