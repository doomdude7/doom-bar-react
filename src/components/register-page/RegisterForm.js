import styles from "./RegisterForm.module.css";
import global from "./../../App.module.css";
import { useEffect, useState, useRef } from "react";
import { signUp, useAuth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
export const RegisterForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
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
          id="register-page"
          className={`${styles["register-page"]} ${global["content"]}`}
        >
          <form
            id="register-form"
            className={styles["register-form"]}
            onSubmit={submitHandler}
          >
            <h1 className={styles["register-form-title"]}>Register</h1>
            <ul className={styles["register-form-list"]}>
              <li className={styles["list-item"]}>
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} type="email" id="email" name="email" />
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
              disabled={loading || currentUser}
              className={styles["register-form-button"]}
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  );
};
