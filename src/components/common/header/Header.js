import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2 className="logo">Doom's Bar</h2>
      </Link>
      <nav>
        <Link to="/random-cocktails">
          <h3>Random drinks</h3>
        </Link>
        <Link to="/">
          <h3>Pick a drink</h3>
        </Link>
        <Link to="/">
          <h3>Latest drinks</h3>
        </Link>
      </nav>
      <div className="auth-buttons-container">
        <button id="cursor-trigger-btn" className={`${styles["auth-button"]}`}>
          Login
        </button>
        <button id="cursor-trigger-btn" className={`${styles["auth-button"]}`}>
          Register
        </button>
      </div>
    </header>
  );
};
