import React from 'react';
import './Body.css'; 
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <main className="body">
      <h1>Bienvenidos a Mayorista de Impresiones</h1>
      <Link to="/personalizacion" className="link-nav">
          <button className="btn-nav">¡Haz tu pedido!</button>
      </Link>
    </main>
  );
};

export default Body;

