import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner"]}>
      {/* <h1>Loading...</h1> */}
      <div className={styles["cssload-loader"]}>Loading</div>
    </div>
  );
};
