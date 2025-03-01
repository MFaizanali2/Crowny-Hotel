import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Location from "../components/Location/Location";
import Property from "../components/Property/Property";
import Work from "../components/Work/Work";

import { AboutData } from "../utils/constant/About";
import { ClientData } from "../utils/constant/Client";
import { DownloadData } from "../utils/constant/Download";
import { LocationData } from "../utils/constant/Location";
import { PropertyData } from "../utils/constant/Property";
import { workData } from "../utils/constant/Work";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner />
      <About data={AboutData} />

      <div className="property">
        <h1>Most Popular Hotel</h1>
        <div className="property-box">
          {PropertyData.map((item, index) => {
            return <Property key={index} data={item} />;
          })}
        </div>
      </div>

      <div className="location">
        <h1>Most Popular Destination</h1>
        <div className="location-box">
          {LocationData.map((item, index) => {
            return <Location key={index} data={item} />;
          })}
        </div>
      </div>

      <Download data={DownloadData} />
      <div className="work">
        <h1>How it Works</h1>
        <div className="work-box">
          {workData.map((item, index) => {
            return <Work key={index} data={item} />;
          })}
        </div>
      </div>

      <div className="client-box">
        {ClientData.map((item, index) => {
          return <Client key={index} data={item} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
