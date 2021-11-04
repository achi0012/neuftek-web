import React from "react";
import Banner from "./pages/home/Banner";
import AboutBoard from "./pages/home/AboutBoard";
import ProductBoard from "./pages/home/ProductBoard";
import PartnerBoard from "./pages/home/PartnerBoard";
import Slider from "./pages/home/Slider"

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
