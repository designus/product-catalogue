import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartModule } from '../../components';

class CartPageComponent extends Component {

  render() {
    return (
      <div>
        <CartModule 
          cart={this.props.cart}
          productsMap={this.props.products}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({cart: state.cart, products: state.products})

export const CartPage  = connect(mapStateToProps)(CartPageComponent);