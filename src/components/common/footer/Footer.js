import logo from "./assets/doomdude-text.png";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer>
      <a href="/">
        <h2 className={styles.logo}>Doom's Bar</h2>
      </a>
      <nav>
        <a target="___blank" href="https://www.doomdude.com">
          <h3>portfolio.</h3>
        </a>
        <a target="__blank" href="https://github.com/doomdude7">
          <h3>github.</h3>
        </a>
      </nav>
      <div className={`${styles["logo-container"]}`}>
        <h2>By:</h2>
        <img src={logo} alt="doomdude logo" />
      </div>
    </footer>
  );
};
