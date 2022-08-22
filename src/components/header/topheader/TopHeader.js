import React from "react";
import { IconBox, TopHeader, SignBox, ImgBox } from "./Style";

const Top = () => {
  return (
    <TopHeader>
      <IconBox>
        <img
          src={require("../../../assests/imgs/telegram.png")}
          alt="telegram"
        />
        <img src={require("../../../assests/imgs/twitter.png")} alt="twitter" />
        <img
          src={require("../../../assests/imgs/facebook.png")}
          alt="facebook"
        />
      </IconBox>

      <ImgBox
        src={require("../../../assests/imgs/logo.png")}
        alt="logo"
      />

      <SignBox>
        <img src={require("../../../assests/imgs/person.png")} alt="person" />
        <p>تسجيل الدخول</p>
      </SignBox>
    </TopHeader>
  );
};

export default Top;
