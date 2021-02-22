// import React, { useState, useEffect } from "react";
import React from "react";
import logo from "../../img/logo-header.png";
import { Link } from "react-router-dom";

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
      <Link className="navbar-list-item" to='/'><img src={logo} alt="neuf-logo" /></Link>
      <Link className="navbar-list-item" to='/lowi'>LOWI-輿情分析系統</Link>
      <Link className="navbar-list-item" to='/related'>關係人分析系統</Link>
    </div>
    <div className="navbar-service">
      <Link className="navbar-list-item" to='/about'>about us</Link>
      <Link className="navbar-list-item" to='/contact'>contact us</Link>
      <Link className="navbar-list-item item-end" to='/support'>support</Link>
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
