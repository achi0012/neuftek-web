import React from "react";
import Banner from "./body/Banner";
import AboutBoard from "./body/AboutBoard";
import ProductBoard from "./body/ProductBoard";
import PartnerBoard from "./body/PartnerBoard";
import FormBoard from "./body/FormBoard";

export default function Main() {
  return (
    <div className="neuftek-body">
      <Banner />
      <AboutBoard />
      <ProductBoard />
      <PartnerBoard />
      <FormBoard />
    </div>
  );
}
