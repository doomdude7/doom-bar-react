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

// <div className={`${styles["cocktail-instructions"]}`}>
//   <p className={`${styles["ingredients-list"]}`}>Ingredients:</p>
//   {cocktail.strMeasure1 === null ? (
//     cocktail.strIngredient1 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {`${cocktail.strMeasure1}`}
//       </span>

//       <span className={`${styles["ingredients-item-main"]}`}>
//         {`${cocktail.strIngredient1}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure2 === null ? (
//     cocktail.strIngredient2 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure2}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient2}`}
//       </span>
//     </p>
//   )}

//   {cocktail.strMeasure3 === null ? (
//     cocktail.strIngredient3 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure3}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient3}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure4 === null ||
//   cocktail.strMeasure4 === "" ||
//   cocktail.strMeasure4 === "\n" ? (
//     cocktail.strIngredient4 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure4}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient4}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure5 === null ||
//   cocktail.strMeasure5 === "" ||
//   cocktail.strMeasure5 === "\n" ? (
//     cocktail.strIngredient5 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure5}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient5}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure6 === null ||
//   cocktail.strMeasure6 === "" ||
//   cocktail.strMeasure6 === "\n" ? (
//     cocktail.strIngredient6 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure6}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient6}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure7 === null ||
//   cocktail.strMeasure7 === "" ||
//   cocktail.strMeasure7 === "\n" ? (
//     cocktail.strIngredient7 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure7}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient7}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure8 === null ||
//   cocktail.strMeasure8 === "" ||
//   cocktail.strMeasure8 === "\n" ? (
//     cocktail.strIngredient8 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure8}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient8}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure9 === null ||
//   cocktail.strMeasure9 === "" ||
//   cocktail.strMeasure9 === "\n" ? (
//     cocktail.strIngredient9 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure9}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient9}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure10 === null ||
//   cocktail.strMeasure10 === "" ||
//   cocktail.strMeasure10 === "\n" ? (
//     cocktail.strIngredient10 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure10}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient10}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure11 === null ||
//   cocktail.strMeasure11 === "" ||
//   cocktail.strMeasure11 === "\n" ? (
//     cocktail.strIngredient11 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure11}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {`${cocktail.strIngredient11}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure12 === null ||
//   cocktail.strMeasure12 === "" ||
//   cocktail.strMeasure12 === "\n" ? (
//     cocktail.strIngredient12 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure12}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient12}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure13 === null ||
//   cocktail.strMeasure13 === "" ||
//   cocktail.strMeasure13 === "\n" ? (
//     cocktail.strIngredient13 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {` ${cocktail.strMeasure13}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {` ${cocktail.strIngredient13}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure14 === null ||
//   cocktail.strMeasure14 === "" ||
//   cocktail.strMeasure14 === "\n" ? (
//     cocktail.strIngredient14 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {`${cocktail.strMeasure14}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {`${cocktail.strIngredient14}`}
//       </span>
//     </p>
//   )}
//   {cocktail.strMeasure15 === null ||
//   cocktail.strMeasure15 === "" ||
//   cocktail.strMeasure15 === "\n" ? (
//     cocktail.strIngredient15 === null
//   ) : (
//     <p className={`${styles["ingredients-item"]}`}>
//       <span className={`${styles["ingredients-item-sub"]}`}>
//         {`${cocktail.strMeasure15}`}
//       </span>
//       <span className={`${styles["ingredients-item-main"]}`}>
//         {`${cocktail.strIngredient15}`}
//       </span>
//     </p>
//   )}

//   <p className={`${styles["instructions-p"]}`}>
//     Instructions: {`${cocktail.strInstructions}`}
//   </p>
// </div>
