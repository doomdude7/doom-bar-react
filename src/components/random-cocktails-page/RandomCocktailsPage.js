import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
export const RandomCocktailsPage = ({ alert, clickedCocktail }) => {
  const navigate = useNavigate();
  const [cocktails, setCocktails] = useState([]);
  // const [clickedCocktail, setClickedCocktail] = useState([]);
  console.log("cocktails", cocktails);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    //fetching 7 random cocktails ( max is 1 at a time for free use of the api)
    for (let i = 0; i < 7; i++) {
      getOneRandom().then((cocktail) =>
        setCocktails((prevState) => [...prevState, cocktail])
      );
    }
  }, []);

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    // setIsShown(true);
    navigate(`/cocktails/${data.idDrink}`);
    // console.log("isShown", isShown);

    clickedCocktail(data);
    window.scroll({ top: 0, behavior: "smooth" });
    // navigate(`/cocktails/${cocktailId}`);
  };
  // const closeModal = () => {
  //   setIsShown(false);
  // };
  // const favouritedHandler = (drinkId) => {
  //   // console.log(drinkId, "passed through fav handler");
  //   favId(drinkId);
  // };
  return (
    <>
      {/* {isShown && (
        <CocktailDetails
          cocktail={clickedCocktail}
          closeClick={closeModal}
          favourited={favouritedHandler}
          alert={alert}
        />
      )} */}

      <section
        id="cocktail-page"
        className={`${styles["cocktail-page"]} ${global["content"]}`}
      >
        <div className={`${styles["cocktail-page-section"]}`}>
          <h1 className={`${styles["cocktail-page-title"]}`}>
            Random cocktails section:
          </h1>
        </div>
        <div className={`${styles["cocktail-container"]}`}>
          {cocktails &&
            cocktails.map((cocktail, index) => (
              <RandomCocktail
                key={index + cocktail.idDrink}
                cocktail={cocktail}
                detailsClick={detailsClick}
              />
            ))}
        </div>
      </section>
    </>
  );
};
