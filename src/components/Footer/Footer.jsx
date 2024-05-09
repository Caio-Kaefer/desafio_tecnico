import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/"><h4>AJUDA</h4></Link>
        <Link to="/blog"><h4>BLOG</h4></Link>
        <Link to="/sobre-nos"><h4>SOBRE NÓS</h4></Link>
        <Link to="/politica-de-privacidade"><h4>POLÍTICA DE PRIVACIDADE</h4></Link>
      </div>
     
      <div className="footer-columns">
        <div className="footer-column">
          <h4>SUDESTE</h4>
          <p>Rio de Janeiro: (21) 2223-0397</p>
          <p>São Paulo: (11) 3138-6120</p>
          <p>Campinas: (19) 3239-3162</p>
          <p>Santos: Em breve</p>
          <p>Espírito Santo: (27) 3029-3188</p>
          <p>Minas Gerais: (31) 3657-9311</p>
        </div>
        <div className="footer-column">
          <h4>NORDESTE</h4>
          <p>Bahia: (71) 3043-6152</p>
          <p>Ceará: (85) 3034-6020</p>
          <p>Pernambuco: (81) 3314-6520</p>
          <p>Sergipe: (79) 99960-9868</p>
        </div>
        <div className="footer-column">
          <h4>SUL</h4>
          <p>Paraná: (41) 3014-7367</p>
          <p>Rio Grande do Sul: (51) 3360-4799</p>
          <p>Santa Catarina: (48) 3304-0491</p>
        </div>
        <div className="footer-column">
          <h4>CENTRO-OESTE</h4>
          <p>Mato Grosso do Sul: (67) 99987-7028</p>
          <p>Goiás: (62) 99841-0243</p>
        </div>
        <div className="footer-column">
          <h4>NORTE</h4>
          <p>Amazonas: (92) 3030-5866</p>
        </div>
      </div>
      <div className="watermark">
        By Caio Kaefer
      </div>
      </footer>
  );
};
export default Footer;

