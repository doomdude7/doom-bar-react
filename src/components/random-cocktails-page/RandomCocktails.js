import styles from "./RandomCocktails.module.css";
import global from "../../App.module.css";
export const RandomCocktails = () => {
  return (
    <main>
      <section
        id="cocktail-page"
        className={`${styles["cocktail-page"]} ${global["content"]}`}
      >
        <div className={`${styles["cocktail-page-section"]}`}>
          <h1 className={`${styles["cocktail-page-title"]}`}>
            Random cocktails section:
          </h1>
        </div>
        <div className={`${styles["cocktail-container"]}`}></div>
      </section>
      <section className={`${styles["cocktail-details-page"]}`}></section>
    </main>
  );
};
