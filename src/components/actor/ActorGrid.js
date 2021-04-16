import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          gender={person.gender}
          birthday={person.birthday}
          deathday={person.deathday}
          country={person.country}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
