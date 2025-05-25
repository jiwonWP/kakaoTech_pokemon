import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DexContext from "../contexts/DexContext";

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

const ActionButton = styled.button`
  margin-top: 8px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

function PokemonCard({ pokemon, isDashboard }) {
  const navigate = useNavigate();
  const { selectedPokemon, addPokemon, removePokemon } = useContext(DexContext);

  const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);

  const handleCardClick = () => {
    if (!isDashboard) {
      navigate(`/pokemon-detail?id=${pokemon.id}`);
    }
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (isSelected) {
      removePokemon(pokemon);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Card onClick={handleCardClick}>
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>No. {pokemon.id.toString().padStart(3, "0")}</div>
      <ActionButton onClick={handleActionClick}>
        {isDashboard ? "삭제" : isSelected ? "삭제" : "추가"}
      </ActionButton>
    </Card>
  );
}

export default PokemonCard;
