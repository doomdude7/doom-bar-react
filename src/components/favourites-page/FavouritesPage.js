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
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const closeModal = () => {
    setIsShown(false);
  };
  // console.log(sessionFavs, "sessionFavs - passed to favs page");
  useEffect(() => {
    sessionFavs.map((fav) => {
      return getById(fav).then((cocktail) => {
        // console.log("cocktail from getById", cocktail);
        setFavourites((prevState) => [...prevState, cocktail]);
      });
    });
  }, [sessionFavs]);
  // const favClickHandler = (drinkId) => {
  //   console.log(drinkId, "passed through fav handler");
  //   favId(drinkId);
  // };
  // console.log("favourites logs", favourites);
  const favouritesDuplicateFilter = [
    ...new Map(favourites.map((item) => [JSON.stringify(item), item])).values(),
  ];
  // console.log("favouritesDuplicateFilter", favouritesDuplicateFilter);
  return (
    <>
      {isShown && (
        <CocktailDetails cocktail={clickedCocktail} closeClick={closeModal} />
      )}
      {!isShown && (
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
              {favouritesDuplicateFilter &&
                // (console.log(favourites, "favourites ....."),
                favouritesDuplicateFilter.map((fav, index) => {
                  // console.log("fav returned obj", fav);
                  return (
                    <RandomCocktail
                      key={fav.idDrink + fav.strDrink + index}
                      cocktail={fav}
                      detailsClick={detailsClick}
                    />
                  );
                })}
            </div>
          )}
        </section>
      )}
    </>
  );
};
