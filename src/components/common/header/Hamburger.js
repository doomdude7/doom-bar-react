import styles from "./Hamburger.module.css";
export const Hamburger = () => {
  return (
    <>
      <div className={styles["hamburger"]}>
        <div className={`${styles["burger"]} ${styles["burger1"]}`} />
        <div className={`${styles["burger"]} ${styles["burger2"]}`} />
        <div className={`${styles["burger"]} ${styles["burger3"]}`} />
      </div>
    </>
  );
};
