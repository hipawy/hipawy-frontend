import React, { Component } from "react";
// import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserSetting from "../components/UserSetting";

class PetCare extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <div>
          <UserSetting />
        </div>
      </div>
    );
  }
}

export default PetCare;
