import styles from "./RandomCocktail.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const RandomCocktail = ({ cocktail, detailsClick }) => {
  console.log(cocktail.cocktail);
  useEffect(() => {
    console.log("cocktail", cocktail);
  }, [cocktail]);
  const cocktailDetailsHandler = (cocktail) => {
    // console.log(cocktail);
    detailsClick(cocktail);
  };
  return (
    <Link to={{ pathname: `/cocktails/${cocktail.idDrink}` }}>
      <div className={`${styles["random-cocktail"]}`}>
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
    </Link>
  );
};
