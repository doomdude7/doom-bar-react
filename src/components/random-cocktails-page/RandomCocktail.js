import styles from "./RandomCocktail.module.css";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
export const RandomCocktail = ({ cocktail, detailsClick }) => {
  console.log(cocktail.cocktail);
  useEffect(() => {
    console.log("cocktail", cocktail);
  }, [cocktail]);

  //gsap animations
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".random-cocktail-img",
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.4 },
        "<"
      );
      gsap.fromTo(
        ".random-cocktail-title",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.2, duration: 1 },
        "<"
      );
      gsap.fromTo(
        ".random-cocktail-category",
        { opacity: 0 },
        { opacity: 1, delay: 0.2, duration: 2.5 },
        "<"
      );
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{ pathname: `/cocktails/${cocktail.idDrink}` }}
    >
      <div className={`${styles["random-cocktail"]}`} ref={comp}>
        <h2
          className={`${styles["random-cocktail-title"]} ${[
            "random-cocktail-title",
          ]}`}
        >{`${cocktail.strDrink}`}</h2>
        <h3
          className={`${styles["random-cocktail-category"]} ${[
            "random-cocktail-category",
          ]}`}
        >{`${cocktail.strCategory}`}</h3>
        <img
          id={`${cocktail.idDrink}`}
          className={`${styles["random-cocktail-img"]} ${[
            "random-cocktail-img",
          ]}`}
          src={`${cocktail.strDrinkThumb}`}
          alt="cocktail pic"
        />
      </div>
    </Link>
  );
};
