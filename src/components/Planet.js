import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className='card'>
      <h3>{planet.name}</h3>
      <p>Populatiton - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
