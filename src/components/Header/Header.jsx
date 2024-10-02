import React from 'react';
import './Header.css'; // Importamos los estilos del header
import logo from '../../multimedia/Logo.jpg'

const Header = () => {
  return (
    <header className="header">
      <img src= {logo} alt="Logo de La Duplicadora" className="logo" />
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#personalizacion">Personalización</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
