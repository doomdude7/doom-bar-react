import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/common/footer/Footer.js";
import { Header } from "./components/common/header/Header.js";
import { Cursor } from "./components/common/cursor/Cursor.js";
import { HomePage } from "./components/home-page/HomePage.js";
import { RandomCocktailsPage } from "./components/random-cocktails-page/RandomCocktailsPage.js";
import { AgeGateModal } from "./components/common/age-gate/AgeGateModal.js";
import { IngredientsPage } from "./components/ingredients-page/IngredientsPage";
import { LoginForm } from "./components/login-page/LoginForm";
import { RegisterForm } from "./components/register-page/RegisterForm";
function App() {
  const checkLocalStorage = localStorage.getItem("ageConsent");
  return (
    <div className="App">
      <Header />
      <main>
        {!checkLocalStorage && <AgeGateModal />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random-cocktails" element={<RandomCocktailsPage />} />
          <Route path="/pick-drink" element={<IngredientsPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        {/* <HomePage /> */}
        <Footer />
        <Cursor />
      </main>
    </div>
  );
}

export default App;
