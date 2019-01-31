import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import PetCare from "./views/PetCare";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/PetCare" exact component={PetCare} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
