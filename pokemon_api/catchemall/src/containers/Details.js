import React from 'react';

const Details = (props) => {
  const randomPokemon = () => {
    const pokemonsNumber = props.pokemons.length;
    const getRandomIndex = (pokemonsNumber) => Math.floor(Math.random()*pokemonsNumber);

    props.setUrl(props.pokemons[getRandomIndex(pokemonsNumber)].url);
  }

  return (
    <div className="Details l-col">
      <button onClick={randomPokemon}>Catch {props.modes.ONE}</button>
      <div>
        {props.url}
      </div>
    </div>
  )
}

export default Details;

