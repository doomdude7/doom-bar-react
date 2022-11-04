import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getByName } from "../../../services/cocktailFetchService";
import { useState } from "react";
import { SearchItem } from "./search-item/SearchItem";
import { useAuth } from "../../../firebase/firebase";
import { Hamburger } from "./Hamburger";
export const Header = () => {
  const [searchCocktails, setSearchCocktails] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = useAuth();
  const submitSearchHandler = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    console.log(inputValue);

    !inputValue == " " && // eslint-disable-line eqeqeq
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

  const hamburgerHandler = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log("click");
  };
  console.log("hamburgerOpen", hamburgerOpen);
  return (
    <>
      <header>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <h2 className={styles["logo"]}>Doom's Bar</h2>
          </Link>
          <div className={styles["hamburger-menu"]} onClick={hamburgerHandler}>
            <Hamburger />
          </div>
        </div>
        <div className="menu">
          <nav className={styles["header-nav"]}>
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
            <div className={styles["auth-buttons-container"]}>
              <Link to="/login">
                <button
                  id="profile-btn-login"
                  className={`${styles["auth-button"]}`}
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  id="profile-btn-reg"
                  className={`${styles["auth-button"]}`}
                >
                  Register
                </button>
              </Link>
            </div>
          )}
          {currentUser && (
            <div className={styles["auth-buttons-container"]}>
              <Link to="/profile">
                <button id="profile-btn" className={`${styles["auth-button"]}`}>
                  My Profile
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {!searchCocktails == [] && ( // eslint-disable-line eqeqeq
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
      <style jsx="true">{`
        .menu {
          display: flex;
        }
        @media (max-width: 1430px) {
          .menu {
            display: ${hamburgerOpen ? `flex` : `none`};
            width: 100vw;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            column-gap: 1.5rem;
            padding: 0.5rem 1rem;
          }
          header {
            height: ${hamburgerOpen ? `auto` : `5rem`};
          }
        }
      `}</style>
    </>
  );
};
