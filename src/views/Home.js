import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Jumbotron, Container, Button } from "reactstrap";

import PetAdopt from "../assets/pet-adopt.jpg";

const JumboStyle = styled(Jumbotron)`
  background-image: url(${PetAdopt});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45vw;
  padding-top: center;
  display: flex;
  text-align: center;
  font-weight: 2000
`;


class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div>
          <JumboStyle fluid>
            <Container fluid>
              <h1>Meet your Pawy, Meet your Bestfriend!!</h1>

              <Button outline color="purple">
                Learn More
              </Button>
            </Container>
          </JumboStyle>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
