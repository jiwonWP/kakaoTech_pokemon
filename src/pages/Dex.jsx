import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import DexContext from "../contexts/DexContext";
import { useContext } from "react";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  const { selectedPokemon, addPokemon, removePokemon, pokemonList } = useContext(DexContext); // ✅

  return (
    <DexContainer>
      <Dashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList
  pokemonList={MOCK_DATA}
  addPokemon={addPokemon}
  selectedPokemon={selectedPokemon}
/>

    </DexContainer>
  );
}
