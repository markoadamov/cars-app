import { useState } from "react";
import "./App.css";
// import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Page from "./layout/Page";
import Router from "./Router";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <div>
    //       <nav className="navigation">
    //         <div>
    //          ...
    //           <label> || </label>
    //           <Link to="/add">
    //             <button className="navigationButtons">Add Car</button>
    //           </Link>
    //         </div>
    //       </nav>
    //     </div>
    //     <Switch>
    //       ...
    //       <Route path="/edit/:id">
    //         <AddCar />
    //       </Route>
    //     </Switch>
    //   </BrowserRouter>  // BroswerRouter tagovi se prebace u index.js kada se koristi layout
    // </div>
    <div className="App">
        <Page
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        >
          <Router setIsAuthenticated={setIsAuthenticated} />
        </Page>
    </div>
  );
}

export default App;
