import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import AppCars from "./pages/AppCars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav className="navigation">
            <div>
              <Link to="/cars">Cars </Link>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
