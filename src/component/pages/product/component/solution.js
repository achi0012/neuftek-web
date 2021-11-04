import React from 'react';
import classNames from 'classnames';

export default function Solution(props) {
    return (
        <section className="product-solution container-layout">
          <div className="row flex-column">
            <header className="section-title title-gap">{props.title}</header>
            <hr className="underline" />
          </div>
          <div className="row flex-column flex-row-gap">
            {props.solutions.map((item,i)=>{
              return(
                <div className={classNames("solution",{'flex-row-rev' : i & 1},{'pd-bottoom-0': i === props.solutions.length-1})} key={i}>
                    <figure className="sol-img">
                      {/* <img src={item.img} alt=""/> */}
                      <div className="fake-content"></div>
                    </figure>
                    <article className="sol-content">
                      <header className="article-title bottom-gap-mg">{item.title}</header>
                      <p className="article-content">{item.describe}</p>
                    </article>
                </div>
              )
            })}
          </div>
        </section>
    );
}