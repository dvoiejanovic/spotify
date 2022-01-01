import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SplashPage from "./pages/Splash/Splash";
import HomePage from "./pages/Home/Home";
import RedirectPage from "./pages/Redirect/Redirect";
import PrivateRoute from "./core/PrivateRoute";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
require("dotenv").config();
