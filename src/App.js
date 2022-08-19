import "./App.module.css";
import { Routes, Route, useNavigate, Link, useParams } from "react-router-dom";
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
import { useState, useEffect } from "react";
import { CocktailDetails } from "./components/cocktail-details/CocktailDetails";
function App() {
  const checkLocalStorage = localStorage.getItem("ageConsent");
  const [sessionFavs, setSessionFavs] = useState([]);
  const [currentRandoms, setCurrentRandoms] = useState([]);
  const navigate = useNavigate();
  const favIdHandler = (id) => {
    console.log(id, "id passed through fav handler -- app");
    sessionFavs.find((fav) => fav === id)
      ? console.log("already in favourites")
      : setSessionFavs([...sessionFavs, id]);
    console.log("sessionFavs state: ", sessionFavs);
  };
  const closeModal = (data) => {
    console.log("close button", data);
    navigate(-1);
  };
  const currentRandomsHandler = (cocktails) => {
    console.log("currentRandomsHandler", cocktails);
    setCurrentRandoms(cocktails);
  };

  console.log("currentRandoms", currentRandoms);
  return (
    <div className="App">
      {!checkLocalStorage && <AgeGateModal />}

      <Header />
      <main>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <HomePage /> <Footer />
              </>
            }
          />
          <Route
            path="/random-cocktails"
            element={
              <RandomCocktailsPage
                currentRandomsList={currentRandomsHandler}
                currentRandomsData={currentRandoms}
              />
            }
          />
          <Route path="/pick-drink" element={<IngredientsPage />} />
          <Route
            path="/pick-drink/:baseId"
            element={<IngredientsPage baseId={useParams.baseId} />}
          />
          <Route
            path="/favourites"
            element={<FavouritesPage sessionFavs={sessionFavs} />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/details/*" element={<CocktailDetails />} /> */}
          <Route
            path="/cocktails/:cocktailId"
            element={
              <CocktailDetails
                closeClick={closeModal}
                favourited={favIdHandler}
              />
            }
          />
        </Routes>
        {/* <HomePage /> */}
      </main>
      {/* <Footer /> */}
      <Cursor />
    </div>
  );
}

export default App;
