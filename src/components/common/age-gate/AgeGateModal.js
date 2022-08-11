import styles from "./AgeGateModal.module.css";
import { useState } from "react";
export const AgeGateModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ageGateTrueHandler = () => {
    localStorage.setItem("ageConsent", "true");
    setIsOpen(false);
  };
  const ageGateFalseHandler = () => {
    window.location.href = "https://en.wikipedia.org/wiki/Legal_drinking_age";
  };
  return isOpen ? (
    <div className={`${styles["pop-up"]}`}>
      <div className={`${styles["overlay"]}`}></div>
      <div className={`${styles["age-gate-container"]}`}>
        <div className={`${styles["age-gate-text-container"]}`}>
          <h1>Welcome to Doom's Bar!</h1>
          <p>
            Hello there dear traveller of the Internet. <br />
            You must be thirsty, let me crack open a cold one just for you!
            <br />
            But first lets make sure you are of legal drinking age!
          </p>
        </div>
        <div className={`${styles["age-gate-question-container"]}`}>
          <h2>Are you over 18 years old?</h2>
          <div className={`${styles["question-button-container"]}`}>
            <button
              id={`${styles["age-gate-btn-yes"]}`}
              onClick={ageGateTrueHandler}
            >
              Yes
            </button>
            <button
              id={`${styles["age-gate-btn-no"]}`}
              onClick={ageGateFalseHandler}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
