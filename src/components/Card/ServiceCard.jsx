import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.img_url} style={{ maxWidth: '200px', objectFit: 'cover' }} />
      <h3>{service.name}</h3>
      <p>{service.price}</p>
      <Link to={`/service/${service.id}`}>
        <button>Contratar</button>
      </Link>
    </div>
  );
}

export default ServiceCard;
