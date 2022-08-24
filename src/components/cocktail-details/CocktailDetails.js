import styles from "./CocktailDetails.module.css";
import global from "../../App.module.css";
import { CocktailDetailsIngredients } from "./CocktailDetailsIngredients";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../../services/cocktailFetchService";

export const CocktailDetails = ({ closeClick, favourited }) => {
  // console.log("passed cocktail data", cocktail);
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({});
  console.log("coktailId ...", cocktailId);
  useEffect(() => {
    // const data = { cocktailId };
    getById(cocktailId).then((cocktail) => {
      console.log("response", cocktail);
      return setCocktail(cocktail);
    });
  }, []);
  console.log("cocktail --- ", cocktail);
  const closeDetailsHandler = () => {
    closeClick("close");
    console.log("closeDetailsHandler");
  };
  const heartClickHandler = () => {
    console.log("heart");
    favourited(cocktail.idDrink);
  };
  console.log(favourited, "favourited");
  return (
    <div className={styles["details-overlay"]}>
      <section
        className={`${styles["cocktail-details-page"]} ${global["content"]}`}
      >
        <button
          className={`${styles["close-cocktail-details"]}`}
          onClick={closeDetailsHandler}
        >
          X
        </button>
        <button
          className={`${styles["heart-cocktail-details"]}`}
          onClick={heartClickHandler}
        >
          ❤
        </button>
        <div className={`${styles["cocktail-details"]}`}>
          <h1
            className={`${styles["cocktails-details-title"]}`}
          >{`${cocktail.strDrink}`}</h1>
          <h3
            className={`${styles["cocktails-details-category"]}`}
          >{`${cocktail.strCategory}`}</h3>
          <h3 className={`${styles["cocktails-details-alcoholic"]}`}>
            {`${cocktail.strAlcoholic}`}
          </h3>
        </div>

        <div className={`${styles["cocktail-preview-and-instructions"]}`}>
          <div className={`${styles["cocktail-preview"]}`}>
            <img
              id="cocktail-preview-img"
              className={`${styles["cocktail-preview-img"]}`}
              src={`${cocktail.strDrinkThumb}`}
              alt="cocktail pic"
            />
            <h2 className={`${styles["glass-type"]}`}>
              Served in a {`${cocktail.strGlass}`}
            </h2>
          </div>
          <CocktailDetailsIngredients cocktail={cocktail} />
        </div>
      </section>
    </div>
  );
};
