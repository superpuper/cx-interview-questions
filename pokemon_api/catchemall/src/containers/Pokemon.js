import React from 'react';

import { getStats } from 'utils';

const Pokemon = ({details}) => {
  const stats = getStats(details.stats);

  return (
    <div className="Pokemon">
      <div className="Pokemon__title">
        <img className="Pokemon__img" src={details.sprites.front_default} alt={details.name}/>
        <div>{details.name}</div>
      </div>
      <div className="Pokemon__info">
        <div>Speed {stats["speed"]}</div>
        <div>Defense {stats["defense"]} / Special {stats["special-defense"]}</div>
        <div>Attack {stats["attack"]} / Special {stats["special-attack"]}</div>
        <div>HP {stats["hp"]}</div>
        <div>Weight {details.weight}</div>
      </div>
    </div>
  );
}

export default Pokemon;
