import { Navigate } from "react-router";
import { isLoggedIn } from "../services/authentication";

const PrivateRoute = ({children}: {children: JSX.Element}) => {
  return isLoggedIn() ? children : <Navigate to="/splash" />
}

export default PrivateRoute;
