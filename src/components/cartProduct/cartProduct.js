import React from 'react';

export const CartProduct = ({name, wood, quantity, subtotal, img}) => {
  return (
    <div className="cart-product">
      <div className="cart-product-content">
        <div className="cart-product-thumb">img</div>
        <div>
          <h3>{name}</h3>
          <div>{wood}</div>
        </div>
      </div>
      <div className="cart-product-subtotal">
        <div>{quantity} item(s) Subtotal</div>
        <div>${subtotal}</div>
      </div>
    </div>
  )
}