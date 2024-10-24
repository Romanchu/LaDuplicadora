import React, { useState } from 'react';
import './Header.css'; 
import logo from '../../multimedia/Logomdi.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo de La Duplicadora" className="logo" />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Este es el ícono de hamburguesa */}
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}> 
        <li className="item"><Link to="/" className="link">Inicio</Link></li>
        <li className="item"><Link to="/personalizacion" className="link">Pedidos</Link></li>
        <li className="item"><Link to="/registro" className="link">Registrarse</Link></li>
        <li className="item"><Link to="/login" className="link">Iniciar Sesión</Link></li>
      </nav>
    </header>
  );
};

export default Header;
