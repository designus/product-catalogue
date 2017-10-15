import React from 'react';
import { CartProductList } from '../cartProductList';

export const AdditionalPricing = ({shippingPrice, installationPrice}) => {
  return (
    <div className="additional-pricing">
      <div className="price-item">
        <div>Shipping & Handling</div>
        <div>${shippingPrice}</div>
      </div>
      <div className="price-item">
        <div>Fitting & Installation</div>
        <div>${installationPrice}</div>
      </div>
    </div>
  )
}

export const CartModule = ({cart, productsMap}) => {
  return (
    <div>
      <h2>Summary</h2>
      {Object.keys(cart.products).length ? 
        <div>
          <CartProductList 
            cartProducts={cart.products}
            productsMap={productsMap}
          />
          <AdditionalPricing 
            shippingPrice={cart.shippingPrice}
            installationPrice={cart.installationPrice}
          />
          <hr />
          <div className="total-sum">
            {cart.totalSum}
          </div>
        </div>
      : 'Your cart is empty'}
    </div>
  )
}
