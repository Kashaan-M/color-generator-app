import React, { useState, useEffect } from "react";
import MySingleColor from "./mySingleColor";
import Values from "values.js";

function MyApp() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [colorValues, setColorValues] = useState(10);
  const [valueError, setValueError] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setValueError(false);
      setError(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [error, valueError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colorValuesInt = parseInt(colorValues);
      if (colorValuesInt) {
        console.log("colorValues: ", typeof colorValuesInt);
        let colors = new Values(color).all(colorValuesInt);
        console.log(colors);
        setList(colors);
      } else {
        setValueError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    // console.log(colors);  >>> Array(21) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ] \n 0: Object { alpha: 1, type: "tint", weight: 100, … } \n alpha: 1,rgb: Array(3) [ 255, 255, 255 ], ​type: "tint", weight: 100 \n 1: Object { alpha: 1, type: "tint", weight: 90, … } ........
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator App</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color" className="labels">
            Color
          </label>

          <input
            type="text"
            value={color}
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
            placeholder="e.g. #f15025 , rgb(225,225,225)"
            name="color"
            id="color"
          />

          <label htmlFor="colorValues" className="labels">
            Tints/ Shades
          </label>

          <input
            type="text"
            value={colorValues}
            className={`color-values ${error ? "error" : null}`}
            onChange={(e) => setColorValues(e.target.value)}
            placeholder="10"
          />
          <button type="submit" className="btn pos-abs">
            generate
          </button>
        </form>
        {valueError && (
          <p className="value-error">
            Please Enter a Weight Number For Tints/ Shades
          </p>
        )}
        {error && <p className="color-error">Please Enter a valid color</p>}
      </section>

      <section className="colors">
        {list.map((color, index) => {
          // console.log("color"); // color Object { rgb: (3) […], alpha: 1, type: "tint", weight: 100 }
          return (
            <MySingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
      <footer>
        <p className="my-website">
          Developed By &nbsp;
          <a href="https://kashaan.netlify.app" className="my-website-address">
            Kashaan Mahmood
          </a>
        </p>
      </footer>
    </>
  );
}
export default MyApp;
