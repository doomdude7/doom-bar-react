import "./App.module.css";
import { Footer } from "./components/common/footer/Footer.js";
import { Header } from "./components/common/header/Header.js";
import { Cursor } from "./components/common/cursor/Cursor.js";
import { HomePage } from "./components/home-page/HomePage.js";
import { RandomCocktails } from "./components/random-cocktails-page/RandomCocktails.js";
// import { AgeGateModal } from "./components/common/age-gate/AgeGateModal.js";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <AgeGateModal /> */}
      <HomePage />
      <RandomCocktails />
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
