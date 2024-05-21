import React from 'react';
import logo from './img/icono2.jpeg';
import './Navbar.css'; 

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h2>BIENVENIDOS A HISTORIA BOUTIQUE</h2>
        <div>
          <a href="/">PRODUCTOS</a>
          <a href="/cart">Carro de Compras ({cartCount})</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
