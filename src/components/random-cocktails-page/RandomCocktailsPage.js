import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { LoadingSpinner } from "../common/loading-spinner/LoadingSpinner";
export const RandomCocktailsPage = ({
  // clickedCocktail,
  currentRandomsList,
  currentRandomsData,
}) => {
  const [cocktails, setCocktails] = useState([]);
  const [spinner, setSpinner] = useState(false);
  // const [clickedCocktail, setClickedCocktail] = useState([]);
  console.log("cocktails", cocktails);
  useEffect(() => {
    currentRandomsList(cocktails);
    setSpinner(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cocktails]);

  console.log("currentRandoms", currentRandomsList);

  useEffect(() => {
    //fetching 7 random cocktails ( max is 1 at a time for free use of the api)
    if (currentRandomsData.length === 0) {
      setSpinner(true);
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
      {spinner && <LoadingSpinner />}

      <section
        id="cocktail-page"
        className={`${styles["cocktail-page"]} ${global["content"]}`}
      >
        <h1 className={`${styles["cocktail-page-title"]}`}>
          Random cocktails section:
        </h1>
        {!spinner && (
          <div className={`${styles["cocktail-container"]}`}>
            {cocktails &&
              cocktails.map((cocktail, index) => (
                <RandomCocktail
                  key={index + cocktail.idDrink}
                  cocktail={cocktail}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
};
