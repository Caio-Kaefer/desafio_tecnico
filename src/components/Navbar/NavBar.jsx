import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 0;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo"><Link to="/">Logo</Link></div>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="#">Serviços</Link>
            <div className="dropdown-content">
              <p className="subtext">Mão de Obra</p>
              <Link to="#" className="sublink">Service 1</Link>
              <Link to="#" className="sublink">Service 2</Link>
              <Link to="#" className="sublink">Service 3</Link>
            </div>
          </li>
          <li><Link to="#">Como Funciona</Link></li>
          <li><Link to="#">Contato</Link></li>
          <li><Link to="#">Vagas</Link></li>
          <li><Link to="#">Franquias</Link></li>
          <li className="search-wrapper">
            <input type="text" className="search" placeholder="Pesquise"/>
            <SearchIcon className="search-icon"/>
          </li>
          <li><Link to="#">Login</Link></li>
          <li><AccountCircleIcon fontSize="large"/></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
