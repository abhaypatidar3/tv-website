import React from 'react';
import './App.css';
import TV from './components/TV';
import TVDetails from './components/TVDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const tvs = [
    {
      id: 1,
      name: 'Samsung 4K TV',
      price: 999.99,
      description: 'A high-end 4K TV with excellent picture quality',
    },
    {
      id: 2,
      name: 'LG OLED TV',
      price: 1299.99,
      description: 'A premium OLED TV with outstanding picture quality',
    },
    {
      id: 3,
      name: 'Sony 4K TV',
      price: 899.99,
      description: 'A mid-range 4K TV with good picture quality',
    },
  ];

  const cart = [
    {
      id: 1,
      name: 'Samsung 4K TV',
      price: 999.99,
    },
    {
      id: 2,
      name: 'LG OLED TV',
      price: 1299.99,
    },
  ];

  return (
    <div className="app">
      <h1>TV Store</h1>
      <div className="tv-list">
        {tvs.map((tv) => (
          <TV key={tv.id} tv={tv} />
        ))}
      </div>
      <div className="tv-details">
        <TVDetails tv={tvs[0]} />
      </div>
      <div className="cart">
        <Cart cart={cart} />
      </div>
      <div className="checkout">
        <Checkout cart={cart} />
      </div>
    </div>
  );
}

export default App;