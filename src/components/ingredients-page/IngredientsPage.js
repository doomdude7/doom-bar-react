import styles from "./IngredientsPage.module.css";
import {
  getBases,
  getSelection,
  getById,
} from "../../services/cocktailFetchService";
import { useEffect, useState, useRef } from "react";
import { BaseImg } from "./pick-base-section/BaseImg";
import { SvgContainer } from "./svg-container/SvgContainer";
import { CocktailCarousel } from "./cocktail-carousel-section/CocktailCarousel";
import { CocktailDetails } from "../cocktail-details/CocktailDetails";
import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export const IngredientsPage = ({ clickedCocktail }) => {
  const [baseProps, setBaseProps] = useState([]);
  const [cocktailSelection, setCocktailSelection] = useState([]);
  const navigate = useNavigate();
  const { baseId } = useParams();
  useEffect(() => {
    console.log("idBase", baseId);
    getSelection(baseId).then((data) => {
      setCocktailSelection(data);
    });
  }, [baseId]);
  const selectHandler = (data) => {
    navigate(`/pick-drink/${data}`);
  };
  useEffect(() => {
    const bases = [
      "vodka",
      "rum",
      "tequila",
      "scotch",
      "champagne",
      "red wine",
      "triple sec",
      "bourbon",
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

  const detailsClick = (data) => {
    // console.log("dive", data);
    // setIsShown(true);
    console.log("detailsClick", data);
    getById(data).then((response) => {
      console.log("response", response);
      clickedCocktail(response);
      navigate(`/cocktails/${response.idDrink}`);
    });
    // console.log("isShown", isShown);
  };

  console.log("clickedCocktail", clickedCocktail);
  return (
    <>
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
                  <Link
                    to={{ pathname: `/pick-drink/${base.baseName}` }}
                    key={base.baseImg}
                  >
                    <BaseImg
                      key={base.baseImg}
                      baseProp={base}
                      selectedBase={selectHandler}
                    />
                  </Link>
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
    </>
  );
};
