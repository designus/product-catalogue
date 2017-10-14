import React from 'react';
import { Product } from '../product';

export const ProductList = ({products}) => {
  return (
    <div>
      {Object.keys(products).map((product, index) => 
        (<Product product={products[product]} key={index} />)
      )}
    </div>
  )
}
