import React, { useState } from 'react';
import './Registro.css';
import ReCAPTCHA from 'react-google-recaptcha'; 

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [captchaValue, setCaptchaValue] = useState(null); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!captchaValue) {
      alert('Por favor completa el captcha.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form, captchaValue }), 
      });

      const data = await response.json(); 

      if (response.ok) {
        alert(data.message || 'Usuario registrado exitosamente');
      } else {
        alert(data.message || 'Error en el registro');
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      alert('Error en la conexión con el servidor');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); 
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
        
        {}
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6Lfw51YqAAAAACpkSTnma9X1ZR2gUtTMhFKq1Vdm" 
            onChange={handleCaptchaChange}
          />
        </div>

        <button type="submit" className="boton2">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
