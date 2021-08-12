import React from "react";
import Menu from "./Menu";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Order from "./Order.jsx"
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path="/">
      <Menu />
      </Route>
      <Route exact path="/orders">
      <Order />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
