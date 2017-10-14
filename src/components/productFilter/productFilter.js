import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export const ProductFilter = ({priceMin, priceMax, priceRange, onChange}) => {

  return (
    <div>
      <div>${priceMin}</div>
      <Range
        allowCross={false}
        defaultValue={[priceMin, priceMax]}
        min={priceRange[0]}
        max={priceRange[1]}
        onChange={onChange}
      />
      <div>${priceMax}</div>
    </div>
  )
}
