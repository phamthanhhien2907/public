import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo3 from "../assets/demo3.jpg"
import demo2 from "../assets/demo2.jpg"
import demo1 from "../assets/demo1.gif"

import Slider from "react-slick";
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
const SlickSlider = () => {
  return (
    <div className="slider-container">
      <Slider {...settings} className="w-full p-2 ">
        <div className="w-full">
          <img
            src={demo2}
            alt="banner"
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full">
          <img
            src={demo2}
            alt="banner"
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full">
          <img
            src={demo2}
            alt="banner"
            className="rounded-lg w-full"
          />
        </div>
      </Slider>
    </div>
  )
}

export default SlickSlider