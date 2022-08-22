import React from "react";
import { FooterBox, Rights } from "./Style";
import Form from "./form/Form";
import FooterNav from "./Footer-nav/FooterNav";

const Footer = () => {
  return (
    <FooterBox>
    <Form />
    <FooterNav />
    <Rights>All right reserved .2020</Rights>
    </FooterBox>
  );
};

export default Footer;
