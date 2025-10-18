import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/produto/:produtoId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Página não encontrada 😕</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




