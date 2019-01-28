import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
import {
  NavbarBrand,
  Nav,
  Row,
  Col,
  Container,
  CardFooter,
  NavLink
} from "reactstrap";

const Logo = styled.img`
  height: 8vh;
  width: auto;
`;

const NavTags = styled(NavLink)`
  font-weight: 1000;
  font-size: 2vh;
  line-height: 3vh;
  color: #ffffff;

  :hover {
    color: #ffcc12;
  }
`;

const FooterCard = styled(CardFooter)`
  background-color: #933594;
  color: white;
`;

const FootNav = styled(Nav)`
  background-color: #790379;
  color: white;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <FooterCard className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <NavbarBrand href="/">
                <Logo src={BrandLogo} alt="HiPawy" />
              </NavbarBrand>
              <p>
                Jl. Kemang I No.1, Bangka, Mampang Prpt.
                <br />
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
                <br />
                +6282331334446
              </p>
            </Col>
            <Col md="3">
              <h5 className="title">Company</h5>
              <ul>
                <li className="list-unstyled">
                  <NavTags href="/About/">About Us</NavTags>
                </li>
                <li className="list-unstyled">
                  <NavTags href="/Q&A/">Q&A</NavTags>
                </li>
              </ul>
            </Col>
            <Col md="3">
              <h5 className="title">Legal</h5>
              <ul>
                <li className="list-unstyled">
                  <NavTags href="/Privacy-Policy/">Privacy Policy</NavTags>
                </li>
                <li className="list-unstyled">
                  <NavTags href="/Term/">Term</NavTags>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <FootNav className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: HiPawy!
          </Container>
        </FootNav>
      </FooterCard>
    );
  }
}

export default Footer;
