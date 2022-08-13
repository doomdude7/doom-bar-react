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
import { FavouritesPage } from "./components/favourites-page/FavouritesPage";
import { useEffect, useState } from "react";
import { CocktailDetails } from "./components/cocktail-details/CocktailDetails";
function App() {
  const checkLocalStorage = localStorage.getItem("ageConsent");
  const [sessionFavs, setSessionFavs] = useState([]);
  const favIdHandler = (id) => {
    // console.log(id, "id passed through fav handler -- app");
    setSessionFavs((prevState) => [...prevState, id]);
  };
  console.log("sessionFavs state: ", sessionFavs);
  return (
    <div className="App">
      <Header />
      <main>
        {!checkLocalStorage && <AgeGateModal />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage /> <Footer />
              </>
            }
          />
          <Route
            path="/random-cocktails"
            element={<RandomCocktailsPage favId={favIdHandler} />}
          />
          <Route
            path="/pick-drink"
            element={<IngredientsPage favId={favIdHandler} />}
          />
          <Route
            path="/favourites"
            element={<FavouritesPage sessionFavs={sessionFavs} />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/details/*" element={<CocktailDetails />} />
        </Routes>
        {/* <HomePage /> */}
      </main>
      {/* <Footer /> */}
      <Cursor />
    </div>
  );
}

export default App;
