import React from 'react';
import { Product } from '../product';
import './productList.css';

export const LoadMoreProductsBtn = ({showBtn, loadMoreData}) => {
  return showBtn ? <div className="load-more-data" onClick={loadMoreData}>Load more data</div> : null
}

export const ProductList = ({filteredProducts, productsMap, loadMoreData, limit, addToCart}) => {
  const hasEnoughData = limit < Object.keys(productsMap).length;
  const hasEnoughFilteredProducts = filteredProducts.length >= limit;
  const showLoadMoreData = productsMap && hasEnoughData && hasEnoughFilteredProducts;
  const isPositionAdjusted = filteredProducts.length % 3 !== 0;
  const className = `product-list ${isPositionAdjusted ? 'alternative' : ''}`;
  
  return (
    <div className={className}>
      {filteredProducts.map((id, index) => (<Product key={index} product={productsMap[id]} addToCart={addToCart} />))}
      <LoadMoreProductsBtn 
        showBtn={showLoadMoreData}
        loadMoreData={loadMoreData}
      />
    </div>
  )
}
