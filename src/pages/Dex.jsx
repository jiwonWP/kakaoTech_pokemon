import { useState, useEffect } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    // ✅ 초기값: localStorage에서 불러오기
    const stored = localStorage.getItem("selectedPokemon");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ 상태 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 선택될 수 있어요.");
    } else if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬 입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <DexContainer>
      <Dashboard selectedPokemon={selectedPokemon} removePokemon={removePokemon} />
      <PokemonList pokemonList={MOCK_DATA} addPokemon={addPokemon} />
    </DexContainer>
  );
}
