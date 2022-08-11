import styles from "./LoginForm.module.css";
import global from "./../../App.module.css";
export const LoginForm = () => {
  return (
    <section
      id="login-page"
      className={`${styles["login-page"]} ${global["content"]}`}
    >
      <form id="login-form" className={styles["login-form"]}>
        <h1 className={styles["login-form-title"]}>Login</h1>
        <ul className={styles["login-form-list"]}>
          <li>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </li>
        </ul>
        <button className={styles["login-form-button"]}>Submit</button>
      </form>
    </section>
  );
};
