import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";

import { DexProvider } from "./contexts/DexContext"; // ✅ Context Provider
import { ToastContainer } from "react-toastify";     // ✅ Toast
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <DexProvider> {/* ✅ 전역 상태 관리 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </BrowserRouter>
    </DexProvider>
  );
}

export default App;
