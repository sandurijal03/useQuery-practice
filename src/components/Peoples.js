import React from 'react';
import { useQuery } from 'react-query';
import People from './People';

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
};

const Peoples = () => {
  const { status, data } = useQuery('people', fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <div>Error fetching data </div>}
      {status === 'loading' && <div>Loading</div>}

      {status === 'success' && (
        <>
          <div>
            {data.results.map((people) => (
              <People people={people} key={people.name} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Peoples;
