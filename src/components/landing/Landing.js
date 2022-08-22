import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  ArticleBox,
  LandingBox,
  LandingContent,
  ImgBox,
  DotBox,
  Dot,
  Img,
  FirstTitle,
  Date,
  Title,
  Article,
  More,
  ImgDot,
} from "./Style";

const Landing = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
    console.log(more);
  };

  return (
    <LandingBox>
      <LandingContent>
        <ArticleBox>
          <FirstTitle>أخر الأخبار</FirstTitle>
          <Date>02.09.2020 </Date>
          <Title>الرئيس السوري بشار الأسد يلتقي مع نظيره الروسي</Title>
          <Article>
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد
            {!more && (
              <More href="#" onClick={handleMore}>
                المزيد
              </More>
            )}
            {!more && (
              <ImgDot
                onClick={handleMore}
                src={require("../../assests/imgs/dots.png")}
                alt="dots"
              />
            )}
            {more && (
              <p onClick={handleMore} style={{cursor:"pointer"}}>
                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت
                فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
                باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
                بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي
                ايست لابوريوم." "سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس
                أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام
                ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايت
                كياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم
                أبسام فوليوباتاتيم كيواي فوليوبتاس سايت أسبيرناتشر أيوت أودايت
                أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجناي دولارس أيوس كيواي
                راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيوم
                ايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت,
                كونسيكتيتيور,أديبايسكاي فيلايت, سيد كيواي نون نيومكيوام ايايوس
                موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنام ألايكيوام
                كيوايرات فوليوبتاتيم. يوت اينايم أد مينيما فينيام, كيواس
                نوستريوم أكسيركايتاشيم يلامكوربوريس سيوسكايبيت لابورايوسام
              </p>
            )}
          </Article>
          <DotBox>
            <Dot />
          </DotBox>
        </ArticleBox>
        <ImgBox>
          <Img src={require("../../assests/imgs/landing.png")} alt="landing" />
        </ImgBox>
      </LandingContent>
    </LandingBox>
  );
};

export default Landing;
