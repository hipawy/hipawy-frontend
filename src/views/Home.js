import React, { Component } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <LoginRegister />
      </div>
    );
  }
}

export default Home;
