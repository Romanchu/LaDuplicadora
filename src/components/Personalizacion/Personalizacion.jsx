import React, { useState } from 'react';
import './Personalizacion.css';

const Personalizacion = () => {
  const [producto, setProducto] = useState('');
  const [centimetros, setCentimetros] = useState('');
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState(null); // Estado para almacenar la imagen subida

  // Función para calcular el precio estimado
  const calcularPrecio = () => {
    const precioBase = 10; // Puedes cambiar el valor base según lo necesites
    const total = centimetros * precioBase;
    setPrecio(total);
  };

  // Función para manejar la imagen subida
  const manejarSubidaImagen = (e) => {
    const archivo = e.target.files[0];
    setImagen(archivo); // Guarda la imagen en el estado
  };

  return (
    <div className="personalizacion-container">
      <h1>Personalización de Pedido</h1>
      
      {/* Lista desplegable de productos */}
      <label htmlFor="producto">Selecciona un producto:</label>
      <select
        id="producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      >
        <option value="">-- Selecciona un producto --</option>
        <option value="Producto1">Producto 1</option>
        <option value="Producto2">Producto 2</option>
        <option value="Producto3">Producto 3</option>
      </select>

      {/* Input para centímetros */}
      <label htmlFor="centimetros">Ingresa los centímetros:</label>
      <input
        type="number"
        id="centimetros"
        value={centimetros}
        onChange={(e) => setCentimetros(e.target.value)}
        placeholder="Centímetros"
      />

      {/* Botón para calcular precio */}
      <button onClick={calcularPrecio}>Calcular Precio Estimado</button>

      {/* Muestra el precio calculado */}
      {precio > 0 && (
        <p>Precio estimado: ${precio}</p>
      )}

      {/* Botón para subir imagen */}
      <label htmlFor="imagen">Sube una imagen:</label>
      <input
        type="file"
        id="imagen"
        accept="image/*"
        onChange={manejarSubidaImagen}
      />

      {/* Botón para realizar el pedido */}
      <button className="realizar-pedido">Realizar Pedido</button>

      {/* Mostrar la imagen subida */}
      {imagen && (
        <div>
          <h3>Imagen subida:</h3>
          <img src={URL.createObjectURL(imagen)} alt="Imagen subida" style={{ width: '200px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default Personalizacion;

