import React from 'react';
import { CartProduct } from '../cartProduct';

export const CartProductList = ({cartProducts, productsMap}) => {
  return Object.keys(cartProducts).map((id, index) => {
    const productInfo = productsMap[id];
    const product = cartProducts[id];
    const {name, wood, img} = productInfo;
    return (
      <CartProduct 
        key={index}
        img={img}
        name={name}
        wood={wood}
        quantity={product.quantity}
        subtotal={product.subTotal}
      />
    )
  })
}