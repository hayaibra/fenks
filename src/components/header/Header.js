import React from "react";
import Bottom from "./Bottomheader/BottomHeader";
import { HeaderBox } from "./Style";
import Top from "./topheader/TopHeader";

const Header = () => {
  return (
    <HeaderBox>
      <Top />
      <Bottom/>
    </HeaderBox>
  );
};

export default Header;
