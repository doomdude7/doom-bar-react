import styles from "./CocktailCarousel.module.css";
import React from "react";
import { Link } from "react-router-dom";
export const CocktailCarousel = ({ cocktailSelection, detailsClick }) => {
  // console.log("cocktailSelection", cocktailSelection, "passed");
  const cocktailDetailsHandler = (cocktail) => {
    console.log("clicked in carousel", cocktail);

    detailsClick(cocktail);
  };
  return (
    <>
      {cocktailSelection.map((cocktail) => {
        // console.log("this is cocktail", cocktail);

        return (
          <Link to={{ pathname: `/cocktails/${cocktail.idDrink}` }}>
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
          </Link>
        );
      }, [])}
    </>
  );
};
