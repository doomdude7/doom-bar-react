import styles from "./SearchItem.module.css";

export const SearchItem = ({ cocktail, detailsClick }) => {
  const cocktailDetailsHandler = () => {
    detailsClick(cocktail);
  };
  return (
    <>
      <div className={styles["search-item"]} onClick={cocktailDetailsHandler}>
        <img
          className={styles["search-item-img"]}
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <h3 className={styles["search-item-title"]}>{cocktail.strDrink}</h3>
      </div>
    </>
  );
};
