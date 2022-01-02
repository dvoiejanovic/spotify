import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./core/PrivateRoute";
import HomePage from "./pages/Home";
import RedirectPage from "./pages/Redirect";
import SplashPage from "./pages/Splash";

const App = () => {
  return (
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
  )
}

export default App;
