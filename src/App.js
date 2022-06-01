import "./assets/scss/main.scss";
import SwitchButton from "./component/shared/SwitchButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight, faIde } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Card from "./component/shared/Card";
import SecondCard from "./component/shared/SecondCard";
import Navigation from "./component/layout/Navigation";
import Banner from "./component/banner/Banner";
import AboutUs from "./component/AboutUs";
import CompanyService from "./component/CompanyService";
import WatchVideo from "./component/WatchVideo";
import CoreFeature from "./component/CoreFeature";

function App() {
  return (
    <div>
      <div className="app_heading_container">
        <Navigation />
        <div className="app_heading_triangle_3"></div>
        <Banner />
      </div>
      <AboutUs />
      <CompanyService />
      <WatchVideo />
      <CoreFeature />
      {/* <SwitchButton /> */}
      {/* <FontAwesomeIcon icon={faArrowRight} /> */}
      {/* <Card />
      <SecondCard /> */}
    </div>
  );
}

export default App;
