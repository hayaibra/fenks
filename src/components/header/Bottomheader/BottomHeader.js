import React from "react";
import {
  ArrowBox,
  BottomBox,
  Input,
  LinkBox,
  LinkName,
  LinkWithArrow,
  SearchBox,
} from "./Style";

const Bottom = () => {
  return (
    <BottomBox>
      <LinkBox>
        <LinkWithArrow href="./">
          <LinkName>الأخبار</LinkName>
          <ArrowBox
            src={require("../../../assests/imgs/bottom-arrow.png")}
            alt="bottom-arrow"
          />
        </LinkWithArrow>
        <LinkWithArrow>ساحليات</LinkWithArrow>
        <LinkWithArrow href="./">
          <LinkName>اكشن و تحقيقات</LinkName>
          <ArrowBox
            src={require("../../../assests/imgs/bottom-arrow.png")}
            alt="bottom-arrow"
          />
        </LinkWithArrow>
        <LinkWithArrow>حوارات</LinkWithArrow>
        <LinkWithArrow href="./">
          <LinkName>متفرقات</LinkName>
          <ArrowBox
            src={require("../../../assests/imgs/bottom-arrow.png")}
            alt="bottom-arrow"
          />
        </LinkWithArrow>
        <LinkWithArrow>مقالات فينكس</LinkWithArrow>
        <LinkWithArrow>حولنا</LinkWithArrow>
      </LinkBox>
      <SearchBox>
      <img src={require("../../../assests/imgs/search.png")} alt="search" />
        <Input type="text" />
      </SearchBox>
    </BottomBox>
  );
};

export default Bottom;
