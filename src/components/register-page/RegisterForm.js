import styles from "./RegisterForm.module.css";
import global from "./../../App.module.css";
export const RegisterForm = () => {
  return (
    <section
      id="register-page"
      className={`${styles["register-page"]} ${global["content"]}`}
    >
      <form id="register-form" className={styles["register-form"]}>
        <h1 className={styles["register-form-title"]}>Register</h1>
        <ul className={styles["register-form-list"]}>
          <li>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </li>
        </ul>
        <button className={styles["register-form-button"]}>Submit</button>
      </form>
    </section>
  );
};
