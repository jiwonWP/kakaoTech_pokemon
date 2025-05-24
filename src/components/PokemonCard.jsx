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

const DetailBtn = styled.button`
  margin-top: 8px;
`;

function PokemonCard({ pokemon, handleonClick }) {
  const navigate = useNavigate();

  return (
    <Card>
      <div
        onClick={() => {
          handleonClick(pokemon);
        }}
      >
        <div>{pokemon.korean_name}</div>
        <img src={pokemon.img_url} />
        <div>{pokemon.description}</div>
      </div>
      <DetailBtn
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/pokemon-detail?id=${pokemon.id}`);
        }}
      >
        자세히
      </DetailBtn>
    </Card>
  );
}

export default PokemonCard;
