import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, CartPage } from '../';
import './app.css';

export class App extends Component {

  render() {
    return (
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </div>
    );
  }
}
