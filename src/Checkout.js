import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      {paymentSuccess ? (
        <h2>¡Pago exitoso! Gracias por tu compra.</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="checkout-summary">
            <h3>Resumen del pedido</h3>
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <p>{item.title}</p>
                <p>{item.price} COL</p>
              </div>
            ))}
            <h3>Total: {totalAmount.toFixed(2)} COL</h3>
          </div>
          <div className="checkout-form">
            <h3>Información de pago</h3>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Número de tarjeta"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <button type="submit">Pagar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;