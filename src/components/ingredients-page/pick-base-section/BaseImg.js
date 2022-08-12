import styles from "./BaseImg.module.css";
export const BaseImg = ({ baseProp, selectedBase }) => {
  // console.log(baseProp.baseImg, "baseUrl");
  // console.log(baseProp.baseName, "baseName");
  const baseClickHandler = (base) => {
    selectedBase(base);
  };
  return (
    <section
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
