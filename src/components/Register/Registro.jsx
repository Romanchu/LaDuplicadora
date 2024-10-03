import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css';
import ReCAPTCHA from 'react-google-recaptcha';

function Registro() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [registroCompletado, setRegistroCompletado] = useState(false);
  const [mostrarTic, setMostrarTic] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Por favor, verifica que no eres un robot.');
      return;
    }

    if (contrasena !== repetirContrasena) {
      alert('Las contraseñas deben coincidir');
      return;
    }

    try {
      await axios.post('http://localhost:3000/registro', {
        usuario,
        contrasena,
        correoElectronico,
        captchaValue,
      });

      setRegistroCompletado(true);
      setMostrarTic(true);

      setTimeout(() => {
        setMostrarTic(false);
      }, 2000);
    } catch (error) {
      alert('Error al registrarse');
      console.log('Error al registrarse', error);
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit} className="formStyle">
        <h2>Registro</h2>
        <div className="campo">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="correoElectronico">Correo Electrónico</label>
          <input
            type="email"
            id="correoElectronico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="repetirContrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetirContrasena"
            value={repetirContrasena}
            onChange={(e) => setRepetirContrasena(e.target.value)}
            required
          />
        </div>
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6Lfw51YqAAAAACpkSTnma9X1ZR2gUtTMhFKq1Vdm"
            onChange={onCaptchaChange}
          />
        </div>
        <button className="boton2" type="submit">
          Enviar
        </button>
        {registroCompletado && (
          <div className="registro-completado">
            <div className={`tic ${mostrarTic ? 'mostrar' : ''}`}>
              <div className="brazo1"></div>
              <div className="brazo2"></div>
            </div>
            <p>Registro completado</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Registro;


