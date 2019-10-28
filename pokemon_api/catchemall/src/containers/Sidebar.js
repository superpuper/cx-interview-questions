import React from 'react';

const Sidebar = (props) => {
  const pokemons = props.pokemons.slice(0, props.catchNum);
  const pokemonList = pokemons.map((pokemon, i) =>
    <PokemonListItem key={i}
      value={pokemon.name} />
  );

  return (
    <div className="Sidebar l-col">
      <ul>
        {pokemonList}
      </ul>
    </div>
  );
}

const PokemonListItem = (props) => (
  <li>{props.value}</li>
);

export default Sidebar;

