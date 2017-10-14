import React from 'react';
import { Product } from '../product';

export const ProductList = ({filteredProducts, productsMap, loadMoreData, limit}) => {
  const showLoadMoreData = limit < Object.keys(productsMap).length;
  return (
    <div>
      {filteredProducts.map((id, index) =>  (<Product key={index} product={productsMap[id]} />))}
      {
        showLoadMoreData ?
          <div onClick={loadMoreData}>Load more data</div> :
          null 
      }
    </div>
  )
}
