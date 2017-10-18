import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { placeOrder } from '../../redux/actions';
import { CartModule, BillingForm } from '../../components';
import './cart.css';
import logo from '../../images/logo-dark.png';

class CartPageComponent extends Component {

  placeOrder = () => {
    this.props.placeOrder();
    this.props.history.push('/');    
  }

  render() {
    
    return (
      <div>
        <section className="cart-header">
          <img src={logo} alt="logo" />
          <Link className="go-back" to="/">Go back to shop</Link>
        </section>
        <section className="steps">
          <div className="steps-content">
            <div className="step past">Shipping</div>
            <div className="step current">Billing</div>
            <div className="step future">Review</div>
          </div>
        </section>
        <section className="cart-content">
          <BillingForm placeOrder={this.placeOrder} />
          <CartModule 
            cart={this.props.cart}
            productsMap={this.props.products}
          />
        </section>
      </div>
    )    
  }
}

const mapStateToProps = (state) => ({cart: state.cart, products: state.products})
const mapDispatchToProps = (dispatch) => ({placeOrder: () => dispatch(placeOrder())})

export const CartPage  = connect(mapStateToProps, mapDispatchToProps)(CartPageComponent);