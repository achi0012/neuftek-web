import React from "react";
import FormBoard from "../body/contact/FormBoard";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-banner">
        <div className="banner-title">聯絡諾客</div>
        <div className="banner-describe">我們的專業團隊將協助您解決疑問</div>
      </div>
      <FormBoard/>
    </div>
  );
}
