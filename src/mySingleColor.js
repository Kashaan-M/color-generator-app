import React, { useState, useEffect } from "react";

function MySingleColor({ rgb, index, weight, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // console.log("bcg", bcg);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <p
        className={`copy-icon ${index > 10 && "light-icon"}`}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        ⎘
      </p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
export default MySingleColor;
