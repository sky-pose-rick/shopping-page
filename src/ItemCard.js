/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ItemCard(props) {
  const {
    title, src, alt, onSubmit,
  } = props;
  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    setQty(qty - 1);
  };

  const onChange = (e) => {
    // console.log(e.target.value);
    const inputNum = Math.floor(Number(e.target.value));
    setQty(inputNum > 0 ? inputNum : 0);
  };

  return (
    <div className="ItemCard">
      <h3>{title}</h3>
      <img src={src} alt={alt} />
      <button type="button" onClick={decrease} disabled={qty <= 0}>-</button>
      <input type="text" onChange={(e) => onChange(e)} value={qty} />
      <button type="button" onClick={increase}>+</button>
      <button
        type="submit"
        disabled={qty <= 0}
        onClick={() => {
          onSubmit(qty);
          setQty(0);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;
