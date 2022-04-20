const { test } = require("@jest/globals");
const { getPokemonDetails } = require("./exercise6");

describe("A função getPokemonDetails", () => {
  test("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (onFail, onSuccess) => {
      expect(onFail).toEqual(new Error('Não temos esse pokémon para você!'));
      done();
    });
  });

  test("retorna um pokemon que existe no banco de dados", () => {
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', (onFail, onSuccess) => {
      expect(onSuccess).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
      done();
    });
  });
});