import sunsetImg from "./assets/drinks-sunset.png";
import styles from "./HomePage.module.css";
import globalStyles from "../../App.module.css";
export const HomePage = () => {
  return (
    <main>
      <section
        id="landing-page"
        className={`${styles["landing-page"]} ${globalStyles["content"]}`}
      ></section>
      <section className={styles.greeting}>
        <img src={sunsetImg} alt="beers at sunset" />
        <div className={`${styles["greeting-text-container"]}`}>
          <h1 className={`${styles["greeting-title"]}`}>
            Welcome to my humble establishment.
          </h1>
          <h2 className={`${styles["greeting-subtitle"]}`}>
            -Doom's bar is at your service-
          </h2>
          <p className={`${styles["greeting-msg"]}`}>
            Here you will find hundreds of cocktail recipies to choose from!
            Each one is equiped with a list of all the required ingredients and
            instructions on how it is prepared... so.. What will it be?
          </p>
        </div>
      </section>
    </main>
  );
};
