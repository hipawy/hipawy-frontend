import React from "react";
import styled from "styled-components";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import Login from "./Login";
import Register from "./Register";

const Loginfont = styled(CardTitle)`
  font-weight: 1200;
  font-size: 15vh;
`;

const Cards = styled(CardGroup)`
  display: flex;
  text-align: center;
  width: 150vh;
  height: 80%;
`;

const LoginRegister = props => {
  return (
    <Cards>
      <Card>
        {/* <CardImg
          src="https://www.cutepet.co.za/wp-content/uploads/2018/03/Cute-Pet-Header-Login.png"
          alt="Login Image"
        /> */}
        <CardBody>
          <Loginfont>Sign In</Loginfont>
          <Login />
        </CardBody>
      </Card>
      <Card>
        {/* <CardImg
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc5rtCrc4q5-sF-NBXX4PA23_Q0UAfi_Y46Pw1DVTx-pOzDIx"
          alt="Card image cap"
        /> */}
        <CardBody>
          <Loginfont>Register</Loginfont>
          <Register />
        </CardBody>
      </Card>
    </Cards>
  );
};

export default LoginRegister;
