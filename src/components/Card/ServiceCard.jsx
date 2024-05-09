import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.img_url} style={{ maxWidth: '200px', objectFit: 'cover' }} />
      <h3>{service.name}</h3>
      <p>{service.price}</p>
      <Link to={`/service/${service.id}`}>
        <button>Contratar<AddShoppingCartIcon fontSize='small' /></button>
      </Link>
    </div>
  );
}

export default ServiceCard;
