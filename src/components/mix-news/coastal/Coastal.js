import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Ads,
  ArrowBox,
  CoastalBox,
  CoastalContent,
  Content,
  Date,
  FTitle,
  Image,
  ImageCoastal,
  NewTitle,
  TextBox,
  TitleBox,
} from "./Style";

const Coastal = () => {
  return (
    <CoastalBox>
      <TitleBox>
        <FTitle>ساحليات</FTitle>
        <ArrowBox>
          <img
            src={require("../../../assests/imgs/right-arrow.png")}
            alt="right-arrow"
          />
          <img
            src={require("../../../assests/imgs/left-arrow.png")}
            alt="left-arrow"
          />
        </ArrowBox>
      </TitleBox>
      <CoastalContent>
        <Content>
          <Image>
            <ImageCoastal
              src={require("../../../assests/imgs/photo-1.png")}
              alt="photo-1"
            />
          </Image>
          <Box>
            <NewTitle>الجامع الأموي يعلن إغلاقه بسبب فيروس كورونا</NewTitle>
            <Date>02.09.2020 </Date>
          </Box>
        </Content>
        <Content>
          <Image>
            <ImageCoastal
              src={require("../../../assests/imgs/photo-2.png")}
              alt="photo-2"
            />
          </Image>
          <Box>
            <NewTitle>مرفا طرطوس يعلن تعليق مهامه حتى نهاية الشهر</NewTitle>
            <Date>02.09.2020 </Date>
          </Box>
        </Content>
        <Content>
          <Image>
            <ImageCoastal
              src={require("../../../assests/imgs/photo-3.png")}
              alt="photo-3"
            />
          </Image>
          <Box>
            <NewTitle>بطل من الجيش السوري يروي لنا ما حدث في قرية</NewTitle>
            <Date>02.09.2020 </Date>
          </Box>
        </Content>
      </CoastalContent>

      <Ads src={require("../../../assests/imgs/ad.png")} alt="ad" />
    </CoastalBox>
  );
};

export default Coastal;
