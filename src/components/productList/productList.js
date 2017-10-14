import React from 'react';
import { Product } from '../product';

export const ProductList = ({filteredProducts, productsMap}) => {
  return (
    <div>
      {filteredProducts.map((id, index) => 
        (<Product key={index} product={productsMap[id]} />)
      )}
    </div>
  )
}
