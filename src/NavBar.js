/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>
        Shoppage
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
}

export default NavBar;
