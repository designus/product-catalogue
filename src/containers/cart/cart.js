import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder } from '../../redux/actions';
import { CartModule, BillingForm } from '../../components';

class CartPageComponent extends Component {

  submitForm = () => {
    this.props.placeOrder();
    this.props.history.push('/');    
  }

  render() {
    
    return (
      <div>
        <CartModule 
          cart={this.props.cart}
          productsMap={this.props.products}
        />
        <BillingForm />
      </div>
    )    
  }
}

const mapStateToProps = (state) => ({cart: state.cart, products: state.products})
const mapDispatchToProps = (dispatch) => ({placeOrder: () => dispatch(placeOrder())})

export const CartPage  = connect(mapStateToProps, mapDispatchToProps)(CartPageComponent);