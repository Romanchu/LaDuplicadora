import React, { useState } from 'react';
import './Personalizacion.css';

const Personalizacion = () => {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState(0);
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

  // Función para calcular el precio basado en la cantidad y la opción seleccionada
  const calcularPrecio = () => {
    let precioBase = 0;

    // Lógica para el precio basado en el producto y la opción seleccionada
    switch (producto) {
      case 'Ecosolvente':
        switch (opcionSeleccionada) {
          case 'Vinilo b/Blanca (Brillo o matte)':
            precioBase = cantidadMetros <= 20 ? 6750 : 6370;
            break;
          case 'Vinilo b/Negra (Brillo o matte)':
            precioBase = cantidadMetros <= 20 ? 7470 : 7040;
            break;
          case 'Vinilo transparente':
            precioBase = cantidadMetros <= 20 ? 6870 : 6480;
            break;
          case 'Microperforado':
            precioBase = cantidadMetros <= 20 ? 9290 : 8760;
            break;
          case 'Lona Front 13oz':
            precioBase = cantidadMetros <= 20 ? 7110 : 6700;
            break;
          case 'Lona Backlinght':
            precioBase = cantidadMetros <= 20 ? 8220 : 7750;
            break;
          case 'Esmerilado':
            precioBase = cantidadMetros <= 20 ? 7740 : 7300;
            break;
          case 'Blackout/Fotográfico':
            precioBase = cantidadMetros <= 20 ? 11270 : 10630;
            break;
          case 'Vinilo LG Base Gris':
            precioBase = cantidadMetros <= 20 ? 10410 : 9820;
            break;
          case 'Blueback':
            precioBase = cantidadMetros <= 20 ? 4480 : 4230;
            break;
          default:
            console.error("Opción no reconocida para Ecosolvente.");
            break;
        }
        break;

      case 'Green (Epson)':
        switch (opcionSeleccionada) {
          case 'Vinilo b/Blanca (Brillo o matte)':
            precioBase = cantidadMetros <= 20 ? 8470 : 7990;
            break;
          case 'Vinilo b/Negra (Brillo o matte)':
            precioBase = cantidadMetros <= 20 ? 9090 : 8580;
            break;
          case 'Vinilo transparente':
            precioBase = cantidadMetros <= 20 ? 8580 : 8090;
            break;
          case 'Microperforado':
            precioBase = cantidadMetros <= 20 ? 11250 : 10610;
            break;
          case 'Lona Front 13oz':
            precioBase = cantidadMetros <= 20 ? 8150 : 7690;
            break;
          case 'Lona Backlinght':
            precioBase = cantidadMetros <= 20 ? 10090 : 9520;
            break;
          case 'Esmerilado':
            precioBase = cantidadMetros <= 20 ? 8300 : 7830;
            break;
          case 'Blackout/Fotográfico':
            precioBase = cantidadMetros <= 20 ? 13230 : 12480;
            break;
          case 'Vinilo LG Base Gris':
            precioBase = cantidadMetros <= 20 ? 11690 : 11030;
            break;
          case 'Blueback':
            precioBase = cantidadMetros <= 20 ? 5610 : 5290;
            break;
          case 'Corrugado plástico':
            precioBase = 8860;
            break;
          default:
            console.error("Opción no reconocida para Green (Epson).");
            break;
        }
        break;

      case 'UV':
        switch (opcionSeleccionada) {
          case 'Vinilo b/Blanca (Brillo o matte)':
            precioBase = cantidadMetros <= 10 ? 7070 : 6430;
            break;
          case 'Vinilo b/Negra (Brillo o matte)':
            precioBase = cantidadMetros <= 10 ? 7740 : 7040;
            break;
          case 'Vinilo transparente':
            precioBase = cantidadMetros <= 10 ? 7180 : 6530;
            break;
          case 'Lona Front 13oz':
            precioBase = cantidadMetros <= 10 ? 7410 : 6740;
            break;
          case 'Lona Backlinght':
            precioBase = cantidadMetros <= 10 ? 8710 : 7920;
            break;
          case 'Esmerilado':
            precioBase = cantidadMetros <= 10 ? 7220 : 6560;
            break;
          case 'Blackout/Fotográfico':
            precioBase = cantidadMetros <= 10 ? 12060 : 10960;
            break;
          case 'Vinilo LG Base Gris':
            precioBase = cantidadMetros <= 10 ? 11800 : 10730;
            break;
          case 'Blueback':
            precioBase = cantidadMetros <= 10 ? 4850 : 4410;
            break;
          case 'Corrugado plástico':
            precioBase = 16570;
            break;
          case 'ADICIONAL BLANCO UV X CAPA':
            precioBase = cantidadMetros <= 10 ? 3240 : 2950;
            break;
          case 'IMPRESIÓN DE MATERIALES RIGIDOS EN UV':
            precioBase = cantidadMetros <= 10 ? 5020 : 4560;
            break;
          default:
            console.error("Opción no reconocida para UV.");
            break;
        }
        break;

      default:
        console.error("Producto no reconocido.");
        precioBase = 0;
    }

    // Calcular el precio total
    setPrecio(precioBase * cantidadMetros);
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
    formData.append('precio', precio);
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

      <button onClick={calcularPrecio}>Calcular Precio</button>

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
