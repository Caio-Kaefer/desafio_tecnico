import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './NavBar.css';

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
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="#">Serviços</Link> {/* Use Link instead of anchor tag */}
            <div className="dropdown-content">
              <Link to="#">Service 1</Link>
              <Link to="#">Service 2</Link>
              <Link to="#">Service 3</Link>
            </div>
          </li>
          <li><Link to="#">About</Link></li> {/* Use Link instead of anchor tag */}
          <li><Link to="#">Contact</Link></li> {/* Use Link instead of anchor tag */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
