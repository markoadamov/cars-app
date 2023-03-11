import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav className="navigation">
            <div>
              <Link to="/cars">Cars </Link>
              <label> || </label>
              <Link to="/add">Add Car </Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/cars" />
          </Route>
          <Route exact path="/cars">
            <AppCars />
          </Route>
          <Route exact path="/add">
            <AddCar />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
