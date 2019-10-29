export const shuffle = ({pokemons, catchNum}) => {
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

export const getStats = (rowStats) => {
  let stats = {
    speed: 0,
    defense: 0,
    "special-defense": 0,
    attack: 0,
    "special-attack": 0,
    hp: 0,
  }

  for (let statName in stats) {
    for (let i = 0; i < rowStats.length; i++) {
      if (rowStats[i].stat.name === statName) {
        stats[statName] = rowStats[i].base_stat;
        continue;
      }
    }
  }

  return stats;
}