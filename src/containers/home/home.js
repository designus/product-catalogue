import React, { Component } from 'react';
import { fetchData } from '../../apiMock';
import { receiveData } from '../../redux/actions';
import { connect } from 'react-redux';

class HomePageComponent extends Component {

  componentDidMount() {
    if (this.props.products.length === 0) {
      fetchData().then(data => this.props.receiveProducts(data))
    } 
  }

  render() {
    console.log('Products', this.props.products);
    return (
      <div>
        This is home page
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveProducts: (data) => dispatch(receiveData(data))
  }
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
