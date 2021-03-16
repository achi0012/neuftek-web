import React from "react";
import { Link } from "react-router-dom";

export default function PartnerBoard() {
  return (
    <section className="partner-board">
      <div className="partner-board-mask">
        <div className="partner-slogan">some slogan here</div>
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/contact">
          <button>CONTACT US</button>
        </Link>
      </div>
    </section>
  );
}
