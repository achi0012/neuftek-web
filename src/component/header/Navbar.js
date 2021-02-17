import React, { useState, useEffect } from "react";
import logo from "../../img/logo-header.png";

export default function Navbar() {
  const debounce = (fn) => {
    let frame;
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  };

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  document.addEventListener("scroll", debounce(storeScroll), { passive: true });

  storeScroll();
  return (
    <div className="navbar">
    <div className="navbar-product">
      <img src={logo} alt="neuf-logo" />
      <div className="navbar-list-item">LOWI-輿情分析系統</div>
      <div className="navbar-list-item">關係人分析系統</div>
    </div>
    <div className="navbar-service">
      <div className="navbar-list-item">about us</div>
      <div className="navbar-list-item">contact us</div>
      <div className="navbar-list-item item-end">support</div>
    </div>
  </div>
  );
}

// 透過 js 監聽抓取 scroll
// const [intElemScrollTop, setintElemScrollTop] = useState(window.scrollY);

// function debounce(func, delay = 250) {
//   let timer = null;
//   return () => {
//     let context = this;
//     let args = arguments;

//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// }

// function handleScroll() {
//   setintElemScrollTop(window.scrollY);
// }

// window.addEventListener("scroll", debounce(handleScroll));
