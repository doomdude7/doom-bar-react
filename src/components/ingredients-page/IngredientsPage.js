import styles from "./IngredientsPage.module.css";
import { getBases, getSelection } from "../../services/cocktailFetchService";
import { useEffect, useState } from "react";
import { BaseImg } from "./pick-base-section/BaseImg";
import { SvgContainer } from "./svg-container/SvgContainer";
import { CocktailCarousel } from "./cocktail-carousel-section/CocktailCarousel";
import React from "react";
export const IngredientsPage = () => {
  const [baseProps, setBaseProps] = useState([]);
  const [selectedBase, setSelectedBase] = useState("");
  const [svgClicked, setSvgClicked] = useState(false);
  const [cocktailSelection, setCocktailSelection] = useState([]);

  const selectHandler = (data) => {
    console.log("selectHandler", data);
    setSelectedBase(data);
  };
  console.log("selectedBase", selectedBase);
  useEffect(() => {
    const bases = [
      "vodka",
      "rum",
      "scotch",
      "whiskey",
      "champagne",
      "beer",
      "gin",
    ];
    bases.map((base) => {
      console.log("this is base", base);
      return getBases(base).then((data) => {
        setBaseProps((prevState) => [
          ...prevState,
          { baseImg: data, baseName: base },
        ]);
      });
    });
  }, []);
  console.log("basePropssss", baseProps);
  const svgHandler = (data) => {
    console.log("svgHandler recieved :", data);
    setSvgClicked(true);
  };
  console.log("state: ", svgClicked);
  useEffect(() => {
    getSelection(selectedBase).then((data) => {
      setCocktailSelection(data);
    });
  }, [selectedBase]);
  console.log(cocktailSelection, "cocktailSelection");
  return (
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
          <CocktailCarousel cocktailSelection={cocktailSelection} />
        </div>
      </div>
    </section>
  );
};
