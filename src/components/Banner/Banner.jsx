import Slider from "react-slick";
import BannerData from "../../utils/constant/Banner";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container">

      <div className="banner-content">
        <h1>{BannerData.title}</h1>
        <p>{BannerData.subtitle}</p>
        <div className="banner-form">
          {BannerData.inputs.map((input, index) => (
            <input key={index} type={input.type} placeholder={input.placeholder} />
          ))}
          <button className="search-button">
            <i className="fas fa-search"></i> {BannerData.buttonText}
          </button>
        </div>
      </div>


      <div className="slider-wrapper">
        <Slider {...settings} className="banner-slider">
          {BannerData.images.map((image, index) => (
            <div key={index} className="banner-slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
