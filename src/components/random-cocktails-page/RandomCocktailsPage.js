import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";

export const RandomCocktailsPage = ({
  // clickedCocktail,
  currentRandomsList,
  currentRandomsData,
}) => {
  const [cocktails, setCocktails] = useState([]);
  // const [clickedCocktail, setClickedCocktail] = useState([]);
  console.log("cocktails", cocktails);
  useEffect(() => {
    currentRandomsList(cocktails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cocktails]);

  console.log("currentRandoms", currentRandomsList);

  useEffect(() => {
    //fetching 7 random cocktails ( max is 1 at a time for free use of the api)
    if (currentRandomsData.length === 0) {
      for (let i = 0; i < 7; i++) {
        getOneRandom().then((cocktail) =>
          setCocktails((prevState) => [...prevState, cocktail])
        );
      }
    } else {
      setCocktails(currentRandomsData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section
        id="cocktail-page"
        className={`${styles["cocktail-page"]} ${global["content"]}`}
      >
        <h1 className={`${styles["cocktail-page-title"]}`}>
          Random cocktails section:
        </h1>

        <div className={`${styles["cocktail-container"]}`}>
          {cocktails &&
            cocktails.map((cocktail, index) => (
              <RandomCocktail
                key={index + cocktail.idDrink}
                cocktail={cocktail}
              />
            ))}
        </div>
      </section>
    </>
  );
};
