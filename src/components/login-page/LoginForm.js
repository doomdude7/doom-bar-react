import styles from "./LoginForm.module.css";
import global from "./../../App.module.css";
import { useState, useRef } from "react";
import { useAuth, logIn } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logInHandler = async () => {
    setLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate("/profile");
    } catch (error) {
      alert("Error signing up");
    }

    setLoading(false);
  };

  return (
    <>
      {!currentUser && (
        <section
          id="login-page"
          className={`${styles["login-page"]} ${global["content"]}`}
        >
          <form id="login-form" className={styles["login-form"]}>
            <h1 className={styles["login-form-title"]}>Login</h1>
            <ul className={styles["login-form-list"]}>
              <li className={styles["list-item"]}>
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} type="text" id="email" name="email" />
              </li>
              <li className={styles["list-item"]}>
                <label htmlFor="password">Password:</label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  name="password"
                />
              </li>
            </ul>
            <button
              onClick={logInHandler}
              disabled={loading || currentUser}
              className={styles["login-form-button"]}
            >
              Log In
            </button>
          </form>
        </section>
      )}
    </>
  );
};
