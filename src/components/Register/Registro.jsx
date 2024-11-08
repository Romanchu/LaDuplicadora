import React, { useState } from 'react';
import './Registro.css';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [mensaje, setMensaje] = useState(''); // Estado para manejar mensajes de éxito o error

  const backendUrl = process.env.REACT_APP_BACKEND_URL; // Obtiene la URL del backend desde las variables de entorno

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/registro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // Enviar solo los datos del formulario
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.message || 'Usuario registrado exitosamente');
      } else {
        setMensaje(data.message || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setMensaje('Error en la conexión con el servidor');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nombre de usuario"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="boton2">Registrarse</button>
      </form>
      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
};

export default Register;


