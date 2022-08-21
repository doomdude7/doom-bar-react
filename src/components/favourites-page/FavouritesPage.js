import styles from "./FavouritesPage.module.css";
import global from "../../App.module.css";
import { useEffect, useState } from "react";
import { RandomCocktail } from "./../random-cocktails-page/RandomCocktail";
import { getById } from "../../services/cocktailFetchService";
import { useNavigate } from "react-router-dom";
export const FavouritesPage = ({ sessionFavs }) => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    navigate(`/cocktails/${data.idDrink}`);
  };

  useEffect(() => {
    sessionFavs.map((fav) => {
      return getById(fav).then((cocktail) => {
        // console.log("cocktail from getById", cocktail);
        setFavourites((prevState) => [...prevState, cocktail]);
      });
    });
  }, [sessionFavs]);

  const favouritesDuplicateFilter = [
    ...new Map(favourites.map((item) => [JSON.stringify(item), item])).values(),
  ];
  console.log("favouritesDuplicateFilter", favouritesDuplicateFilter);
  return (
    <>
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
    </>
  );
};
