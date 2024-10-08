import React, { useState } from 'react';
import './Login.css';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!captchaValue) {
      setMensaje('Por favor, verifica que no eres un robot.');
      return;
    }

    // Enviar los datos al backend para iniciar sesión
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token en localStorage o sessionStorage
        localStorage.setItem('token', data.token);
        setMensaje('Inicio de sesión exitoso');
      } else {
        setMensaje(data.message);
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setMensaje('Error en la conexión con el servidor.');
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="campo">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6Lfw51YqAAAAACpkSTnma9X1ZR2gUtTMhFKq1Vdm"
            onChange={onCaptchaChange}
          />
        </div>
        <button className="boton3" type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
}

export default Login;
