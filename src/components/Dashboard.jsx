
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import DexContext from "../contexts/DexContext"; // ✅ context import

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff0000;
`;

const Message = styled.p`
  color: black;
`;

const SlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const EmptySlot = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokeballImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(DexContext); // ✅ context 사용

  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {selectedPokemon.length === 0 ? (
        <Message>선택된 포켓몬이 없습니다.</Message>
      ) : (
        <SlotsContainer>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              handleonClick={removePokemon}
            />
          ))}
        </SlotsContainer>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;