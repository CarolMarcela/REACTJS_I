import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.title}</h3>
            <p>{item.price} COL</p>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <Link to="/checkout" className="checkout-button">Ir a Checkout</Link>
      )}
    </div>
  );
};

export default Cart;