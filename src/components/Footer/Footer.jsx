import React from 'react';
import './Footer.css'; // Importamos los estilos del footer
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importamos los íconos
import logo from '../../multimedia/Logo.jpg'; // Ruta al logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo de La Duplicadora" className="logo-footer" />
      </div>
      <div className="footer-center">
        <p>Mayorista de impresiones</p>
      </div>
      <div className="footer-right">
        <a href="https://wa.me/2614058337" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> WhatsApp
        </a>
        <a href="https://instagram.com/mayorista_de_impresiones" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" /> Instagram
        </a>
        <a href="https://facebook.com/impresionesxmayor" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" /> Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;

