import React, { Component } from "react";
import { connect } from "react-redux";
import BrandLogo from "../../assets/Logo.png";
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
import { Link } from "react-router-dom";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import UserDropDown from "./UserDropdown";
import { signUp } from "../../store/actions/auth";

const Logo = styled.img`
  height: 7vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 3vw;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const LoginRegister = styled.div`
  margin: 10px 20px;
`;

const NavTags = styled(NavLink)`
  font-weight: 1000;
  font-size: 4vh;
  color: #ffffff;
  margin: 0;
  padding: 0;

  :hover {
    color: #ffcc12;
  }
`;

const NavBar = styled(Navbar)`
  display: flex;
  justify-content: center;
  background-color: #933594;
  color: white;
  width: 100%;
  padding: 0;
`;

const Loginfont = styled(CardTitle)`
  font-weight: 1200;
  font-size: 11vh;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeTab: "1",
      // login: false,
      dropdownOpen: true
    };

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
    let icon_login;
    const { isAuthenticated } = this.props;

    if (isAuthenticated === true) {
      icon_login = <UserDropDown />;
    } else {
      icon_login = (
        <div>
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} size="md">
              <Row noGutters={true}>
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
          <LoginRegister>
            <i className="fa fa-user" />
            <span style={{ marginLeft: "10px" }}>Join Us</span>
          </LoginRegister>
        </div>
      );
    }

    return (
      <div>
        <NavBar expand="md">
          <Container>
            <NavLeft>
              <NavbarBrand tag={Link} to="/">
                <Logo src={BrandLogo} alt="HiPawy" />
              </NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavTags tag={Link} to="/About/">
                    About
                  </NavTags>
                </NavItem>
                <NavItem>
                  <NavTags tag={Link} to="/PetCare/">
                    Pet Care
                  </NavTags>
                </NavItem>
                <NavItem>
                  <NavTags tag={Link} to="/Q&A/">
                    Q&A
                  </NavTags>
                </NavItem>
              </Nav>
            </NavLeft>

            <Nav>
              <NavItem>
                <NavTags onClick={this.toggle}>{icon_login}</NavTags>
              </NavItem>
            </Nav>
          </Container>
        </NavBar>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  isSignUpSuccess: store.auth.isSignUpSuccess
});

export default connect(
  mapStateToProps,
  { signUp }
)(Header);