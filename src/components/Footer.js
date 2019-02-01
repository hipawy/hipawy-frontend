import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
import { NavbarBrand, Row, Col, Container, CardFooter } from "reactstrap";

const Logo = styled.img`
  height: 8vh;
  width: auto;
`;

const FooterCard = styled(CardFooter)`
  background-color: #933594;
  color: white;
  width: 100%;
`;

const styles = {
  anchor: {
    color: "white"
  },
  divBackground: {
    backgroundColor: "#740474",
    color: "white"
  },
  ulStyles: {
    padding: "0px"
  }
};

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <FooterCard className="font-small pt-4">
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
                <ul style={styles.ulStyles}>
                  <li className="list-unstyled">
                    <a style={styles.anchor} href="/About/">
                      About Us
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a style={styles.anchor} href="/Q&A/">
                      Q&A
                    </a>
                  </li>
                </ul>
              </Col>

              <Col md="3">
                <h5 className="title">Legal</h5>
                <ul style={styles.ulStyles}>
                  <li className="list-unstyled">
                    <a style={styles.anchor} href="/PrivacyPolicy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a style={styles.anchor} href="/Term/">
                      Term
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </FooterCard>

        <div
          style={styles.divBackground}
          className="footer-copyright text-center py-3"
        >
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: HiPawy!
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
