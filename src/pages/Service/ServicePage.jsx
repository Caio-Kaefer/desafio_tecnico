import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../../Data/DataService';
import './ServicePage.css';
import Navbar from '../../components/Navbar/NavBar';
import ServiceInputs from '../../components/ServiceInputs/ServiceInputs';
import Footer from '../../components/Footer/Footer';


function ServicePage() {
  const { id } = useParams();
  const service = getServiceById(id);

  return (
    <div className="service-page">
      <Navbar />
      
        <div className="service-details">
          <div className="service-image">
            <img src={service.img_url} alt={service.name} />
            <div className="service-description">
              <p>{service.desc}</p> 
              <p><div className="important">Importante:</div> Oferecemos expertise profissional para o seu projeto, mas lembramos que fornecemos apenas a mão de obra.Os materiais necessários ficam por conta do cliente.</p>
            </div>
          </div>
          <div className="service-info">
            <h2>{service.name}</h2>
            <p>{service.price}</p> 
            <ServiceInputs total={service.price}/>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default ServicePage;
