import { useState } from "react";
import styles from "./UserProfile.module.css";
import global from "../../App.module.css";
import { logOut, useAuth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
export const UserProfile = ({ sessionFavs }) => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();
  const logOutHandler = async () => {
    setLoading(true);
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      alert("Error signing out");
    }
    setLoading(false);
  };

  //to be completed
  const saveFavsHandler = async () => {
    setLoading(true);
    try {
      console.log("saving favs", sessionFavs);
    } catch (error) {
      alert("Error saving!");
    }
    setLoading(false);
  };

  return (
    <>
      {currentUser && (
        <section
          className={`${styles["profile-section"]} ${global["content"]}`}
        >
          <h1 className={styles["profile-section-label"]}>My Profile: </h1>
          <h2 className={styles["profile-section-email"]}>
            Email: {currentUser?.email}
          </h2>
          <h3>Save Favourites session</h3>
          <button
            className={styles["profile-button"]}
            disabled={loading}
            onClick={saveFavsHandler}
          >
            Save
          </button>
          <button
            className={styles["profile-button"]}
            disabled={loading || !currentUser}
            onClick={logOutHandler}
          >
            Log Out
          </button>
        </section>
      )}
    </>
  );
};
