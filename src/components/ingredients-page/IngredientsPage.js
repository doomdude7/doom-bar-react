import styles from "./IngredientsPage.module.css";
import global from "../../App.module.css";
export const IngredientsPage = () => {
  return (
    <section
      id="content ingredients-page"
      className={`${styles["ingredients-page"]} ${global["content"]}`}
    >
      <div className={styles["ingredients-page-top-part"]}>
        <div className={["svg-container"]}></div>
        <div className={styles["ingredients-container"]}>
          <h2 className={styles["ingredients-container-title"]}>
            Pick your base:
          </h2>
          <div className={styles["bases"]}></div>
        </div>
      </div>
      <div classNameName={styles["ingredients-page-bottom-part"]}></div>
    </section>
  );
};
