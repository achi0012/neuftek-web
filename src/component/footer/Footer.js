import React from "react";
import logo from "../../img/logo-banner.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-roadmap">
          <div className="footer-neuftek">
            <img src={logo} alt="" />
            <span>諾客網科股份有限公司</span>
          </div>

          <div className="footer-product">
            <div className="info-title">產品</div>
            <Link className="info-item" onClick={()=>{window.scrollTo(0,0)}} to="/lowi">LOWI 輿情監測系統</Link>
            {/* <Link className="info-item" onClick={()=>{window.scrollTo(0,0)}} to="/related">關係人分析系統</Link> */}
          </div>

          <div className="footer-map">
            <div className="info-title">Neuftek</div>
            <Link className="info-item" onClick={()=>{window.scrollTo(0,0)}} to="/about">關於諾客</Link>
            <Link className="info-item" onClick={()=>{window.scrollTo(0,0)}} to="/support">SUPPORT</Link>
            <Link className="info-item" onClick={()=>{window.scrollTo(0,0)}} to="/contact">CONTACT US</Link>
          </div>

          <div className="contact-info">
            <div className="info-title">聯絡我們</div>
            <div className="info-item">電話 : 886-2-2363-6068</div>
            <div className="info-item">傳真 : 886-2-2363-6090</div>
            <div className="info-item">mail : message@neuftek.com</div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>2021 Neuftek-web BETA 1.0</span>
        <span>Copyright © 2014-2021 Neuftek. All rights reserved.</span>
      </div>
    </div>
  );
}
