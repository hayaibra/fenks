import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/landing/Landing";
import MixNews from "../components/mix-news/MixNews";
import Other from "../components/other/Other";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Landing />
      <MixNews />
      <Other />
      <Footer/>
    </div>
  );
};

export default Layout;
