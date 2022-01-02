import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
require("dotenv").config();
