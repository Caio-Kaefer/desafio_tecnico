import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceCard from '../Card/ServiceCard';
import './ServiceList.css'

function ServiceList({ services, title }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="service-list">
      <h1>{title}</h1>
      <Slider {...settings}>
        {services.map(service => (
          <div key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServiceList;
