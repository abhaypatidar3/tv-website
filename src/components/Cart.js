import React from 'react';
import cartImage from '../images/cart.jpg';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <img src={cartImage} alt="Cart" />
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;