import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
import classnames from "classnames";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Button,
  Card,
  CardTitle,
  CardBody,
  Collapse,
  Row,
  Col
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

const Loginfont = styled(CardTitle)`
  font-weight: 1200;
  font-size: 9vh;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, activeTab: "1" };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleTab = param => {
    if (this.state.activeTab !== param) {
      this.setState({ activeTab: param });
    }
  };
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="md">
          <Row noGutters="true">
            <Col sm="6">
              <Button
                block
                style={{ borderRadius: 0 }}
                className={classnames({
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggleTab("1");
                }}
              >
                Login
              </Button>
            </Col>

            <Col sm="6">
              <Button
                block
                style={{ borderRadius: 0 }}
                className={classnames({
                  active: this.state.activeTab === "2"
                })}
                onClick={() => {
                  this.toggleTab("2");
                }}
              >
                Register
              </Button>
            </Col>
          </Row>

          <Collapse isOpen={this.state.activeTab === "1"}>
            <Card>
              <CardBody>
                <Loginfont>Sign In</Loginfont>
                <Login />
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={this.state.activeTab === "2"}>
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
