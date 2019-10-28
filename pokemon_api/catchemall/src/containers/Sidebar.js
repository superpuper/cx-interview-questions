import React from 'react';

const Sidebar = (props) => {
  const pokemonsNumber = props.pokemons.length;
  let pokemonsShuffle = [];
  for (let i = 0; i < props.catchNum; i++) {
    // index from 0 to pokemonsNumber-1
    const randomIndex = Math.floor(Math.random()*pokemonsNumber);
    pokemonsShuffle.push(props.pokemons[randomIndex]);
  }

  const pokemonList = pokemonsShuffle.map((pokemon, index) =>
    <PokemonListItem key={index}
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

