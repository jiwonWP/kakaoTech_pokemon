import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ffcc00;
`;

const Logo = styled.img`
  width: 700px;
  margin-bottom: 32px;
`;


const StartButton = styled.button`
  padding: 12px 25px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;

  transition: background-color 1s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Logo src="/pokemon.png" alt="Pokemon Logo" />
      <StartButton onClick={() => navigate("/dex")}>
        - 포켓몬 도감 -
      </StartButton>
    </HomeContainer>
  );
}
