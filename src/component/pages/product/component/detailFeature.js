import React from 'react';

export default function DetailFeature(props) {
    return (
        <section className="product-detailFeature">
          <div className="row flex-row">
            <div className="describe">
              <header className="article-title">{props.title}</header>
            </div>
            <div className="feature">
              {props.features.map((item,i)=>{
                return(
                  <div className={parseInt(i) === (props.features.length-1) ? "feature-list lastest-list" : "feature-list"} key={i}>
                    {item.map((obj,index)=>{
                      return(
                        <div className="feature-item" key={index}>
                          <i className={obj.icon}></i>
                          <div className="item-content">
                            <div className="detail-title">{obj.title}</div>
                            <div className="detail-content">{obj.describe}</div>
                          </div>
                        </div>)
                    })}
                  </div>)
              })}
            </div>
          </div>
        </section>
    );
}