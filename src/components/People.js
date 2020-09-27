import React from 'react';

const People = ({ people }) => {
  return (
    <div className='card'>
      <h3>{people.name}</h3>
      <p>Gender - {people.gender}</p>
      <p>Birthyear - {people.birth_year}</p>
    </div>
  );
};

export default People;
