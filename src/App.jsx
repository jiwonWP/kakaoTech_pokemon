import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";
import DexContext from "./contexts/DexContext";
import MOCK_DATA from "./mock";
import { useEffect, useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const saved = localStorage.getItem("selectedPokemon");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리까지만 선택할 수 있어요.");
    } else if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  const contextValue = {
    selectedPokemon,
    addPokemon,
    removePokemon,
    pokemonList: MOCK_DATA,
  };

  return (
    <DexContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </DexContext.Provider>
  );
}

export default App;
