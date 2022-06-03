import "./assets/scss/main.scss";
import Navigation from "./component/layout/Navigation";
import Banner from "./component/banner/Banner";
import AboutUs from "./component/AboutUs";
import CompanyService from "./component/CompanyService";
import WatchVideo from "./component/WatchVideo";
import CoreFeature from "./component/CoreFeature";
import WhatWe from "./component/shared/WhatWe";
import MeetOurAdvisor from "./component/MeetOurAdvisor";
import ImportantArticle from "./component/ImportantArticle";
import MeetOurAdvisorSecond from "./component/MeetOurAdvisorSecond";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div>
      <div className="wrapper_container">
        <div className="wrapper_container_tringle"></div>
        <Navigation />
        <Carousel autoPlay={true} infiniteLoop={true} showArrows={false}>
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </Carousel>
      </div>
      <AboutUs />
      <CompanyService />
      <WatchVideo />
      <CoreFeature />
      <WhatWe />
      <MeetOurAdvisor />
      <MeetOurAdvisorSecond />
      <ImportantArticle />
    </div>
  );
}

export default App;
