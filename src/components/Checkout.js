import React from 'react';
import checkoutImage from '../images/checkout.jpg';

const Checkout = ({ cart }) => {
  return (
    <div className="checkout">
      <img src={checkoutImage} alt="Checkout" />
      <h2>Checkout</h2>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <p>Checkout details...</p>
    </div>
  );
};

export default Checkout;