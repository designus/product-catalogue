import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const logo = require('../../images/logo.png');
const searchIcon = require('../../images/search.png');
const cartIcon = require('../../images/cart.png');

export const Header = () => {
  return (
    <section className="header">
      <div className="top-bar">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="top-left-menu">
          <ul>
            <li className="active"><a href="/">Shop</a></li>
            <li><a href="/#">Inspiration</a></li>
            <li><a href="/#">Help</a></li>
          </ul>
        </div>
        <div className="top-right-menu">
          <img src={searchIcon} alt="search" className="search-icon" />
          <span>My account</span>
          <Link to="/cart"><img src={cartIcon} alt="cart" /></Link>
        </div>
      </div>
      <div className="slogan">
        <span>Beauty, strength unbeatable character that makes a beautiful backdrop in any home.</span>
      </div>
      <div className="product-groups"> 
        <div className="group"><span>Hardwood</span></div>
        <div className="group"><span>Laminate</span></div>
        <div className="group"><span>Carpets</span></div>
      </div>
    </section>
  )
}