import React, { useState } from "react";
import { More} from "../../landing/Style";
import { BoxImg, Img, NewsBox, TextBox, Title ,Article,Date} from "./Style";

const BestNews = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <NewsBox>
      <BoxImg>
        <Img src={require("../../../assests/imgs/news.png")} alt="news" />
      </BoxImg>
      <TextBox>
        <Title style={{fontSize:{sm:'16px', md:"30px"}}}>الكورونا تحصد حتى الأن 1000000 مصاب عالميا في حالة خطرة</Title>
        <Article>
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد
          {!more && (
            <More href="#" onClick={handleMore}>
              المزيد
            </More>
          )}
          {more && (
            <p onClick={handleMore} style={{ cursor: "pointer" }}>
              أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
              كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي
              فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور.
              أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان
              كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم." "سيت
              يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم
              أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا
              كيواي أب أللو أنفينتوري فيرأتاتيس ايت كياسي أرشيتيكتو بيتاي فيتاي
              ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي
              فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي
              كونسيكيونتشر ماجناي دولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي
              نيسكايونت. نيكيو بوررو كيوايسكيوم ايست,كيواي دولوريم ايبسيوم كيوا
              دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيد كيواي نون
              نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار
              ماجنام ألايكيوام كيوايرات فوليوبتاتيم. يوت اينايم أد مينيما
              فينيام, كيواس نوستريوم أكسيركايتاشيم يلامكوربوريس سيوسكايبيت
              لابورايوسام
            </p>
          )}
        </Article>
        <Date style={{ width: "100%" }}>02.09.2020 </Date>
      </TextBox>
    </NewsBox>
  );
};

export default BestNews;
