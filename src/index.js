import React from "react";
import ReactDOM from "react-dom/client";
import "./myindex.css";
import MyApp from "./MyApp";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
