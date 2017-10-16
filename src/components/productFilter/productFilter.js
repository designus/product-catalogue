import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './productFilter.css';
const filterIcon = require('../../images/filter-icon.png')

export const ProductFilter = ({priceMin, priceMax, priceRange, onChange}) => {

  return (
    <div className="product-filter">
      <div className="slider-filter">
        <div className="filter-price">${priceMin}</div>
        <Range
          allowCross={false}
          defaultValue={[priceMin, priceMax]}
          min={priceRange[0]}
          max={priceRange[1]}
          onChange={onChange}
        />
        <div className="filter-price">${priceMax}</div>
      </div>
      <div className="filter-label">
        <img src={filterIcon} alt="filter" />
        <span>Filter</span>
      </div>
    </div>
  )
}
