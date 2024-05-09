import React from "react";
import Slider from "react-slick";
import './BrandSlider.css'

function BrandSlider() {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0, // Adjust speed (milliseconds)
    };

    return (
        <div className="brand-slider">
            <div className="text-container">
                <div className="item">
                    <h1>+1000</h1>
                    <h2>Clientes <br/> atendidos</h2>
                </div>
                <div className="item">
                    <h1>+20</h1>
                    <h2>anos de <br /> mercado</h2>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                    <div className="image">
                        <img src="https://russelservico.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fxp.6b396081.png&w=128&q=75" style={{ width: '65%' }} />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default BrandSlider;
