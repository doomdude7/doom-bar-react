import styles from "./IngredientsPage.module.css";
import { getBases, getSelection } from "../../services/cocktailFetchService";
import { useEffect, useState } from "react";
import { BaseImg } from "./pick-base-section/BaseImg";
import { SvgContainer } from "./svg-container/SvgContainer";
import { CocktailCarousel } from "./cocktail-carousel-section/CocktailCarousel";
import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useNavigate, Link, useParams } from "react-router-dom";
// import { LoadingSpinner } from "../common/loading-spinner/LoadingSpinner";

export const IngredientsPage = () => {
  const [baseProps, setBaseProps] = useState([]);
  const [cocktailSelection, setCocktailSelection] = useState([]);
  const navigate = useNavigate();

  const { baseId } = useParams();
  // const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log("idBase", baseId);
    // setSpinner(true);

    getSelection(baseId).then((data) => {
      setCocktailSelection(data);
      // setSpinner(false);
    });
  }, [baseId]);

  const selectHandler = (data) => {
    // setSpinner(false);

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
        // setSpinner(false);
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
  // useEffect(() => {
  //   console.log("spinner", spinner);
  // }, [spinner]);

  //gsap animations
  const comp = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".ingredients-container-title",
        {
          opacity: 0,
          scale: 0.5,
          color: "#2f1736",
        },
        { opacity: 1, color: "white", scale: 1, duration: 2, delay: 0.5 }
      );
    }, comp);
    return () => ctx.revert();
  }, [baseProps]);
  return (
    <>
      {/* {spinner && <LoadingSpinner />} */}
      <section
        id="content ingredients-page"
        className={styles["ingredients-page"]}
      >
        {/* {!spinner && ( */}
        <>
          <div className={styles["ingredients-page-top-part"]}>
            <SvgContainer svgClick={svgHandler} />
            <div ref={comp} className={styles["ingredients-container"]}>
              <h2
                id="ingredients-container-title"
                className={`${styles["ingredients-container-title"]} ${[
                  "ingredients-container-title",
                ]}`}
              >
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
        </>
        {/* )} */}
      </section>
    </>
  );
};
