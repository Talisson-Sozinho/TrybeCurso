import { pokemons } from './data';
import { Pokedex } from './components/Pokedex';

function App() {
  return (
    <>
      <h1>My Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
    </>
  );
}

export default App;
