import styles from "./RandomCocktail.module.css";
export const RandomCocktail = (cocktail) => {
  //   console.log(cocktail.cocktail);
  return (
    <div className={`${styles["random-cocktail"]}`}>
      <h2
        className={`${styles["random-cocktail-title"]}`}
      >{`${cocktail.cocktail.strDrink}`}</h2>
      <h3
        className={`${styles["random-cocktail-category"]}`}
      >{`${cocktail.cocktail.strCategory}`}</h3>
      <img
        id="${cocktail.idDrink}"
        className={`${styles["random-cocktail-img"]}`}
        src={`${cocktail.cocktail.strDrinkThumb}`}
        alt="cocktail pic"
      />
    </div>
  );
};
