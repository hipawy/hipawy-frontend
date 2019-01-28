import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Logo = styled.img`
  height: 8vh;
  width: auto;
`;

const NavTags = styled(NavLink)`
  font-weight: 1000;
  font-size: 3vh;
  line-height: 3vh;
  margin: 4vh 4vh 0 4vh;
  color: #ffffff;

  :hover {
    color: #ffcc12;
  }
`;

const NavBar = styled(Navbar)`
  background-color: #933594;
  color: white;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <NavBar expand="md">
          <NavbarBrand href="/">
            <Logo src={BrandLogo} alt="HiPawy" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavTags href="/About/">
                  About
                </NavTags>
              </NavItem>
              <NavItem>
                <NavTags href="/PetCare/"> Pet Care</NavTags>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavTags href="/components/">Register/Login</NavTags>
              </NavItem>
            </Nav>
          </Collapse>
        </NavBar>
      </div>
    );
  }
}

export default Header;
