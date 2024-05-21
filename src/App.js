import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
        <Link to="/checkout" className="checkout-link">Ir a Checkout</Link>
      </div>
    </Router>
  );
}

export default App;