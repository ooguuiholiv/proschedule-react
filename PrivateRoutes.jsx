import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const user = window.localStorage.getItem("token");
  return user ? children : <Navigate to="/auth/login" />;
};
