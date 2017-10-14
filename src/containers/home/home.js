import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../apiMock';
import { receiveData } from '../../redux/actions';
import { ProductGroups, ProductFilter, ProductList } from '../../components';

class HomePageComponent extends Component {

  componentDidMount() {
    if (this.props.products.length === 0) {
      fetchData().then(data => this.props.receiveProducts(data))
    } 
  }

  render() {
    return (
      <div>
        <ProductGroups />
        <ProductFilter />
        <ProductList />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products  
})
    
const mapDispatchToProps = (dispatch) => ({
  receiveProducts: (data) => dispatch(receiveData(data))
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
