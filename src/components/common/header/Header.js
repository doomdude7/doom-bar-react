import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { getByName } from "../../../services/cocktailFetchService";
import { useState } from "react";
import { SearchItem } from "./search-item/SearchItem";
import { CocktailDetails } from "../../cocktail-details/CocktailDetails";
export const Header = ({ favId }) => {
  const [searchCocktails, setSearchCocktails] = useState(null);
  const [clickedCocktail, setClickedCocktail] = useState([]);
  const [isShown, setIsShown] = useState(false);
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

  const detailsClick = (data) => {
    setSearchCocktails(null);
    console.log("detailsClick", data);
    // console.log("dive", data);
    setIsShown(true);
    console.log("isShown", isShown);
    setClickedCocktail(data);
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const closeModal = () => {
    setIsShown(false);
  };
  const favouritedHandler = (drinkId) => {
    // console.log(drinkId, "passed through fav handler");
    favId(drinkId);
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
      </header>
      {isShown && (
        <CocktailDetails
          cocktail={clickedCocktail}
          closeClick={closeModal}
          favourited={favouritedHandler}
        />
      )}
      {!searchCocktails == [] && (
        <div
          className={styles["search-results-container"]}
          // onBlur={() => setSearchCocktails(null)}
          // onMouseLeave={() => setSearchCocktails(null)}
        >
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
