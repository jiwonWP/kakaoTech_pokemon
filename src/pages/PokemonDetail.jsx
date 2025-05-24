import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import MOCK_DATA from "../mock";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: black;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default function PokemonDetail() {
  const navigate = useNavigate();
  const location = new URLSearchParams(useLocation().search);
  const pokemonId = parseInt(location.get("id"));

  const selectedPokemon = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId);

  return (
    <HomeContainer>
      <Card>
        <div>{selectedPokemon.korean_name}</div>
        <img src={selectedPokemon.img_url} />
        <div>타입: {selectedPokemon.types.join(", ")}</div>
        <div>{selectedPokemon.description}</div>
      </Card>
      <StartButton onClick={() => navigate("/dex")}>
        도감으로 돌아가기
      </StartButton>
    </HomeContainer>
  );
}
