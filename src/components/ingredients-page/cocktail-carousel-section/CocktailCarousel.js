import styles from "./CocktailCarousel.module.css";
import React from "react";
export const CocktailCarousel = ({ cocktailSelection, detailsClick }) => {
  // console.log("cocktailSelection", cocktailSelection, "passed");
  const cocktailDetailsHandler = (cocktail) => {
    // console.log(cocktail);
    // CocktailDetails(cocktail);
    detailsClick(cocktail);
  };
  return (
    <>
      {cocktailSelection.map((cocktail) => {
        // console.log("this is cocktail", cocktail);
        return (
          <div
            className={styles["cocktail-carousel-item"]}
            key={cocktail.idDrink}
            onClick={cocktailDetailsHandler.bind(this, cocktail.idDrink)}
          >
            <img
              className={styles["cocktail-carousel-item-img"]}
              src={cocktail.strDrinkThumb}
              alt="cocktail pic"
            ></img>
            <h2 className={styles["cocktail-carousel-item-title"]}>
              {cocktail.strDrink}
            </h2>
          </div>
        );
      }, [])}
    </>
  );
};
