import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import { useNavigate, Link } from "react-router-dom";

export const RandomCocktailsPage = ({
  // clickedCocktail,
  currentRandomsList,
  currentRandomsData,
}) => {
  const navigate = useNavigate();

  const [cocktails, setCocktails] = useState([]);
  // const [clickedCocktail, setClickedCocktail] = useState([]);
  console.log("cocktails", cocktails);
  useEffect(() => {
    currentRandomsList(cocktails);
  }, [cocktails]);

  console.log("currentRandoms", currentRandomsList);
  useEffect(() => {
    //fetching 7 random cocktails ( max is 1 at a time for free use of the api)
    if (currentRandomsData.length === 0) {
      for (let i = 0; i < 7; i++) {
        getOneRandom().then((cocktail) =>
          setCocktails((prevState) => [...prevState, cocktail])
        );
      }
    } else {
      setCocktails(currentRandomsData);
    }
  }, []);

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    navigate(`/cocktails/${data.idDrink}`);
    // clickedCocktail(data);
    // window.scroll({ top: 0, behavior: "smooth" });
    // navigate(`/cocktails/${cocktailId}`);
  };
  return (
    <>
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
