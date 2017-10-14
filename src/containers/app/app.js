import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { HomePage, CartPage } from '../';
import './app.css';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </div>
    );
  }
}
