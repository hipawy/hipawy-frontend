import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import PetCare from "./views/PetCare";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/PetCare" exact component={PetCare} />
        </Switch>
      </Router>
    );
  }
}

export default App;
