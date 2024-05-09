import React from 'react';
import './WelcomePage.css';
import ServiceList from '../../components/List/ServiceList'; 
import  services from '../../Data/Services'
import ImgCarrousel from '../../components/ImgCorrousel/ImgCarrousel';
import MainSlider from '../../components/MainSlider/MainSlider';
import Navbar from '../../components/Navbar/NavBar';
import ImgGrid from '../../components/ImgGrid/ImgGrid';
import Footer from '../../components/Footer/Footer';
import BrandSlider from '../../components/BrandSlider/BrandSlider';
function WelcomePage() {
  return (
    <div className="welcome-page">
      <Navbar/>
      <MainSlider/>
      <BrandSlider/>
      <ImgCarrousel/>
      <ServiceList services={services} title={"Obras"} /> 
      <ImgGrid/>
      <ServiceList services={services} title={"Logistica"} /> 
      
      <Footer/>
    </div>
  );
}

export default WelcomePage;
