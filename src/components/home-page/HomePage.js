import sunsetImg from "./assets/drinks-sunset.png";
import styles from "./HomePage.module.css";
import globalStyles from "../../App.module.css";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const HomePage = () => {
  //gsap scroll trigger animation
  const comp = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#landing-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
      });
      ScrollTrigger.create({
        trigger: "#greeting",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={comp}>
        <section
          id="landing-page"
          className={`${styles["landing-page"]} ${globalStyles["content"]}`}
        ></section>
        <section
          id="greeting"
          className={`${styles["greeting"]} ${["greeting"]}`}
        >
          <img src={sunsetImg} alt="beers at sunset" />
          <div className={`${styles["greeting-text-container"]}`}>
            <h1 className={`${styles["greeting-title"]}`}>
              Welcome to my humble establishment.
            </h1>
            <h2 className={`${styles["greeting-subtitle"]}`}>
              -Doom's bar is at your service-
            </h2>
            <p className={`${styles["greeting-msg"]}`}>
              Here you will find hundreds of cocktail recipies to choose from!
              Each one is equiped with a list of all the required ingredients
              and instructions on how it is prepared... so.. What will it be?
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
