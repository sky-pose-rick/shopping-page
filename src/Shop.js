import React, { useState, useEffect } from 'react';

import ShopItems from './ShopItems';
import Cart from './Cart';
import apiHelper from './apiHelper';
import './Shop.css';

function Shop() {
  const [qty, setQty] = useState(0);
  const [itemData, setItemData] = useState([]);

  // use an api to get items to display
  useEffect(() => {
    apiHelper.getAPIData().then((result) => {
      setItemData(result);
    });
  }, []);

  const addToCart = (x) => {
    setQty(qty + x);
  };

  return (
    <div className="Shop">
      <Cart value={qty} />
      <ShopItems items={itemData} onAddToCart={addToCart} />
    </div>
  );
}

export default Shop;
