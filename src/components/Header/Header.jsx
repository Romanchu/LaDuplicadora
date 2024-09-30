import React from "react";
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="ruta-de-tu-imagen-del-logo" alt="Logo de la tienda" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
