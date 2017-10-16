import React from 'react';
import './product.css';

export const Product = ({product, addToCart}) => {
  return (
    <div className="product-card" onClick={addToCart.bind(null, product)}>
      <div className="product-image">
        <img src={require(`../../images/${product.img}`)} />
      </div>
      <h2>{product.name}</h2>
      <div className="product-info">
        <span className="material">{product.wood}</span>
        <span className="price">${product.price} / m2</span>
      </div>
    </div>
  )
}
