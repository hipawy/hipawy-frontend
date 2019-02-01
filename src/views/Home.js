import React, { Component } from "react";
import styled from "styled-components";
import { Jumbotron, Container, Button } from "reactstrap";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Footer from "../components/Footer":

import PetAdopt from "../assets/pet-adopt.jpg";

const JumboStyle = styled(Jumbotron)`
  background-image: url(${PetAdopt});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45vw;
  display: flex;
  text-align: center;
  width: 100%;
  margin-bottom: 0rem;
`;

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
        <JumboStyle fluid>
          <Container fluid>
            <h1>Meet your Pawy, Meet your Bestfriend!!</h1>

            <Button outline color="purple">
              Learn More
            </Button>
          </Container>
        </JumboStyle>
      </Body>
    );
  }
}

export default Home;
