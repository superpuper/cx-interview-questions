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
      <button className="Sidebar__catch" value={props.modes.MANY} onClick={props.setCatchNum}>Catch {props.modes.MANY}</button>
      <ul className="Sidebar__list">
        {pokemonList}
      </ul>
    </div>
  );
}

const PokemonListItem = (props) => (
  <li>
    <button className="Sidebar__item" onClick={() => props.setUrl(props.url)}>{props.value}</button>
  </li>
);

export default Sidebar;

