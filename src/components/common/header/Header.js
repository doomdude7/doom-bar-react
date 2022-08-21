import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getByName } from "../../../services/cocktailFetchService";
import { useState } from "react";
import { SearchItem } from "./search-item/SearchItem";
import { useAuth } from "../../../firebase/firebase";
export const Header = () => {
  const [searchCocktails, setSearchCocktails] = useState(null);
  const navigate = useNavigate();
  const currentUser = useAuth();
  const submitSearchHandler = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    console.log(inputValue);
    !inputValue == " " &&
      getByName(inputValue).then((data) => {
        // console.log(data, "data");
        if (data === null) {
          setSearchCocktails([]);
        } else {
          setSearchCocktails((prevState) => data);
        }
      });
  };
  console.log(searchCocktails, "searchCocktails");
  // console.log("currentUser", currentUser);
  const detailsClick = (data) => {
    setSearchCocktails(null);
    console.log("detailsClick", data);
    navigate(`/cocktails/${data.idDrink}`);
  };

  return (
    <>
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
          <input
            type="input"
            placeholder="Search cocktails"
            className={styles["search-field"]}
            onChange={submitSearchHandler}
            onClick={submitSearchHandler}
          />
        </nav>
        {!currentUser && (
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
        )}
        {currentUser && (
          <div className="auth-buttons-container">
            <Link to="/profile">
              <button
                id="cursor-trigger-btn"
                className={`${styles["auth-button"]}`}
              >
                My Profile
              </button>
            </Link>
          </div>
        )}
      </header>

      {!searchCocktails == [] && (
        <div className={styles["search-results-container"]}>
          <button
            className={styles["close-search-results"]}
            onClick={() => setSearchCocktails(null)}
          >
            X
          </button>
          <div className={styles["search-results-list"]}>
            {searchCocktails.map((item, index) => (
              <SearchItem
                key={item.idDrink + index * 2}
                cocktail={item}
                detailsClick={detailsClick}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
