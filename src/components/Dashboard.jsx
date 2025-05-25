import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeball from "/pokemon-ball.png"; // public 폴더의 pokemon-ball.png
const Container = styled.section`
  padding: 20px;
  margin-bottom: 24px;
  background-color: #fff3cd;
  border-radius: 12px;
  border: 2px solid #ffd966;
`;

const Title = styled.h2`
  color: #d62828;
  font-size: 1.4rem;
  margin-bottom: 16px;
  text-align: center;
`;

const SlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
`;

const EmptySlot = styled.div`
  height: 160px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokeballImage = styled.img`
  width: 48px;
  height: 48px;
`;

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  const totalSlots = 6;
  const filledSlots = selectedPokemon.length;
  const emptySlots = totalSlots - filledSlots;

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <SlotGrid>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            handleonClick={removePokemon}
            isDashboard={true}
          />
        ))}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <EmptySlot key={`empty-${i}`}>
            <PokeballImage src={pokeball} alt="빈 슬롯" />
          </EmptySlot>
        ))}
      </SlotGrid>
    </Container>
  );
};

export default Dashboard;

