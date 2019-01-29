import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Button,
  ModalHeader,
  Card,
  CardTitle,
  CardBody,
  ModalBody,
  Collapse
} from "reactstrap";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";

const Logo = styled.img`
  height: 5vh;
  // width: auto;
  margin-right: 10px;
`;

const NavTags = styled(NavLink)`
  font-weight: 1000;
  color: #ffffff;
  margin: 5px;

  :hover {
    color: #ffcc12;
  }
`;

const NavBar = styled(Navbar)`
  display: flex;
  justify-content: center;
  background-color: #933594;
  color: white;
  width: 100vw;
`;

const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Loginfont = styled(CardTitle)`
  font-weight: 1200;
  font-size: 9vh;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapseA: true,
      collapseB: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNestedA = this.toggleNestedA.bind(this);
    this.toggleNestedB = this.toggleNestedB.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      collapseA: true,
      collapseB: false
    });
  }

  toggleNestedA() {
    this.setState({
      collapseA: !this.state.collapseA,
      collapseB: false
    });
  }

  toggleNestedB() {
    this.setState({
      collapseA: false,
      collapseB: !this.state.collapseB
    });
  }
  render() {
    return (
      <div>
        <NavBar expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <Logo src={BrandLogo} alt="HiPawy" />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavTags href="/About/">About</NavTags>
              </NavItem>
              <NavItem>
                <NavTags href="/PetCare/">Pet Care</NavTags>
              </NavItem>
              <NavItem>
                <NavTags href="/Q&A/">Q&A</NavTags>
              </NavItem>
            </Nav>

            <Nav>
              <NavItem>
                <NavTags onClick={this.toggle}>
                  <i className="fa fa-user" />
                  <span style={{ marginLeft: "10px" }}>Join Us</span>
                </NavTags>
              </NavItem>
            </Nav>
          </div>
        </NavBar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm">
          <ModalButton>
            <Button onClick={this.toggleNestedA}>Login</Button>
            <Button onClick={this.toggleNestedB}>Register</Button>
          </ModalButton>
          <Collapse isOpen={this.state.collapseA}>
            <Card>
              <CardBody>
                <Loginfont>Sign In</Loginfont>
                <Login />
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={this.state.collapseB}>
            <Card>
              <CardBody>
                <Loginfont>Register</Loginfont>
                <Register />
              </CardBody>
            </Card>
          </Collapse>
        </Modal>
      </div>
    );
  }
}

export default Header;
