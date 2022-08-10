import styles from "./CocktailDetails.module.css";
import global from "../../App.module.css";

export const CocktailDetails = ({ cocktail, closeClick }) => {
  console.log("passed cocktail data", cocktail);
  console.log("dive cocktail data", cocktail);

  const closeDetailsHandler = () => {
    closeClick(false);
    console.log("closeDetailsHandler");
  };
  return (
    <section
      className={`${styles["cocktail-details-page"]} ${global["content"]}`}
    >
      <button
        className={`${styles["close-cocktail-details"]}`}
        onClick={closeDetailsHandler}
      >
        X
      </button>
      <div className={`${styles["cocktail-details"]}`}>
        <h1
          className={`${styles["cocktails-details-title"]}`}
        >{`${cocktail.strDrink}`}</h1>
        <h3
          className={`${styles["cocktails-details-category"]}`}
        >{`${cocktail.strCategory}`}</h3>
        <h3 className={`${styles["cocktails-details-alcoholic"]}`}>
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
          <h2 className={`${styles["glass-type"]}`}>
            Served in a {`${cocktail.strGlass}`}
          </h2>
        </div>
        <div className={`${styles["cocktail-instructions"]}`}>
          <p className={`${styles["ingredients-list"]}`}>Ingredients:</p>
          {cocktail.strMeasure1 === null ? (
            cocktail.strIngredient1 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {`${cocktail.strMeasure1}`}
              </span>

              <span className={`${styles["ingredients-item-main"]}`}>
                {`${cocktail.strIngredient1}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure2 === null ? (
            cocktail.strIngredient2 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure2}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient2}`}
              </span>
            </p>
          )}

          {cocktail.strMeasure3 === null ? (
            cocktail.strIngredient3 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure3}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient3}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure4 === null || cocktail.strMeasure4 === "" ? (
            cocktail.strIngredient4 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure4}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient4}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure5 === null || cocktail.strMeasure5 === "" ? (
            cocktail.strIngredient5 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure5}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient5}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure6 === null || cocktail.strMeasure6 === "" ? (
            cocktail.strIngredient6 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure6}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient6}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure7 === null || cocktail.strMeasure7 === "" ? (
            cocktail.strIngredient7 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure7}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient7}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure8 === null || cocktail.strMeasure8 === "" ? (
            cocktail.strIngredient8 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure8}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient8}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure9 === null || cocktail.strMeasure9 === "" ? (
            cocktail.strIngredient9 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure9}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient9}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure10 === null || cocktail.strMeasure10 === "" ? (
            cocktail.strIngredient10 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure10}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient10}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure11 === null || cocktail.strMeasure11 === "" ? (
            cocktail.strIngredient11 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure11}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {`${cocktail.strIngredient11}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure12 === null || cocktail.strMeasure12 === "" ? (
            cocktail.strIngredient12 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure12}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient12}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure13 === null || cocktail.strMeasure13 === "" ? (
            cocktail.strIngredient13 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {` ${cocktail.strMeasure13}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {` ${cocktail.strIngredient13}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure14 === null || cocktail.strMeasure14 === "" ? (
            cocktail.strIngredient14 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {`${cocktail.strMeasure14}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {`${cocktail.strIngredient14}`}
              </span>
            </p>
          )}
          {cocktail.strMeasure15 === null || cocktail.strMeasure15 === "" ? (
            cocktail.strIngredient15 === null
          ) : (
            <p className={`${styles["ingredients-item"]}`}>
              <span className={`${styles["ingredients-item-sub"]}`}>
                {`${cocktail.strMeasure15}`}
              </span>
              <span className={`${styles["ingredients-item-main"]}`}>
                {`${cocktail.strIngredient15}`}
              </span>
            </p>
          )}

          <p className={`${styles["instructions-p"]}`}>
            Instructions: {`${cocktail.strInstructions}`}
          </p>
        </div>
      </div>
    </section>
  );
};
