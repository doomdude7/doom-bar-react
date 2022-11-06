import styles from "./BaseImg.module.css";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
export const BaseImg = ({ baseProp, selectedBase }) => {
  // console.log(baseProp.baseImg, "baseUrl");
  // console.log(baseProp.baseName, "baseName");
  const baseClickHandler = (base) => {
    selectedBase(base);
  };

  //gsap animations
  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#base-container-title",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        "#base-container-img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className={styles["base-container"]}
      onClick={baseClickHandler.bind(this, baseProp.baseName)}
    >
      <h2 id="base-container-title" className={styles["base-container-title"]}>
        {baseProp.baseName}
      </h2>
      <img
        id="base-container-img"
        className={styles["base-container-img"]}
        src={baseProp.baseImg}
        alt="alcohol pic"
      ></img>
    </section>
  );
};
