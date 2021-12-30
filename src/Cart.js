/* eslint-disable react/prop-types */
import React from 'react';

function Cart(props) {
  let { value } = props;
  if (!value) { value = 0; }

  return (
    <div className="Cart">
      <span className="material-icons-outlined">
        shopping_cart
      </span>
      <p>
        (
        {value}
        )
      </p>
    </div>
  );
}

export default Cart;
