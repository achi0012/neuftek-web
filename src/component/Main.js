import React from "react";
import Navbar from "./header/Navbar";
import Banner from "./body/Banner";
import AboutBoard from "./body/AboutBoard";
import ProductBoard from "./body/ProductBoard";
import PartnerBoard from "./body/PartnerBoard";
import Footer from "./footer/Footer";

export default function Main() {
  return (
    <div className="neuftek-web">
      <div className="neuftek-header">
        <Navbar />
      </div>
      <div className="neuftek-body">
        <Banner />
        <AboutBoard/>
        <ProductBoard/>
        <PartnerBoard/>
      </div>
      <Footer />
    </div>
  );
}
