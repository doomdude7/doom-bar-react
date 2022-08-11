import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
export const RandomCocktailsPage = () => {
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
    console.log("isShown", isShown);
    setClickedCocktail(data);
  };
  const closeModal = () => {
    setIsShown(false);
  };
  return (
    <>
      {isShown && (
        <CocktailDetails cocktail={clickedCocktail} closeClick={closeModal} />
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
            cocktails.map((cocktail) => (
              <RandomCocktail
                key={cocktail.idDrink}
                cocktail={cocktail}
                detailsClick={detailsClick}
              />
            ))}
        </div>
      </section>
    </>
  );
};
