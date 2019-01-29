import React from "react";
import styled from "styled-components";
import { Card, CardTitle, CardGroup, CardBody, Button } from "reactstrap";
import Login from "./Login";
import Register from "./Register";

const Loginfont = styled(CardTitle)`
  font-weight: 1200;
  font-size: 9vh;
`;

const Cards = styled(CardGroup)`
  display: flex;
  // flex-direction: column;
  text-align: center;
  height: 50%;
`;

const LoginRegister = props => {
  return (
    <Cards>
      <Card>
        <CardBody>
          <Loginfont>Sign In</Loginfont>
          <Login />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Loginfont>Register</Loginfont>
          <Register />
        </CardBody>
      </Card>
    </Cards>
  );
};

export default LoginRegister;
