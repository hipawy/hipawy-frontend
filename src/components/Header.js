import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Modal } from "reactstrap";
import LoginRegister from "../components/LoginRegister";

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
  width: 100vw;
`;

const CustomModal = styled(Modal)`
  margin: 5em !important;
  max-width: 100%;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
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
        <CustomModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <LoginRegister />
        </CustomModal>
      </div>
    );
  }
}

export default Header;
