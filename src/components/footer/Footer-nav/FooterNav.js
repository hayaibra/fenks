import React from "react";
import { Nav, NavBox, NavList } from "./Style";

const FooterNav = () => {
  return (
    <NavBox>
      <NavList>
        <Nav>الأخبار</Nav>
        <Nav>بلا سياسة</Nav>
        <Nav>نقاشات و حوارات</Nav>
        <Nav>أخرى</Nav>
        <Nav>صحفيون ناشؤن</Nav>
        <Nav>إنضم لنا</Nav>
        <Nav>حولنا</Nav>
      </NavList>
    </NavBox>
  );
};

export default FooterNav;
