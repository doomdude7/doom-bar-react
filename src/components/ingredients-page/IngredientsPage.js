import styles from "./IngredientsPage.module.css";
import global from "../../App.module.css";
import { getBases } from "../../services/cocktailFetchService";
import { useEffect, useState } from "react";
import { BaseImg } from "./BaseImg";
export const IngredientsPage = () => {
  const [baseProps, setBaseProps] = useState([]);
  useEffect(() => {
    const bases = [
      "vodka",
      "rum",
      "scotch",
      "whiskey",
      "champagne",
      "beer",
      "gin",
    ];
    bases.map((base) => {
      console.log("this is base", base);
      return getBases(base).then((data) => {
        setBaseProps((prevState) => [
          ...prevState,
          { baseImg: data, baseName: base },
        ]);
      });
    });
  }, []);
  console.log("basePropssss", baseProps);
  return (
    <section
      id="content ingredients-page"
      className={`${styles["ingredients-page"]} ${global["content"]}`}
    >
      <div className={styles["ingredients-page-top-part"]}>
        <div className={["svg-container"]}></div>
        <div className={styles["ingredients-container"]}>
          <h2 className={styles["ingredients-container-title"]}>
            Pick your base:
          </h2>
          <div className={styles["bases"]}>
            {!baseProps.props &&
              baseProps.map((base) => (
                <BaseImg key={base.baseImg} baseProp={base} />
              ))}
          </div>
        </div>
      </div>
      <div className={styles["ingredients-page-bottom-part"]}></div>
    </section>
  );
};
