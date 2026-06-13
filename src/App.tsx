// @ts-ignore
import { useState } from "react";
// @ts-ignore
import "./App.css";
import PokemonCard from "./Components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName
  );
  if (!pokemon) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <>
      <nav>
        {pokemonList.map((pokemon) => (
          <button key={pokemon.name}
            onClick={() => setPokemonName(pokemon.name)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemon} />
    </>
  );
}


export default App;