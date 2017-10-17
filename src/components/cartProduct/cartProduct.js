import React from 'react';
import './cartProduct.css';

export const CartProduct = ({name, wood, quantity, subtotal, img}) => {
  return (
    <div className="cart-product">
      <div className="cart-product-content">
        <div className="cart-product-thumb">
          <img alt={name} src={require(`../../images/${img}`)} />
        </div>
        <div className="cart-product-info">
          <h3>{name}</h3>
          <div>{wood}</div>
        </div>
      </div>
      <div className="price-item">
        <div>{quantity} item(s) Subtotal</div>
        <div>${subtotal}</div>
      </div>
    </div>
  )
}