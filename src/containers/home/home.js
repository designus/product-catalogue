import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../apiMock';
import { receiveData, addToCart, updateCart } from '../../redux/actions';
import { ProductFilter, ProductList, Header } from '../../components';
import './home.css';

const PRODUCT_LIMIT = 6;

class HomePageComponent extends Component {

  state

  componentWillReceiveProps(nextProps) {
    this.setInitialState(nextProps.products);
  }

  setInitialState(products) {
    const {priceMin, priceMax} = this.getPriceRange(products);
    const filteredProducts = Object.keys(products).slice(0, PRODUCT_LIMIT);

    this.setState({
      priceMin,
      priceMax,
      filteredProducts,
      products,
      productLimit: PRODUCT_LIMIT,
      priceRange: [priceMin, priceMax],
      isInitial: true
    })
  }

  componentDidMount() {
    if (!Object.keys(this.props.products).length) {
      fetchData().then(data => this.props.receiveProducts(data))
    } else {
      this.setInitialState(this.props.products)
    }
  }

  getPriceRange(products) {
    const allPrices = Object.keys(products).map(key => products[key].price);
    return {
      priceMin: Math.min(...allPrices),
      priceMax: Math.max(...allPrices)
    };
  }

  addToCart = (product) => {
    const addToCart = this.props.cart.products[product.id] ? this.props.updateCart : this.props.addToCart;
    addToCart(product);
    this.props.history.push('/cart')
  }

  getFilteredProducts({priceMin, priceMax, productLimit, products}) {
    return Object.keys(products)
      .filter(id => {
        const price = products[id].price;
        return price >= priceMin && price <= priceMax
      })
      .slice(0, productLimit)
  }

  onPriceRangeChange = ([priceMin, priceMax]) => {
    const {productLimit, products} = this.state;
    const filteredProducts = this.getFilteredProducts({priceMin, priceMax, productLimit, products});
    this.setState({
      priceMin,
      priceMax,
      filteredProducts
    })
  }

  onLoadMoreData = () => {
    const {products, productLimit: limit, priceMin, priceMax} = this.state;
    const productCount = Object.keys(products).length; 
    const productLimit = productCount - limit < PRODUCT_LIMIT ? productCount : limit + PRODUCT_LIMIT;
    const filteredProducts = this.getFilteredProducts({products, priceMin, priceMax, productLimit})

    this.setState({productLimit, filteredProducts})
  }

  render() {
    if (this.state) {
      const {priceMin, priceMax, priceRange, filteredProducts, products, productLimit} = this.state;
      return (
        <div>
          <Header />
          <section className="content">
            <ProductFilter 
              priceMin={priceMin}
              priceMax={priceMax}
              priceRange={priceRange}
              onChange={this.onPriceRangeChange}
            />
            <ProductList 
              filteredProducts={filteredProducts}
              productsMap={products}
              loadMoreData={this.onLoadMoreData}
              limit={productLimit}
              addToCart={this.addToCart}
            />
          </section>
        </div>
      )
    }
    return null;    
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart
})
    
const mapDispatchToProps = (dispatch) => ({
  receiveProducts: (data) => dispatch(receiveData(data)),
  addToCart: (product) => dispatch(addToCart(product)),
  updateCart: (product) => dispatch(updateCart(product))
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
