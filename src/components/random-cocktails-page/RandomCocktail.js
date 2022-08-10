import styles from "./RandomCocktail.module.css";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import { useState } from "react";
export const RandomCocktail = ({ cocktail, detailsClick }) => {
  // console.log(cocktail.cocktail);
  const cocktailDetailsHandler = (cocktail) => {
    // console.log(cocktail);
    // CocktailDetails(cocktail);
    detailsClick(cocktail);
  };
  return (
    <div
      className={`${styles["random-cocktail"]}`}
      onClick={cocktailDetailsHandler.bind(this, cocktail)}
    >
      <h2
        className={`${styles["random-cocktail-title"]}`}
      >{`${cocktail.strDrink}`}</h2>
      <h3
        className={`${styles["random-cocktail-category"]}`}
      >{`${cocktail.strCategory}`}</h3>
      <img
        id={`${cocktail.idDrink}`}
        className={`${styles["random-cocktail-img"]}`}
        src={`${cocktail.strDrinkThumb}`}
        alt="cocktail pic"
      />
    </div>
  );
};
