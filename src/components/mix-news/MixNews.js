import React from "react";
import Action from "./action/Action";
import Coastal from "./coastal/Coastal";
import { MixBox, MixContent } from "./Style";

const MixNews = () => {
  return (
    <MixBox>
      <MixContent>
        <Coastal />
        <Action />
      </MixContent>
    </MixBox>
  );
};

export default MixNews;
