import "./App.module.css";
import { Footer } from "./components/common/footer/Footer.js";
import { Header } from "./components/common/header/Header.js";
import { Cursor } from "./components/common/cursor/Cursor.js";
import { HomePage } from "./components/home-page/HomePage.js";
import { RandomCocktailsPage } from "./components/random-cocktails-page/RandomCocktailsPage.js";
import { Routes, Route } from "react-router-dom";
// import { AgeGateModal } from "./components/common/age-gate/AgeGateModal.js";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random-cocktails" element={<RandomCocktailsPage />} />
        </Routes>
        {/* <AgeGateModal /> */}
        {/* <HomePage /> */}
        <Footer />
        <Cursor />
      </main>
    </div>
  );
}

export default App;
