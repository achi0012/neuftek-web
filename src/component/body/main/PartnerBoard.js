import React from "react";
import { Link } from "react-router-dom";

export default function PartnerBoard() {
  return (
    <div className="partner-board">
      <div className="partner-board-mask">
        <div className="partner-slogan">some slogan here</div>
        <Link to="/contact">
          <button>CONTACT US</button>
        </Link>
      </div>
    </div>
  );
}
