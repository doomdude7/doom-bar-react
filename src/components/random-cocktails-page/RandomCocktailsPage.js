import styles from "./RandomCocktailsPage.module.css";
import global from "../../App.module.css";
import { getOneRandom } from "../../services/cocktailFetchService";
import { useState, useEffect } from "react";
import { RandomCocktail } from "./RandomCocktail";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
export const RandomCocktailsPage = () => {
  const [cocktails, setCocktails] = useState([]);
  // const [i, seti] = useState(new Array(8).fill(0));
  const [clickedCocktail, setClickedCocktail] = useState([]);
  const [isShown, setIsShown] = useState(false);
  // const [closeClicked, setCloseClicked] = useState(false);
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      getOneRandom().then((cocktail) =>
        setCocktails((prevState) => [...prevState, cocktail])
      );
    }
  }, []);
  // function removeNull(array) {
  // return Array.from(array).filter((x) => x !== null);
  // return Array.from(array).Object.keys(array?.attributes || {}).length === 0;
  // return Array.from(array).filter(array?.attributes || {}).length === 0;
  // }

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    setIsShown(true);
    // const arrayData = Array(data);
    // const arrayData2 = arrayData[0];
    // const arrayData = removeNull(data);
    // const newData = Array.from(data).map((el) =>
    //   el.filter(({ item }) => item !== null)
    // );
    // console.log("arrayData", arrayData);
    console.log("isShown", isShown);
    setClickedCocktail(data);
  };
  // useEffect(() => {
  //   setClickedCocktail((data) => data);
  // }, [isShown]);
  const closeModal = () => {
    setIsShown(false);
  };
  return (
    <>
      {isShown && (
        <CocktailDetails cocktail={clickedCocktail} closeClick={closeModal} />
      )}

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
            cocktails.map((cocktail) => (
              <RandomCocktail
                key={cocktail.idDrink}
                cocktail={cocktail}
                detailsClick={detailsClick}
              />
            ))}
        </div>
      </section>
    </>
  );
};
