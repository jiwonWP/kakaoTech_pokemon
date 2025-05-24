// src/pages/PokemonDetail.jsx
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import DexContext from "../contexts/DexContext"; // ✅ context import

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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  color: black;
`;

const Button = styled.button`
  margin-top: 16px;
`;

export default function PokemonDetail() {
  const navigate = useNavigate();
  const location = new URLSearchParams(useLocation().search);
  const pokemonId = parseInt(location.get("id"));

  const { pokemonList, selectedPokemon, addPokemon, removePokemon } = useContext(DexContext);

  const pokemon = pokemonList.find((p) => p.id === pokemonId);
  const isSelected = selectedPokemon.some((p) => p.id === pokemonId);

  const handleClick = () => {
    isSelected ? removePokemon(pokemon) : addPokemon(pokemon);
  };

  return (
    <Container>
      <Card>
        <h2>{pokemon.korean_name}</h2>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <Button onClick={handleClick}>
          {isSelected ? "삭제하기" : "추가하기"}
        </Button>
        <Button onClick={() => navigate("/dex")}>도감으로 돌아가기</Button>
      </Card>
    </Container>
  );
}
