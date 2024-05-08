import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../../Data/DataService';
import './ServicePage.css';
import Navbar from '../../components/Navbar/NavBar';
import ServiceInputs from '../../components/ServiceButtons/ServiceInputs';
import ServiceList from '../../components/List/ServiceList'; // Importe o componente ServiceList
import services from '../../Data/Services'

function ServicePage() {
  // Extracting the id parameter from the URL
  const { id } = useParams();
  const service = getServiceById(id);

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Click event handler for the buttons
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="service-page">
      <Navbar />
      
        <div className="service-details">
          <div className="service-image">
            <img src={service.img_url} alt={service.name} />
            <div className="service-description">
              <p>{service.desc}</p> 
            </div>
          </div>
          <div className="service-info">
            <h2>{service.name}</h2>
            <p>{service.price}</p> 
            <ServiceInputs/>
            <p>Total:</p>
            <h2>{service.price}</h2>
          </div>
        </div>
        <ServiceList services={services} title={"Voce pode se interessar:"} /> 
    </div>
  );
}

export default ServicePage;
