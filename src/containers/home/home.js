import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../apiMock';
import { receiveData } from '../../redux/actions';
import { ProductGroups, ProductFilter, ProductList } from '../../components';

class HomePageComponent extends Component {

  state: {
    filteredProducts: [],
    productLimit: 6,
    priceMin: 0,
    priceMax: 0,
    priceRange: []
  }

  componentWillReceiveProps(nextProps) {
    const products = nextProps.products;
    const {priceMin, priceMax} = this.getPriceRange(products);
    const filteredProducts = Object.keys(products);

    this.setState({
      priceMin,
      priceMax,
      filteredProducts,
      priceRange: [priceMin, priceMax]
    })
  }

  componentDidMount() {
    if (!Object.keys(this.props.products).length) {
      fetchData().then(data => this.props.receiveProducts(data))
    } 
  }

  getPriceRange(products) {
    const allPrices = Object.keys(products).map(key => products[key].price);
    return {
      priceMin: Math.min(...allPrices),
      priceMax: Math.max(...allPrices)
    };
  }

  getFilteredProducts({priceMin, priceMax, productLimit}) {
    const products = this.props.products;
    return Object.keys(products)
      .filter(id => products[id].price >= priceMin && products[id].price <= priceMax)
      .slice(0, productLimit)
  }

  onPriceRangeChange = ([priceMin, priceMax]) => {
    const filteredProducts = this.getFilteredProducts({priceMin, priceMax, productLimit: this.state.productLimit});
    this.setState({
      priceMin,
      priceMax,
      filteredProducts
    })
  }  

  render() {
    if (this.state) {
      return (
        <div>
          <ProductGroups />
          <ProductFilter 
            priceMin={this.state.priceMin}
            priceMax={this.state.priceMax}
            priceRange={this.state.priceRange}
            onChange={this.onPriceRangeChange}
          />
          <ProductList 
            filteredProducts={this.state.filteredProducts}
            productsMap={this.props.products}
          />
        </div>
      )
    }
    return null;    
  }
}

const mapStateToProps = (state) => ({
  products: state.products  
})
    
const mapDispatchToProps = (dispatch) => ({
  receiveProducts: (data) => dispatch(receiveData(data))
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
