
import React from "react";

//components
import Home from "./components/Home";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection'";
import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";

// images & videos
import tvImage from "./assets/tv.png";
import tvVideo from "./assets/tv-video.m4v";
import appleTv from "./assets/appleTv.png";
import appleVideo from "./assets/appleVideo.m4v";
import mobileImg from "./assets/mobile.jpg";
import cartoonImg from "./assets/cartoonImg.png";

//data file
import data from "./data/data.json";
// styles

import "./styles/app.scss";


function App() {
  

  return (
    <div className="App">
      <Home />
      <SecondSection tvImage={tvImage} tvVideo={tvVideo} heading={data.heading[0].sec_s} content={data.content[0].sec_s} />
      <ThirdSection image={mobileImg} heading={data.heading[1].thi_s} content={data.content[1].thi_s} />
      <FourthSection tvImage={appleTv} tvVideo={appleVideo} heading={data.heading[2].fou_S} content={data.content[2].fou_s} />
      <ThirdSection image={cartoonImg} heading={data.heading[3].fif_s} content={data.content[3].fif_s} />
      <AccordionSection accordion={data.accordion} />
      <Footer footerOne={data.footerOne} footerTwo={data.footerTwo} footerThree={data.footerThree} />
    </div>
  );
}

export default App;
