import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Personalizacion from './components/Personalizacion/Personalizacion';
import Registro from './components/Register/Registro';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      {}
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/personalizacion" element={<Personalizacion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;




