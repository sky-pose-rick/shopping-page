import React from 'react';

import ItemCard from './ItemCard';

function ShopItems(props) {
  const { items, onAddToCart } = props;

  return (
    <div className="ShopItems">
      My Shop
      <ul>
        {
          items.map((item) => (
            <li key={item.id}>
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
