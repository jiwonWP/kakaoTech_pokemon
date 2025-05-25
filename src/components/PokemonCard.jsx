import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

function PokemonCard({ pokemon, handleonClick, isDashboard }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!isDashboard) {
      navigate(`/pokemon-detail?id=${pokemon.id}`);
    }
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
    handleonClick(pokemon);
  };

  return (
    <Card onClick={handleCardClick}>
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>No. {pokemon.id.toString().padStart(3, "0")}</div>
      <ActionButton onClick={handleActionClick}>
        {isDashboard ? "삭제" : "추가"}
      </ActionButton>
    </Card>
  );
}

export default PokemonCard;
