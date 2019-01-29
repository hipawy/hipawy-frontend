import React, { Component } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <Body>
        <Header />
        <LoginRegister />
      </Body>
    );
  }
}

export default Home;
