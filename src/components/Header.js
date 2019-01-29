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
  height: 5vh;
  width: auto;
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
          <div className="container">
            <NavbarBrand href="/">
              <Logo src={BrandLogo} alt="HiPawy" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavTags href="/about/">About</NavTags>
                </NavItem>
                <NavItem>
                  <NavTags href="/petCare/">Pet Care</NavTags>
                </NavItem>
                <NavItem>
                  <NavTags href="/Q&A/">Q&A</NavTags>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem>
                  <NavTags href="/joinus/">
                    <i className="fa fa-user" />
                    <span style={{ marginLeft: "10px" }}>Join Us</span>
                  </NavTags>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
