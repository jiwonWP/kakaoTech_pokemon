import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  return (
    <DexContainer>
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
}
