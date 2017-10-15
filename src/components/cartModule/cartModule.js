import React from 'react';
import { CartProductList } from '../cartProductList';

export const CartModule = ({cart, productsMap}) => {
  return (
    <div>
      <h2>Summary</h2>
      <CartProductList 
        cartProducts={cart.products}
        productsMap={productsMap}
      />
      <div className="additional-pricing">
        <div className="price-item">
          <div>Shipping & Handling</div>
          <div>${cart.shippingPrice}</div>
        </div>
        <div className="price-item">
          <div>Fitting & Installation</div>
          <div>${cart.installationPrice}</div>
        </div>
        <hr />
        <div className="total-sum">
          {cart.totalSum}
        </div>
      </div>
    </div>
  )
}
