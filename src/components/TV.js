import React from 'react';
import tvImage from '../images/tv.jpg';

const TV = ({ tv }) => {
  return (
    <div className="tv">
      <img src={tvImage} alt="TV" />
      <h2>{tv.name}</h2>
      <p>Price: ${tv.price}</p>
      <p>Description: {tv.description}</p>
    </div>
  );
};

export default TV;