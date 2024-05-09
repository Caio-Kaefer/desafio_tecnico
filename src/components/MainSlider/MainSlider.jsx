import React from "react";
import Slider from "react-slick";
import './MainSlider.css'

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="image">
          <img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Ffiles%2F20anos-d.jpg%3Fv%3D1707239982&w=1920&q=75" style={{ width: '100%'}} />
        </div>
        <div className="image">
          <img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Ffiles%2F20anos-d.jpg%3Fv%3D1707239982&w=1920&q=75" style={{ width: '100%' }} />
        </div>
        <div className="image">
          <img src="https://russelservico.com.br/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0799%2F5156%2F1014%2Ffiles%2F20anos-d.jpg%3Fv%3D1707239982&w=1920&q=75" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
}

export default MainSlider;
