import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import Axios from "axios";

import { signInAction } from "./store/actions/auth";
import { fetchUserPets } from "./store/actions/pets";

import Home from "./views/Home";
import About from "./views/About";
import PetCare from "./views/PetCare";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserSetting";

class App extends Component {
  async componentDidMount() {
    try {
      const token = Cookies.get("token");

      if (token) {
        const response = await Axios.get(
          `${process.env.REACT_APP_API_URL}/auth/verify`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.status !== 500) {
          this.props.signInAction(response.data.user);
          this.props.fetchUserPets(response.data.user.id);
        }
      }
    } catch (err) {}
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/PetCare" exact component={PetCare} />
            <Route path="/UserProfile/:id" exact component={UserProfile} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  null,
  { signInAction, fetchUserPets }
)(App);
