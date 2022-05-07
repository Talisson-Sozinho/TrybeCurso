import { Pokemon } from "./components/Pokemon";

import { pokemons } from './data'

function App() {
  return (
    <>
      <Pokemon 
        name={pokemons[0].name}
        type={pokemons[0].type}
        averageWeight={pokemons[0].averageWeight}
        image={pokemons[0].image}
      />
      <Pokemon 
      name={pokemons[1].name}
      type={pokemons[1].type}
      averageWeight={pokemons[1].averageWeight}
      image={pokemons[1].image}
    />
  </>
  );
}

export default App;
