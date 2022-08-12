import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2 className={styles["logo"]}>Doom's Bar</h2>
      </Link>
      <nav>
        <Link to="/random-cocktails">
          <h3 className={styles["nav-option"]}>Random drinks</h3>
        </Link>
        <Link to="/pick-drink">
          <h3 className={styles["nav-option"]}>Pick a drink</h3>
        </Link>
        <Link to="/favourites">
          <h3 className={styles["nav-option"]}>Favourites</h3>
        </Link>
      </nav>
      <div className="auth-buttons-container">
        <Link to="/login">
          <button
            id="cursor-trigger-btn"
            className={`${styles["auth-button"]}`}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            id="cursor-trigger-btn"
            className={`${styles["auth-button"]}`}
          >
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};
