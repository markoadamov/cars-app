import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

export default function PrivateRoute({ children, ...props }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Route {...props}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
}
