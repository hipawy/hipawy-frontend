import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Jumbotron, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer":

import "./Home.css";

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
      <Fragment>
        <Body>
          
            <JumboStyle fluid>
              <Container fluid>
                <h1>Meet your Pawy, Meet your Bestfriend!!</h1>

                <Button outline color="purple" tag={Link} to='./About'>
                  Learn More
                </Button>
              </Container>
            </JumboStyle>
        
        </Body>

        <section className="step">
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <h2>Why Us</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="stepper d-flex flex-column mt-3 ml-2">
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="rounded-circle py-2 px-3 text-white mb-1">
                    1
                  </div>
                  <div className="line h-100" />
                </div>
                <div>
                  <h5 className="text-dark">Web based application</h5>
                  <p className="lead text-muted pb-3">
                    Web Based Application that can be accessed
                    <br /> anywhere and anytime
                  </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="rounded-circle py-2 px-3 text-white mb-1">
                    2
                  </div>
                  <div className="line h-100" />
                </div>
                <div>
                  <h5 className="text-dark">Find by location</h5>
                  <p className="lead text-muted pb-3">
                    Find the animal closest to you or by certain locations
                  </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="rounded-circle py-2 px-3 text-white mb-1">
                    3
                  </div>
                  <div className="line h-100" />
                </div>
                <div>
                  <h5 className="text-dark">Simple</h5>
                  <p className="lead text-muted pb-3">
                    Simple with the filter function
                  </p>
                </div>
              </div>
              <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                  <div className="rounded-circle py-2 px-3 text-white mb-1">
                    4
                  </div>
                  <div className="line h-100 d-none" />
                </div>
                <div>
                  <h5 className="text-dark">Saved time</h5>
                  <p className="lead text-muted pb-3">
                    Save your time with HiPawy App
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
