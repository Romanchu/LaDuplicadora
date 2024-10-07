import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 
import logo from '../../multimedia/Logomdi.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo de La Duplicadora" className="logo-footer" />
      </div>
      <div className="footer-center">
        {}
        <a href="mailto:mayoristadeimpresiones@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" /> Gmail: mayoristadeimpresiones@gmail.com
        </a>
        <a href="tel:+5492614058337" target="_blank" rel="noopener noreferrer">
          <FaPhone className="icon" /> Teléfono: +54 9 261 405 8337
        </a>
        <a href="https://maps.app.goo.gl/m9hDsVKt8NBZ2rJo8" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt className="icon" /> Dirección: Perito Moreno 1075, Godoy Cruz
        </a>
      </div>
      <div className="footer-right">
        {}
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
