import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/style/_base.scss";
import Home from "./pages/home/Home";
import Favorites from "./pages/favorites/Favorites";
import { CardLayout } from "./components/layout/cardLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardLayout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
