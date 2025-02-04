import React, { useState, useEffect} from 'react';

import Pokemon from 'containers/Pokemon';

const Details = (props) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!props.url) {
      return;
    }
    fetch(props.url)
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('lastPokemonUrl', props.url);
        return setPokemon(res)
      });
  }, [props.url]);

  const randomPokemon = () => {
    const pokemonsNumber = props.pokemons.length;
    const getRandomIndex = (pokemonsNumber) => Math.floor(Math.random()*pokemonsNumber);

    props.setUrl(props.pokemons[getRandomIndex(pokemonsNumber)].url);
  }

  return (
    <div className="Details l-col">
      <button className="Details__catch Details__block" onClick={randomPokemon}>Catch {props.modes.ONE}</button>
      { pokemon ? <Pokemon details={pokemon}/> : null }
    </div>
  )
}

export default Details;

