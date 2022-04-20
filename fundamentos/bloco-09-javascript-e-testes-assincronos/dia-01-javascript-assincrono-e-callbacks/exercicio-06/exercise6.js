const pokemons = require('./data');

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você!'), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

// getPokemonDetails(({name}) => name === 'Bulbasaur', (onFail, onSuccess) => console.log( onSuccess || onFail));

module.exports = {
  getPokemonDetails,
};