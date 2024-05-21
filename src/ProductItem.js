import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.price} COL</p>
      <p>{product.description.substring(0, 100)}...</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductItem;