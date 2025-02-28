/* eslint-disable react/prop-types */
import "./Location.css";

const Location = ({data}) => {
    const {city, imgUrl, purpose} =  data
  return (
    <div className="card-container">
      <div className="card">
        <img src={imgUrl} alt="City-image" className="card-image"/>
        <div className="card-content">
          <h5>{city}</h5>
          <p>{purpose}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;