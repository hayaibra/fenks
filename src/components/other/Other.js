import React from "react";
import BestNews from "./best-news/BestNews";
import Navbar from "./navbar/Navbar";
import OtherNews from "./other-news/OtherNews";
import { FTitle, NewsBox, OtherBox } from "./Style";

const Other = () => {
  return (
    <OtherBox>
      <FTitle>متفرقات</FTitle>
      <Navbar />
      <NewsBox>
        <BestNews />
        <OtherNews/>
      </NewsBox>
    </OtherBox>
  );
};

export default Other;
