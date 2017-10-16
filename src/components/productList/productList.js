import React from 'react';
import { Product } from '../product';
import './productList.css';

export const LoadMoreProductsBtn = ({showBtn, loadMoreData}) => {
  return showBtn ?<div className="load-more-data" onClick={loadMoreData}>Load more data</div> : null
}

export const ProductList = ({filteredProducts, productsMap, loadMoreData, limit, addToCart}) => {
  const showLoadMoreData = productsMap && limit < Object.keys(productsMap).length;
  return (
    <div className="product-list">
      {filteredProducts.map((id, index) => (<Product key={index} product={productsMap[id]} addToCart={addToCart} />))}
      <LoadMoreProductsBtn 
        showBtn={showLoadMoreData}
        loadMoreData={loadMoreData}
      />
    </div>
  )
}
