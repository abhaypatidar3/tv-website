import React from 'react';
import tvDetailsImage from '../images/tv-details.jpg';

const TVDetails = ({ tv }) => {
  return (
    <div className="tv-details">
      <img src={tvDetailsImage} alt="TV Details" />
      <h2>{tv.name}</h2>
      <p>Price: ${tv.price}</p>
      <p>Description: {tv.description}</p>
      <p>More details about the TV...</p>
    </div>
  );
};

export default TVDetails;