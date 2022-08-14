import styles from "./CocktailDetailsIngredients.module.css";
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
      <li key={ingredient + index} className={`${styles["ingredients-item"]}`}>
        {measure}
        {ingredient}
      </li>
    );
  });
  console.log("measures", measures);
  console.log("ingredients", ingredients);
  //   console.log("IngredientsItems", ingredientsItems);
  //   console.log("cocktail strMeasure", `cocktail.strMeasure${index}`);
  return (
    <div className={`${styles["cocktail-instructions"]}`}>
      <h2 className={`${styles["ingredients-list-title"]}`}>Ingredients:</h2>
      <ul className={`${styles["ingredients-list"]}`}>{ingredientsItems}</ul>

      {cocktail.strInstructions !== "" &&
        cocktail.strInstructions !== null &&
        cocktail.strInstructions !== "\n" && (
          <>
            <h2 className={`${styles["instructions-p-title"]}`}>
              Instructions:
            </h2>
            <p className={`${styles["instructions-p"]}`}>
              {cocktail.strInstructions}
            </p>
          </>
        )}
    </div>
  );
};
