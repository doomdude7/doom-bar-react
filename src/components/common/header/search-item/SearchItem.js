import styles from "./SearchItem.module.css";
export const SearchItem = ({ cocktail }) => {
  const cocktailData = cocktail;
  return (
    <div className={styles["search-item"]}>
      <img
        className={styles["search-item-img"]}
        src={cocktailData.strDrinkThumb}
        alt={cocktailData.strDrink}
      />
      <h3 className={styles["search-item-title"]}>{cocktailData.strDrink}</h3>
    </div>
  );
};
