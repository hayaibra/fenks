import React from "react";
import { NavBox, Nav } from "./Style";

const Navbar = () => {
  return (
    <NavBox>
      <Nav>منوعات</Nav>
      <Nav>صحة و مجتمع</Nav>
      <Nav>ثقافة</Nav>
      <Nav>اقتصاد</Nav>
      <Nav>حوادث</Nav>
      <Nav>فيديو فلاش</Nav>
      <Nav>أراء الصحف</Nav>
      <Nav>أرشيف خاص</Nav>
      <Nav>رئاسة الجمهورية</Nav>
    </NavBox>
  );
};

export default Navbar;
