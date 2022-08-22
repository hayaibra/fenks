import React from "react";
import {
  BoxF,
  FormBox,
  FormTitle,
  InfoBox,
  Label,
  MsgBox,
  PersonBox,
  Input,
  SentButton,
} from "./Style";

const Form = () => {
  return (
    <FormBox>
      <FormTitle>تواصل معنا</FormTitle>
      <InfoBox>
        <PersonBox>
          <BoxF>
            <Input type="text" placeholder="الاسم" />
          </BoxF>
          <BoxF>
            <Input type="text" placeholder="الايميل" />
          </BoxF>
        </PersonBox>
        <MsgBox>
          <BoxF>
            <Input type="text" placeholder="الرسالة" />
          </BoxF>
        </MsgBox>
      </InfoBox>
      <SentButton>ارسال</SentButton>
      </FormBox>
  );
};

export default Form;
