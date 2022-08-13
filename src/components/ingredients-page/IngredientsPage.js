import styles from "./IngredientsPage.module.css";
import {
  getBases,
  getSelection,
  getById,
} from "../../services/cocktailFetchService";
import { useEffect, useState } from "react";
import { BaseImg } from "./pick-base-section/BaseImg";
import { SvgContainer } from "./svg-container/SvgContainer";
import { CocktailCarousel } from "./cocktail-carousel-section/CocktailCarousel";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import React from "react";
export const IngredientsPage = ({ favId }) => {
  const [baseProps, setBaseProps] = useState([]);
  const [selectedBase, setSelectedBase] = useState("");
  const [cocktailSelection, setCocktailSelection] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [clickedCocktail, setClickedCocktail] = useState([]);
  const selectHandler = (data) => {
    // console.log("selectHandler", data);
    setSelectedBase(data);
    window.scroll({ bottom: 0, behavior: "smooth" });
  };
  // console.log("selectedBase", selectedBase);
  useEffect(() => {
    const bases = [
      "vodka",
      "rum",
      "tequila",
      "scotch",
      "champagne",
      "red wine",
      "triple sec",
      "beer",
      "cognac",
      "gin",
    ];
    bases.map((base) => {
      // console.log("this is base", base);
      return getBases(base).then((data) => {
        setBaseProps((prevState) => [
          ...prevState,
          { baseImg: data, baseName: base },
        ]);
      });
    });
  }, []);
  // console.log("basePropssss", baseProps);
  const svgHandler = () => {
    // console.log("svgHandler recieved :", data);
    detailsClick("16271");
  };
  // console.log("state: ", svgClicked);
  useEffect(() => {
    getSelection(selectedBase).then((data) => {
      setCocktailSelection(data);
    });
  }, [selectedBase]);
  // console.log(cocktailSelection, "cocktailSelection");

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    // console.log("dive", data);
    window.scroll({ top: 0, behavior: "smooth" });
    setIsShown(true);
    getById(data).then((response) => {
      console.log("response", response);
      setClickedCocktail(response);
    });

    // console.log("isShown", isShown);
  };
  const closeModal = () => {
    setIsShown(false);
  };
  const favouritedHandler = (drinkId) => {
    // console.log(drinkId, "passed through fav handler");
    favId(drinkId);
  };
  console.log("clickedCocktail", clickedCocktail);
  return (
    <>
      {isShown && (
        <CocktailDetails
          cocktail={clickedCocktail}
          closeClick={closeModal}
          favourited={favouritedHandler}
        />
      )}
      {!isShown && (
        <section
          id="content ingredients-page"
          className={styles["ingredients-page"]}
        >
          <div className={styles["ingredients-page-top-part"]}>
            <SvgContainer svgClick={svgHandler} />
            <div className={styles["ingredients-container"]}>
              <h2 className={styles["ingredients-container-title"]}>
                Pick your base:
              </h2>
              <div className={styles["bases"]}>
                {!baseProps.props &&
                  baseProps.map((base) => (
                    <BaseImg
                      key={base.baseImg}
                      baseProp={base}
                      selectedBase={selectHandler}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className={styles["ingredients-page-bottom-part"]}>
            <div className={styles["cocktail-list"]}>
              <CocktailCarousel
                cocktailSelection={cocktailSelection}
                detailsClick={detailsClick}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
