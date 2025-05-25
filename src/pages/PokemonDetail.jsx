import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import MOCK_DATA from "../mock";
import { PokemonContext } from "./Dex"; // ✅ context 불러오기

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 300px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const Button = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
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
