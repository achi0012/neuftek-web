import React from 'react';
import { Link } from 'react-router-dom';
export default function Contact(props) {
    return (
        <section className="product-contact container-layout">
          <div className="row">
            <div className="contact-board">
              {/* <figure className="main-logo">
                <img src={logo}  alt=""/>
              </figure> */}
              <header className="article-title title-gap">
                有任何疑問嗎？
              </header>
              <p className="article-content bottom-gap-mg">
                請透過下方按鈕聯繫我們，諾客將會盡快聯繫您，並為您提供幫助。
              </p>
              <Link onClick={()=>{window.scrollTo(0,0)}} to='/contact'>
                <button>聯絡我們</button>
              </Link>
            </div>
          </div>
        </section>
    );
}