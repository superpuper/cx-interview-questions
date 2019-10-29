import React from 'react';

import { shuffle } from 'utils';

const Sidebar = (props) => {
  const pokemonList = shuffle({...props}).map((pokemon, index) =>
    <PokemonListItem key={index}
      value={pokemon.name}
      url={pokemon.url}
      setUrl={props.setUrl} />
  );

  return (
    <div className="Sidebar l-col">
      <button value={props.modes.MANY} onClick={props.setCatchNum}>Catch {props.modes.MANY}</button>
      <ul>
        {pokemonList}
      </ul>
    </div>
  );
}

const PokemonListItem = (props) => (
  <li>
    <button onClick={() => props.setUrl(props.url)}>{props.value}</button>
  </li>
);

export default Sidebar;

