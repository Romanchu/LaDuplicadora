import React from 'react';
import './Header.css'; // Importamos los estilos del header
import logo from '../../multimedia/Logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img src= {logo} alt="Logo de La Duplicadora" className="logo" />
      <nav className="nav">
        <li class="item"><Link to="/" class="link">Inicio</Link> </li>
        <li class="item"><Link to="/personalizacion" class="link">Personalización</Link></li>
        <a href="#contacto">Contacto</a>
        <li class="item"><Link to="/login" class="link">Iniciar Sesión</Link></li>
        <li class="item"><Link to="/registro" class="link">Registrarse</Link></li>
      </nav>
    </header>
  );
};

export default Header;
