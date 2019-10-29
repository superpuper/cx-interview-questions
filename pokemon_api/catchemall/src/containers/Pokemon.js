import React from 'react';

import { getStats } from 'utils';

const Pokemon = ({details}) => {
  const stats = getStats(details.stats);

  return (
    <div className="Pokemon">
      <div className="Pokemon__title">
        <img className="Pokemon__img" src={details.sprites.front_default} alt={details.name}/>
        <div>
            <div className="Pokemon__block Pokemon__name">{details.name}</div>
        </div>
      </div>
      <div className="Pokemon__block">
        <div className="Pokemon__block-line">Speed {stats["speed"]}</div>
        <div className="Pokemon__block-line">Defense {stats["defense"]} / Special {stats["special-defense"]}</div>
        <div className="Pokemon__block-line">Attack {stats["attack"]} / Special {stats["special-attack"]}</div>
        <div className="Pokemon__block-line">HP {stats["hp"]}</div>
        <div className="Pokemon__block-line">Weight {details.weight}</div>
      </div>
    </div>
  );
}

export default Pokemon;
