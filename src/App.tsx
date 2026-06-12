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
    <div>
      <button onClick={() => setPokemonName("bulbasaur")}> bulbasaur
      </button>
      <button onClick={() => setPokemonName("mew")}>mew
      </button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}


export default App;