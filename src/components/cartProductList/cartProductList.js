import React from 'react';
import { CartProduct } from '../cartProduct';

export const CartProductList = ({cartProducts, productsMap}) => {
  return Object.keys(cartProducts).map((id, index) => {
    const productInfo = productsMap[id];
    const product = cartProducts[id];
    const {name, wood} = productInfo;
    return (
      <CartProduct 
        key={index}
        name={name}
        wood={wood}
        quantity={product.quantity}
        subtotal={product.subTotal}
      />
    )
  })
}