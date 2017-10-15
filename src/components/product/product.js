import React from 'react';
import { formatPrice } from '../../utils';

export const Product = ({product, addToCart}) => {
  return (
    <div onClick={addToCart.bind(null, product)}>
      <h2>{product.name}</h2>
      <hr />
      <div>
          <span>{product.wood}</span>
          <span>{formatPrice(product.price)}</span>
      </div>
    </div>
  )
}
