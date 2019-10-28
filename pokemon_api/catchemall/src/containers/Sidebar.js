import React from 'react';

const Sidebar = (props) => {
  const pokemonList = shuffle({...props}).map((pokemon, index) =>
    <PokemonListItem key={index}
      value={pokemon.name} />
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
  <li>{props.value}</li>
);

const shuffle = ({pokemons, catchNum}) => {
  const pokemonsNumber = pokemons.length;
  let pokemonsCopy = Object.assign({}, pokemons);
  let pokemonsShuffle = [];
  const getRandomIndex = (pokemonsNumber) => Math.floor(Math.random()*pokemonsNumber);
  for (let i = 0; pokemonsShuffle.length < catchNum; i++) {
    // index from 0 to pokemonsNumber-1
    let randomIndex = getRandomIndex(pokemonsNumber);
    if (pokemonsCopy[randomIndex]) {
      pokemonsShuffle.push(pokemonsCopy[randomIndex]);
      // remove it from the list to not catch it twice
      pokemonsCopy[randomIndex] = null;
    } else {
      // re-throw
      randomIndex = getRandomIndex(pokemonsNumber);
    }
  }
  return pokemonsShuffle;
}

export default Sidebar;

