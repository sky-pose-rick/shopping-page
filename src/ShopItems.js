/* eslint-disable react/prop-types */
import React from 'react';
import uniqid from 'uniqid';

import ItemCard from './ItemCard';

function ShopItems(props) {
  let { items, onAddToCart } = props;
  if (!items) { items = []; }
  if (!onAddToCart) { onAddToCart = null; }

  return (
    <div className="ShopItems">
      <ul>
        {
          items.map((item) => (
            <li key={item.id || uniqid()}>
              <ItemCard
                title={item.title}
                src={item.src}
                alt={item.alt}
                onSubmit={onAddToCart}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ShopItems;
