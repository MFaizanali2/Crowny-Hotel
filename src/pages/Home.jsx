import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Download from "../components/Download/Download";
import Header from "../components/Header/Header";
import Location from "../components/Location/Location";
import Property from "../components/Property/Property";

import { AboutData } from "../utils/constant/About";
import { DownloadData } from "../utils/constant/Download";
import { LocationData } from "../utils/constant/Location";
import { PropertyData } from "../utils/constant/Property";

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
    </div>
  );
};

export default Home;
