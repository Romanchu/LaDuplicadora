import React, { useState } from 'react';
import './Personalizacion.css';

const Personalizacion = () => {
  const [producto, setProducto] = useState('');
  const [imagen, setImagen] = useState(null);
  const [email, setEmail] = useState('');
  const [opcionesAdicionales, setOpcionesAdicionales] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [cantidadMetros, setCantidadMetros] = useState('');
  const [detallesAdicionales, setDetallesAdicionales] = useState(''); // Cuadro de texto para especificaciones adicionales

  // Opciones disponibles para cada tipo de producto
  const productosOpciones = {
    'Ecosolvente': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte)', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback'],
    'Green (Epson)': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte)', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback', 'Corrugado plástico'],
    'UV': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte)', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback', 'Corrugado plástico', 'ADICIONAL BLANCO UV X CAPA', 'IMPRESIÓN DE MATERIALES RIGIDOS EN UV (NO INCLUYE MATERIAL NI CAPAS DE BLANCO)'],
  };

  const manejarSubidaImagen = (e) => {
    const archivo = e.target.files[0];
    setImagen(archivo);
  };

  const handleProductoChange = (e) => {
    const selectedProducto = e.target.value;
    setProducto(selectedProducto);

    if (productosOpciones[selectedProducto]) {
      setOpcionesAdicionales(productosOpciones[selectedProducto]);
    } else {
      setOpcionesAdicionales([]);
    }
  };

  const enviarPedido = async () => {
    if (!producto || !cantidadMetros || !email) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('producto', producto);
    formData.append('opcionSeleccionada', opcionSeleccionada); 
    formData.append('cantidadMetros', cantidadMetros);
    formData.append('email', email);
    formData.append('imagen', imagen);
    formData.append('detallesAdicionales', detallesAdicionales); // Añade los detalles adicionales

    try {
      const token = localStorage.getItem('token'); 

      const response = await fetch('http://localhost:8080/enviar-pedido', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` 
        },
        body: formData,
      });

      if (response.ok) {
        alert('Pedido enviado exitosamente');
      } else {
        const data = await response.json();
        alert(data.message || 'Error al enviar el pedido');
      }
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      alert('Error en la conexión con el servidor');
    }
  };

  return (
    <div className="personalizacion-container">
      <h1>Personalización de Pedido</h1>

      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo del comprador"
        required
      />

      <label htmlFor="producto">Selecciona un producto:</label>
      <select
        id="producto"
        value={producto}
        onChange={handleProductoChange}
      >
        <option value="">-- Selecciona un producto --</option>
        <option value="Ecosolvente">Ecosolvente</option>
        <option value="Green (Epson)">Green (Epson)</option>
        <option value="UV">UV</option>
      </select>

      {/* Opciones adicionales según el producto */}
      {producto && (
        <>
          <label htmlFor="opcionAdicional">Selecciona una opción:</label>
          <select
            id="opcionAdicional"
            value={opcionSeleccionada}
            onChange={(e) => setOpcionSeleccionada(e.target.value)}
          >
            {opcionesAdicionales.map((opcion, index) => (
              <option key={index} value={opcion}>{opcion}</option>
            ))}
          </select>
        </>
      )}

      <label htmlFor="cantidadMetros">Cantidad en MT o MT2:</label>
      <input
        type="number"
        id="cantidadMetros"
        value={cantidadMetros}
        onChange={(e) => setCantidadMetros(e.target.value)}
        placeholder="Cantidad de metros"
      />

      {/* Cuadro de texto para especificaciones adicionales */}
      <label htmlFor="detallesAdicionales">Especificaciones adicionales:</label>
      <textarea
        id="detallesAdicionales"
        value={detallesAdicionales}
        onChange={(e) => setDetallesAdicionales(e.target.value)}
        placeholder="Especificaciones adicionales del pedido"
        rows="4"
      />

      <label htmlFor="imagen">Sube una imagen:</label>
      <input
        type="file"
        id="imagen"
        accept="image/*"
        onChange={manejarSubidaImagen}
      />

      <button className="realizar-pedido" onClick={enviarPedido}>
        Realizar Pedido
      </button>

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

