import React from 'react';

const Sidebar = (props) => {
  const pokemonsNumber = props.pokemons.length;
  let pokemons = Object.assign({}, props.pokemons);
  let pokemonsShuffle = [];
  for (let i = 0; pokemonsShuffle.length < props.catchNum; i++) {
    // index from 0 to pokemonsNumber-1
    let randomIndex = Math.floor(Math.random()*pokemonsNumber);
    if (pokemons[randomIndex]) {
      pokemonsShuffle.push(pokemons[randomIndex]);
      // remove it from the list to not catch it twice
      pokemons[randomIndex] = null;
    } else {
      // re-catch
      randomIndex = Math.floor(Math.random()*pokemonsNumber);
    }
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

