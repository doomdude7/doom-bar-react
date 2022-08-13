import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
export const RandomCocktailsPage = ({ favId }) => {
  const [cocktails, setCocktails] = useState([]);
  const [clickedCocktail, setClickedCocktail] = useState([]);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      getOneRandom().then((cocktail) =>
        setCocktails((prevState) => [...prevState, cocktail])
      );
    }
  }, []);
  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    setIsShown(true);
    // console.log("isShown", isShown);
    setClickedCocktail(data);
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const closeModal = () => {
    setIsShown(false);
  };
  const favouritedHandler = (drinkId) => {
    // console.log(drinkId, "passed through fav handler");
    favId(drinkId);
  };
  return (
    <>
      {isShown && (
        <CocktailDetails
          cocktail={clickedCocktail}
          closeClick={closeModal}
          favourited={favouritedHandler}
        />
      )}

      <section
        id="cocktail-page"
        className={`${styles["cocktail-page"]} ${global["content"]}`}
      >
        <div className={`${styles["cocktail-page-section"]}`}>
          <h1 className={`${styles["cocktail-page-title"]}`}>
            Random cocktails section:
          </h1>
        </div>
        <div className={`${styles["cocktail-container"]}`}>
          {cocktails &&
            cocktails.map((cocktail, index) => (
              <RandomCocktail
                key={index + cocktail.idDrink}
                cocktail={cocktail}
                detailsClick={detailsClick}
              />
            ))}
        </div>
      </section>
    </>
  );
};
