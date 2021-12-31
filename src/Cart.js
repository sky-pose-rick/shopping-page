/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css';

function Cart(props) {
  let { value } = props;
  if (!value) { value = 0; }

  return (
    <div className="Cart">
      <img src="./img/cart_24dp.png" alt="Cart: " />
      <p>
        (
        {value}
        )
      </p>
      <button type="button">Checkout</button>
    </div>
  );
}

export default Cart;
