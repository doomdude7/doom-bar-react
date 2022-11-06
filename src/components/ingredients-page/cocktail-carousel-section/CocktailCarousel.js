import styles from "./CocktailCarousel.module.css";
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
export const CocktailCarousel = ({ cocktailSelection, detailsClick }) => {
  // console.log("cocktailSelection", cocktailSelection, "passed");
  const cocktailDetailsHandler = (cocktail) => {
    console.log("clicked in carousel", cocktail);

    detailsClick(cocktail);
  };

  //gsap animations
  const comp = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#cocktail-carousel-item-img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 10,
          ease: "power2.out",
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {cocktailSelection.map((cocktail) => {
        // console.log("this is cocktail", cocktail);

        return (
          <Link to={{ pathname: `/cocktails/${cocktail.idDrink}` }} ref={comp}>
            <div
              id="cocktail-carousel-item"
              className={styles["cocktail-carousel-item"]}
              key={cocktail.idDrink}
              onClick={cocktailDetailsHandler.bind(this, cocktail.idDrink)}
            >
              <img
                className={styles["cocktail-carousel-item-img"]}
                id="cocktail-carousel-item-img"
                src={cocktail.strDrinkThumb}
                alt="cocktail pic"
              ></img>
              <h2 className={styles["cocktail-carousel-item-title"]}>
                {cocktail.strDrink}
              </h2>
            </div>
          </Link>
        );
      }, [])}
    </>
  );
};
