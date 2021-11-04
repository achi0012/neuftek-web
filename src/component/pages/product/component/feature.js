import React from 'react';

export default function Feature(props) {
    return (
        <section className="product-feature container-layout">
          <div className="row flex-column">
            <header className="section-title title-gap">
                {props.title}
            </header>
            <hr className='underline'/>
            <p className="section-subtitle subtitle-gap">
                {props.subtitle}
            </p>
          </div>

          <div className="row flex-column">
            {props.features.map((item,i)=>{
              return(
              <div className="feature-item" key={i}>
                <figure className="feature-img">
                  <div className="fake"></div>
                </figure>
                <article className="feature-content">
                  <header className="article-title bottom-gap-mg">
                    {item.title}
                  </header>
                  <p className="article-content">
                    {item.describe}
                  </p>
                </article>
              </div>) 
            })}
          </div>
        </section>
    );
}