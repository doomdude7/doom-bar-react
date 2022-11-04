import styles from "./CocktailDetails.module.css";
import global from "../../App.module.css";
import { gsap } from "gsap";
import { CocktailDetailsIngredients } from "./CocktailDetailsIngredients";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { getById } from "../../services/cocktailFetchService";

export const CocktailDetails = ({ closeClick, favourited }) => {
  // console.log("passed cocktail data", cocktail);
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState({});
  console.log("coktailId ...", cocktailId);
  useEffect(() => {
    // const data = { cocktailId };
    getById(cocktailId).then((cocktail) => {
      console.log("response", cocktail);
      return setCocktail(cocktail);
    });
  }, [cocktailId]);
  console.log("cocktail --- ", cocktail);
  const closeDetailsHandler = () => {
    closeClick("close");
    console.log("closeDetailsHandler");
  };
  const heartClickHandler = () => {
    console.log("heart");
    favourited(cocktail.idDrink);
  };
  console.log(favourited, "favourited");

  //gsap animations
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#cocktail-preview-img",
        { opacity: 0, scale: 0.1, x: -500, y: -500 },
        {
          opacity: 1,
          scale: 0.5,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "Power1.easeOut",
        }
      );
      gsap.fromTo(
        ".cocktails-details-title",
        { opacity: 0, x: -800 },
        { opacity: 1, x: 0, duration: 2, ease: "elastic.out(0.6, 0.3)" }
      );
      gsap.fromTo(
        ".cocktails-details-category",
        { opacity: 0, x: 800 },
        { opacity: 1, x: 0, duration: 1.5 },
        "<"
      );
      gsap.fromTo(
        ".cocktails-details-alcoholic",
        { opacity: 0, y: -800 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.4 },
        "<"
      );
      // gsap.fromTo(
      //   ".glass-type",
      //   { opacity: 0, y: 0 },
      //   { y: -200, opacity: 1, duration: 2 }
      // );
      gsap.fromTo(
        ".heart-cocktail-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: 0.5,
        },
        "<"
      );
      gsap.fromTo(
        ".close-cocktail-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
        },
        "<"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  let mm = gsap.matchMedia();
  mm.add("(min-width: 800px)", () => {
    gsap.fromTo(
      ".glass-type",
      { opacity: 0, y: 0 },
      { y: -200, opacity: 1, duration: 2 }
    );
    return () => {
      // optional
      // custom cleanup code here (runs when it STOPS matching)
    };
  });
  mm.add("(max-width: 800px)", () => {
    gsap.fromTo(
      ".glass-type",
      { opacity: 0, y: 200 },
      { y: 0, opacity: 1, duration: 2 }
    );
    return () => {
      // optional
      // custom cleanup code here (runs when it STOPS matching)
    };
  });
  return (
    <div className={styles["details-overlay"]}>
      <section
        ref={comp}
        className={`${styles["cocktail-details-page"]} ${global["content"]}`}
      >
        <button
          className={`${styles["close-cocktail-details"]} ${[
            "close-cocktail-details",
          ]}`}
          onClick={closeDetailsHandler}
        >
          X
        </button>
        <button
          className={`${styles["heart-cocktail-details"]} ${[
            "heart-cocktail-details",
          ]}`}
          onClick={heartClickHandler}
        >
          ❤
        </button>
        <div className={`${styles["cocktail-details"]}`}>
          <h1
            className={`${styles["cocktails-details-title"]} ${[
              "cocktails-details-title",
            ]}`}
          >{`${cocktail.strDrink}`}</h1>
          <h3
            className={`${styles["cocktails-details-category"]} ${[
              "cocktails-details-category",
            ]}`}
          >{`${cocktail.strCategory}`}</h3>
          <h3
            className={`${styles["cocktails-details-alcoholic"]} ${[
              "cocktails-details-alcoholic",
            ]}`}
          >
            {`${cocktail.strAlcoholic}`}
          </h3>
        </div>

        <div className={`${styles["cocktail-preview-and-instructions"]}`}>
          <div className={`${styles["cocktail-preview"]}`}>
            <img
              id="cocktail-preview-img"
              className={`${styles["cocktail-preview-img"]}`}
              src={`${cocktail.strDrinkThumb}`}
              alt="cocktail pic"
            />
            <h2 className={`${styles["glass-type"]} ${["glass-type"]}`}>
              Served in a {`${cocktail.strGlass}`}
            </h2>
          </div>
          <CocktailDetailsIngredients cocktail={cocktail} />
        </div>
      </section>
    </div>
  );
};
