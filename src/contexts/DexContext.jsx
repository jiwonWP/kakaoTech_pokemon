import { createContext, useEffect, useState } from "react";
import MOCK_DATA from "../mock";
import { toast } from "react-toastify";
const DexContext = createContext();

export const DexProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const stored = localStorage.getItem("selectedPokemon");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
  toast.warning("포켓몬은 최대 6마리까지만 선택할 수 있어요.");
} else if (selectedPokemon.find((p) => p.id === pokemon.id)) {
  toast.info("이미 선택된 포켓몬입니다.");
} else {
  setSelectedPokemon([...selectedPokemon, pokemon]);
  toast.success(`${pokemon.korean_name} 추가 완료!`);
}
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <DexContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      {children}
    </DexContext.Provider>
  );
};

export default DexContext;
