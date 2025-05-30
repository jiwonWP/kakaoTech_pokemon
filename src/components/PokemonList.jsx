import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import DexContext from "../contexts/DexContext"; 
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
  const { pokemonList, selectedPokemon, addPokemon } = useContext(DexContext);

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => {
        const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);

        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            handleonClick={addPokemon}
            isSelected={isSelected}
            isDashboard={false}
          />
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;
