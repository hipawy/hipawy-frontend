import React, { Component } from "react";
import BrandLogo from "../assets/Logo.png";
import styled from "styled-components";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavbarBrand } from "reactstrap";

const Logo = styled.img`
  height: 8vh;
  width: auto;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <MDBFooter color="purple" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <NavbarBrand href="/">
                <Logo src={BrandLogo} alt="HiPawy" />
              </NavbarBrand>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Company</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Q&A</a>
                </li>
              </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Legal</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Privacy Policy</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Term</a>
                            </li>
                        </ul>
                    </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: HiPawy!
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
