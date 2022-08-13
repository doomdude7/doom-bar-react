import styles from "./FavouritesPage.module.css";
import global from "../../App.module.css";
import { useEffect, useState } from "react";
import { RandomCocktail } from "./../random-cocktails-page/RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import { getById } from "../../services/cocktailFetchService";
export const FavouritesPage = ({ sessionFavs }) => {
  const [favourites, setFavourites] = useState([]);
  const [clickedCocktail, setClickedCocktail] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    setIsShown(true);
    console.log("isShown", isShown);
    setClickedCocktail(data);
  };
  const closeModal = () => {
    setIsShown(false);
  };
  // console.log(sessionFavs, "sessionFavs - passed to favs page");
  useEffect(() => {
    sessionFavs.map((fav) => {
      // console.log(fav, "mapped fav");
      return getById(fav).then((cocktail) => {
        // console.log("cocktail from getById", cocktail);
        setFavourites((prevState) => [...prevState, cocktail]);
      });
    });
  }, [sessionFavs]);
  return (
    <>
      {isShown && (
        <CocktailDetails cocktail={clickedCocktail} closeClick={closeModal} />
      )}
      <section
        className={`${styles["favourites-section"]} ${global["content"]}`}
      >
        <h1 className={`${styles["favourites-title"]}`}>Favourites:</h1>
        {favourites.length === 0 ? (
          <p className={`${styles["no-favourites"]}`}>
            You have no favourites, yet!
          </p>
        ) : (
          <div className={`${styles["favourites-list"]}`}>
            {favourites &&
              favourites.map((fav) => {
                // console.log(fav, "fav");
                return (
                  <RandomCocktail
                    key={fav.idDrink + fav.strDrink}
                    cocktail={fav}
                    detailsClick={detailsClick}
                  />
                );
              })}
          </div>
        )}
      </section>
    </>
  );
};
