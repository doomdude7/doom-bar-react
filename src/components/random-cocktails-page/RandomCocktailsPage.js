import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";

export const RandomCocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);
  // const [i, seti] = useState(new Array(8).fill(0));

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      getOneRandom().then((cocktail) =>
        setCocktails((prevState) => [...prevState, cocktail])
      );
    }
  }, []);

  return (
    <>
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
          <div className="random-cocktail">
            {cocktails &&
              cocktails.map((cocktail) => (
                <RandomCocktail key={cocktail.id} cocktail={cocktail} />
              ))}
          </div>
        </div>
      </section>
      <section className={`${styles["cocktail-details-page"]}`}></section>
    </>
  );
};
