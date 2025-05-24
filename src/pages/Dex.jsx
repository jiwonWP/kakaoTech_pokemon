// src/pages/Dex.jsx
import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import DexContext from "../contexts/DexContext"; // ✅ 추가

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택될 수 있어요.");
    } else if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <DexContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      <DexContainer>
        <Dashboard />
        <PokemonList />
      </DexContainer>
    </DexContext.Provider>
  );
}
