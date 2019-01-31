import React, { Component } from "react";
// import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import UserUpdate from "../components/UserSetting/UserUpdate";

class PetCare extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <div>
          <UserUpdate />
        </div>
      </div>
    );
  }
}

export default PetCare;
