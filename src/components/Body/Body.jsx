import React from 'react';
import './Body.css'; // Importamos los estilos del body

const Body = () => {
  return (
    <main className="body">
      <h1>Bienvenidos a Mayorista de Impresiones</h1>
      <button onClick={() => window.location.href = '#personalizacion'}>Ir a Personalización</button>
    </main>
  );
};

export default Body;

