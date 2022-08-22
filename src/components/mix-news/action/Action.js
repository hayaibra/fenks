import React from "react";
import { ArrowBox, FTitle } from "../coastal/Style";
import {
  ActionBox,
  ActionContent,
  ActionTitle,
  Content,
  Date,
  ImageBox,
  TextBox,
  TitleBox,
} from "./Style";

const Action = () => {
  return (
    <ActionBox>
      <TitleBox>
        <FTitle style={{ color: "#2A8BCD" }}>أكشن و تحقيقات</FTitle>
        <ArrowBox>
          <img
            src={require("../../../assests/imgs/b-right-arrow.png")}
            alt="b-right-arrow"
          />
          <img
            src={require("../../../assests/imgs/b-left-arrow.png")}
            alt="b-left-arrow"
          />
        </ArrowBox>
      </TitleBox>
      <ActionContent>
        <Content style={{marginBottom:"30px"}}>
          <ImageBox>
            <img
              src={require("../../../assests/imgs/action-11.png")}
              alt="action-11"
            />
          </ImageBox>
          <TextBox>
            <ActionTitle>
              نقاشات و حواراتنقاشات و حواراتنقاشات و حوارات
            </ActionTitle>
            <Date>02.09.2020 </Date>
          </TextBox>
        </Content>
        <Content style={{marginBottom:"25px"}}>
          <ImageBox>
            <img
              src={require("../../../assests/imgs/action-2.png")}
              alt="action-2"
              style={{width:{xs:"80%" , md:"100%" , lg:"50%"}}}
             
            />
          </ImageBox>
          <TextBox>
            <ActionTitle>نقاشات و حواراتنقاشات و حوارات</ActionTitle>
            <Date>02.09.2020 </Date>
          </TextBox>
        </Content>
        <Content style={{marginBottom:"25px"}}>
          <ImageBox>
            <img
              src={require("../../../assests/imgs/action-11.png")}
              alt="action-1"
            />
          </ImageBox>
          <TextBox>
            <ActionTitle>
              نقاشات و حواراتنقاشات و حواراتنقاشات و حوارات
            </ActionTitle>
            <Date>02.09.2020 </Date>
          </TextBox>
        </Content>
        <Content>
          <ImageBox>
            <img
              src={require("../../../assests/imgs/action-3.png")}
              alt="action-3"
              style={{width:{xs:"80%" , md:"100%"}}}
              // width="80%"
            />
          </ImageBox>
          <TextBox>
            <ActionTitle>نقاشات و حواراتنقاشات و حوارات</ActionTitle>
            <Date>02.09.2020 </Date>
          </TextBox>
        </Content>
      </ActionContent>
    </ActionBox>
  );
};

export default Action;
