import { Route, Switch, Redirect } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import AppLogin from "./components/AppLogin";
import AppRegister from "./components/AppRegister";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SingleCar from "./pages/SingleCar";
import CarSearch from "./components/CarSearch";

export default function Router({ setIsAuthenticated }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/cars" />
        </Route>
        <PrivateRoute exact path="/cars">
          <AppCars />
        </PrivateRoute>
        <PrivateRoute exact path="/cars/:id">
          <SingleCar />
        </PrivateRoute>
        <PrivateRoute exact path="/add">
          <AddCar />
        </PrivateRoute>
        <PrivateRoute exact path="/search">
          <CarSearch />
        </PrivateRoute>
        <PrivateRoute exact path="/edit/:id">
          <AddCar />
        </PrivateRoute>
        <PublicRoute exact path="/login">
          <AppLogin
            onLogin={() => {
              setIsAuthenticated(true);
            }}
          />
        </PublicRoute>
        <PublicRoute exact path="/register">
          <AppRegister
            onRegister={() => {
              setIsAuthenticated(true);
            }}
          />
        </PublicRoute>
      </Switch>
    </div>
  );
}
