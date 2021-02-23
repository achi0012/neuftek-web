import React from "react";
import Banner from "./body/main/Banner";
import AboutBoard from "./body/main/AboutBoard";
import ProductBoard from "./body/main/ProductBoard";
import PartnerBoard from "./body/main/PartnerBoard";

export default function Main() {
  return (
    <div className="neuftek-body">
      <Banner />
      <AboutBoard />
      <ProductBoard />
      <PartnerBoard />
      {/* <FormBoard /> */}
      {/* <section style={{height:"7rem",}}></section> */}
    </div>
  );
}
