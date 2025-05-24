import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      여기는 홈입니다.
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
}
