import { useState } from 'react'
import Pokemon from 'components/Pokemon'

import PokemonInterface from 'interfaces/Pokemon'

function App() {
  const initialPokemon = {
    name: "Charizard",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
  }
  const [pokemon, setPokemon] = useState<PokemonInterface>(initialPokemon)

  return (
    <>
      <header>
        <span>Pokedex</span>
      </header>
      <main>
        <Pokemon pokemon={pokemon} />
      </main>
      <footer>
        <h3>Others</h3>
        <div>
          
        </div>
      </footer>
    </>
  );
}

export default App;
