import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import DexContext from "../contexts/DexContext"; // ✅ context import

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const PokemonList = () => {
  const { pokemonList } = useContext(DexContext); // ✅ context 사용

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
