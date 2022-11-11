import styles from "./FavouritesPage.module.css";
import global from "../../App.module.css";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { RandomCocktail } from "./../random-cocktails-page/RandomCocktail";
import { getById } from "../../services/cocktailFetchService";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
export const FavouritesPage = ({ sessionFavs }) => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const detailsClick = (data) => {
    console.log("detailsClick", data);
    navigate(`/cocktails/${data.idDrink}`);
  };

  useEffect(() => {
    sessionFavs.map((fav) => {
      return getById(fav).then((cocktail) => {
        // console.log("cocktail from getById", cocktail);
        setFavourites((prevState) => [...prevState, cocktail]);
      });
    });
  }, [sessionFavs]);

  const favouritesDuplicateFilter = [
    ...new Map(favourites.map((item) => [JSON.stringify(item), item])).values(),
  ];
  console.log("favouritesDuplicateFilter", favouritesDuplicateFilter);

  //gsap animations
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".favourites-title",

        { opacity: 0, scale: 0.3, y: 0 },
        { opacity: 1, scale: 1, y: 20, duration: 1.2, ease: "power2.out" }
      );
      gsap.fromTo(
        ".no-favourites",
        1,
        { y: -1000, opacity: 0 },
        { y: 250, opacity: 1, delay: 0.4 },
        "<"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={comp}
        className={`${styles["favourites-section"]} ${global["content"]}`}
      >
        <h1 className={`${styles["favourites-title"]} ${["favourites-title"]}`}>
          Favourites:
        </h1>
        {favourites.length === 0 ? (
          <p className={`${styles["no-favourites"]} ${["no-favourites"]}`}>
            You have no favourites, yet!
          </p>
        ) : (
          <div className={`${styles["favourites-list"]}`}>
            {favouritesDuplicateFilter &&
              favouritesDuplicateFilter.map((fav, index) => {
                // console.log("fav returned obj", fav);
                return (
                  <RandomCocktail
                    key={fav.idDrink + fav.strDrink + index}
                    cocktail={fav}
                    detailsClick={detailsClick}
                  />
                );
              })}
          </div>
        )}
      </section>
    </>
  );
};
