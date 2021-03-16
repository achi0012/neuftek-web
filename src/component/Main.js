import React from "react";
import Banner from "./body/Banner";
import AboutBoard from "./body/AboutBoard";
import ProductBoard from "./body/ProductBoard";
import PartnerBoard from "./body/PartnerBoard";
import Slider from "./body/Slider"

export default function Main() {
  return (
    <div className="neuftek-body">
      <Banner />
      <AboutBoard />
      <ProductBoard />
      <Slider/>
      <PartnerBoard />
    </div>
  );
}
