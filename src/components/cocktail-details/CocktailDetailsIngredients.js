import styles from "./CocktailDetailsIngredients.module.css";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
export const CocktailDetailsIngredients = ({ cocktail }) => {
  console.log("cocktail", cocktail);
  const measures = Object.keys(cocktail).filter((key) =>
    key.includes("strMeasure")
  );

  const measuresData = measures
    .map((measure) => {
      return {
        measure: measure,
        value: cocktail[measure],
      };
    })
    .filter(
      (measure) =>
        measure.value !== "" && measure.value !== null && measure.value !== "\n"
    );
  console.log("measuresData", measuresData);
  const ingredients = Object.keys(cocktail).filter((key) =>
    key.includes("strIngredient")
  );
  const ingredientsData = ingredients
    .map((ingredients) => {
      return {
        ingredients: ingredients,
        value: cocktail[ingredients],
      };
    })
    .filter(
      (ingredient) =>
        ingredient.value !== "" &&
        ingredient.value !== null &&
        ingredient.value !== "\n"
    );
  console.log("ingredientsData", ingredientsData);
  const ingredientsList = ingredientsData.map((ingredient, index) => {
    return (
      <span
        key={index + ingredient.ingredients}
        className={`${styles["ingredients-item-main"]}`}
      >
        {ingredient.value}
      </span>
    );
  });
  const measuresList = measuresData.map((measure, index) => {
    return (
      <span
        key={index + measure.measure}
        className={`${styles["ingredients-item-sub"]}`}
      >
        {measure.value}
      </span>
    );
  });
  const ingredientsItems = ingredientsList.map((ingredient, index) => {
    const measure = measuresList[index];
    return (
      <>
        <li
          key={ingredient + index}
          className={`${styles["ingredients-item"]}`}
        >
          {measure}
          {ingredient}
        </li>
        <hr width="100%" color="cyan" size="1px" />
      </>
    );
  });
  console.log("measures", measures);
  console.log("ingredients", ingredients);
  //   console.log("IngredientsItems", ingredientsItems);
  //   console.log("cocktail strMeasure", `cocktail.strMeasure${index}`);

  //gsap animations
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".ingredients-list-title",
        { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1, duration: 1.5 }
      );
      gsap.fromTo(
        ".ingredients-list",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<80%"
      );
      gsap.fromTo(
        ".instructions-p-title",
        { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1, duration: 1.5 }
      );
      gsap.fromTo(
        ".instructions-p",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<120%"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className={`${styles["cocktail-instructions"]}`}>
      <h2
        className={`${styles["ingredients-list-title"]} ${[
          "ingredients-list-title",
        ]}`}
      >
        Ingredients:
      </h2>
      <ul className={`${styles["ingredients-list"]} ${["ingredients-list"]}`}>
        {ingredientsItems}
      </ul>

      {cocktail.strInstructions !== "" &&
        cocktail.strInstructions !== null &&
        cocktail.strInstructions !== "\n" && (
          <>
            <h2
              className={`${styles["instructions-p-title"]} ${[
                "instructions-p-title",
              ]}`}
            >
              Instructions:
            </h2>
            <p className={`${styles["instructions-p"]} ${["instructions-p"]}`}>
              {cocktail.strInstructions}
            </p>
          </>
        )}
    </div>
  );
};
