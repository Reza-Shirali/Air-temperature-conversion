import React, { useState } from "react";

import styles from "./Main.module.css";

function Main() {
  const [valueInput, setValueInput] = useState("");
  const [celsiusValue, setCelsiusValue] = useState("");

  const convertHandler = () => {
    if (valueInput) {
      const celsius = ((valueInput - 32) * 5) / 9;
      setCelsiusValue(celsius);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.main__top}>
          <label htmlFor="value">
            Please enter your temperature in Fahrenheit
          </label>
          <input
            type="number"
            id="value"
            value={valueInput}
            placeholder="temperature in Fahrenheit"
            onChange={(e) => setValueInput(+e.target.value)}
          />
          <button onClick={convertHandler}>Convert to Celsius</button>
        </div>
        <div className={styles.main__bottom}>
          <span>{Number(celsiusValue).toFixed(2)} °C</span>
        </div>
      </main>
    </>
  );
}

export default Main;
