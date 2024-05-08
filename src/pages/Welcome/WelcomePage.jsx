import React from 'react';
import './WelcomePage.css';
import ServiceList from '../../components/List/ServiceList'; // Importe o componente ServiceList
import  services from '../../Data/Services'
import ImgCarrousel from '../../components/ImgCorrousel/ImgCarrousel';
import MainSlider from '../../components/MainSlider/MainSlider';
import Navbar from '../../components/Navbar/NavBar';
import ImgGrid from '../../components/ImgGrid/ImgGrid';
import Footer from '../../components/Footer/Footer';
function WelcomePage() {
  return (
    <div className="welcome-page">
      <Navbar/>
      <MainSlider/>
      <ImgCarrousel/>
      <ServiceList services={services} title={"Obras"} /> 
      <ImgGrid/>
      <ServiceList services={services} title={"Logistica"} /> 
      <Footer/>
    </div>
  );
}

export default WelcomePage;
