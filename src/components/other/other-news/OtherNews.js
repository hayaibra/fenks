import React from "react";
import { Date, News, OtherNewsBox, OtherTitle, TextBox } from "./Style";

const OtherNews = () => {
  return (
    <OtherNewsBox>
      <News>
        <img src={require("../../../assests/imgs/other-1.png")} alt="other-1" />
        <TextBox>
          <OtherTitle>بلا سياسة صحة بلا سياسة صحةبلا سياسة صحة</OtherTitle>
          <Date>02.09.2020 </Date>
        </TextBox>
      </News>
      <News>
        <img src={require("../../../assests/imgs/other-2.png")} alt="other-2" />
        <TextBox>
          <OtherTitle>بلا سياسة صحة بلا سياسة صحةبلا سياسة صحة</OtherTitle>
          <Date>02.09.2020 </Date>
        </TextBox>
      </News>
      <News>
        <img src={require("../../../assests/imgs/other-3.png")} alt="other-3" />
        <TextBox>
          <OtherTitle>بلا سياسة صحة بلا سياسة صحةبلا سياسة صحة</OtherTitle>
          <Date>02.09.2020 </Date>
        </TextBox>
      </News>
    </OtherNewsBox>
  );
};

export default OtherNews;
