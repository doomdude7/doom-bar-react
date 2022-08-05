import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <a href="#landing-page">
        <h2 className="logo">Doom's Bar</h2>
      </a>
      <nav>
        <a href="./cocktail-page.html">
          <h3>Random drinks</h3>
        </a>
        <a href="./ingredients-page.html">
          <h3>Pick a drink</h3>
        </a>
        <a href="./under-construction.html">
          <h3>Latest drinks</h3>
        </a>
      </nav>
      <div className="auth-buttons-container">
        {/* prettier-ignore */}
        <button id="cursor-trigger-btn" className={`${styles['auth-button']}`}>
          Login
        </button>
        {/* prettier-ignore */}
        <button id="cursor-trigger-btn" className={`${styles['auth-button']}`}>
          Register
        </button>
      </div>
    </header>
  );
};
