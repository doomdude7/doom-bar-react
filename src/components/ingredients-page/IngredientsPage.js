import styles from "./IngredientsPage.module.css";
import { getBases, getSelection } from "../../services/cocktailFetchService";
import { useEffect, useState } from "react";
import { BaseImg } from "./pick-base-section/BaseImg";
import { SvgContainer } from "./svg-container/SvgContainer";
import { CocktailCarousel } from "./cocktail-carousel-section/CocktailCarousel";
import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export const IngredientsPage = () => {
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
    console.log("detailsClick", data);
    navigate(`/cocktails/${data}`);
  };

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
                    style={{ textDecoration: "none" }}
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
            <CocktailCarousel cocktailSelection={cocktailSelection} />
          </div>
        </div>
      </section>
    </>
  );
};
