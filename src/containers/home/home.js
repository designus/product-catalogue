import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../apiMock';
import { receiveData } from '../../redux/actions';
import { ProductGroups, ProductFilter, ProductList } from '../../components';

class HomePageComponent extends Component {

  componentDidMount() {
    if (!Object.keys(this.props.products).length) {
      fetchData().then(data => this.props.receiveProducts(data))
    } 
  }

  render() {
    return (
      <div>
        <ProductGroups />
        <ProductFilter />
        <ProductList products={this.props.products}/>
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
