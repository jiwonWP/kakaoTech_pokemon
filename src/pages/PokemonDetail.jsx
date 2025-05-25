import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import MOCK_DATA from "../mock";
import DexContext from "../contexts/DexContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
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

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const Button = styled.button`
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

export default function PokemonDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const id = parseInt(query.get("id"), 10);

  const pokemon = MOCK_DATA.find((p) => p.id === id);

  const { selectedPokemon, addPokemon, removePokemon } = useContext(PokemonContext);
  const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);

  const handleClick = () => {
    if (isSelected) {
      removePokemon(pokemon);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Container>
      <Card>
        <h2>{pokemon.korean_name}</h2>
        <Img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <Button onClick={handleClick}>
          {isSelected ? "삭제" : "추가"}
        </Button>
      </Card>
      <Button onClick={() => navigate("/dex")}>도감으로 돌아가기</Button>
    </Container>
  );
}
