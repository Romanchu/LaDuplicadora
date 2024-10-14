import React, { useState } from 'react';
import './Personalizacion.css';

const Personalizacion = () => {
  const [producto, setProducto] = useState('');
  const [centimetros, setCentimetros] = useState('');
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState(null);
  const [email, setEmail] = useState('');
  const [opcionesAdicionales, setOpcionesAdicionales] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  // Opciones adicionales dependiendo del producto seleccionado
  const productosOpciones = {
    'Ecosolvente': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback'],
    'Green (Epson)': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback', 'Corrugado plástico'],
    'UV': ['Vinilo b/Blanca (Brillo o matte)', 'Vinilo b/Negra (Brillo o matte', 'Vinilo transparente', 'Microperforado', 'Lona Front 13oz', 'Lona Backlinght', 'Esmerilado', 'Blackout/Fotográfico', 'Vinilo LG Base Gris', 'Blueback', 'Corrugado plástico', 'ADICIONAL BLANCO UV X CAPA', 'IMPRESIÓN DE MATERIALES RIGIDOS EN UV (NO INCLUYE MATERIAL NI CAPAS DE BLANCO'],
  };

  const calcularPrecio = () => {
    const precioBase = 10;
    const total = centimetros * precioBase;
    setPrecio(total);
  };

  const manejarSubidaImagen = (e) => {
    const archivo = e.target.files[0];
    setImagen(archivo);
  };

  const handleProductoChange = (e) => {
    const selectedProducto = e.target.value;
    setProducto(selectedProducto);

    // Actualiza las opciones adicionales dependiendo del producto seleccionado
    if (productosOpciones[selectedProducto]) {
      setOpcionesAdicionales(productosOpciones[selectedProducto]);
    } else {
      setOpcionesAdicionales([]);
    }
  };

  // Función para enviar el pedido
  const enviarPedido = async () => {
    if (!producto || !centimetros || !email) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('producto', producto);
    formData.append('opcionSeleccionada', opcionSeleccionada); // Opción adicional seleccionada
    formData.append('centimetros', centimetros);
    formData.append('precio', precio);
    formData.append('email', email);
    formData.append('imagen', imagen);

    try {
      const token = localStorage.getItem('token'); // Obtén el token del localStorage

      const response = await fetch('http://localhost:8080/enviar-pedido', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` // Incluye el token en los encabezados
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

      {/* Lista desplegable adicional dependiendo del producto seleccionado */}
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

      <label htmlFor="centimetros">Ingresa los centímetros:</label>
      <input
        type="number"
        id="centimetros"
        value={centimetros}
        onChange={(e) => setCentimetros(e.target.value)}
        placeholder="Centímetros"
      />

      <button onClick={calcularPrecio}>Calcular Precio Estimado</button>

      {precio > 0 && <p>Precio estimado: ${precio}</p>}

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



