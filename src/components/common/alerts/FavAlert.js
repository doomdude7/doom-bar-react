import styles from "./FavAlert.module.css";

export const FavAlert = ({ closeAlert }) => {
  return (
    <modal className={styles["fav-alert"]}>
      <h1>Already in favourites!</h1>

      <button className={styles["close-alert"]} onClick={closeAlert}>
        X
      </button>
    </modal>
  );
};
